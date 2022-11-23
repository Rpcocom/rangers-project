import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPhysio } from 'src/app/interfaces/physio.interfaces';
import { PhysioService } from 'src/app/shared/services/physio.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-physio',
  templateUrl: './add-physio.component.html',
  styleUrls: ['./add-physio.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class AddPhysioComponent implements OnInit {
  physios$ = new Subject<any>();
  public formPhysio!: FormGroup<any>;
  hasErrors: boolean = false;

  constructor(private formbuilder: FormBuilder, private physioService: PhysioService, private messageService: MessageService, private confirmationService: ConfirmationService) {}
  
  physios: any[] = [];
  display: boolean = false;
  physio!:any;

  ngOnInit(): void {

    this.physios$.subscribe((physios: IPhysio[]) => {
      this.physios = [...physios];
    });
    this.getPhysios().then((physios: any) => {
      this.physios$.next(physios);
    })
    this.formPhysio = this.formbuilder.group({
      fname: ["", [Validators.required]],
      age: ["", [Validators.required]],
    })
    
  }
  
  physioSend() {
    this.display = true;
  }

  clearForm() {
    this.formPhysio.reset();
    this.physio=undefined;
  }

  showDialog() {
    this.display = true;
  }

 
  async addPhysio(physio: IPhysio) {
    const res = await this.physioService.addPhysio(physio);
    this.getPhysios().then((physio: any) => {
      this.physios$.next(physio);
    })
  }
  submitPhysio() {
    if (this.formPhysio.invalid) {
      alert("Invaid form, please check")
    } else {
      this.messageService.add({ severity: 'success', summary: 'Player Added', detail: 'The player has been added succesfully' });
    }
    this.addPhysio(this.formPhysio.value);
    this.getPhysios().then((physios: any) => {
    debugger

      this.physios$.next(physios);
    })
    this.display = false;
  }
  async getPhysios() {
    return await this.physioService.getPhysios()
  }


  deletePhysio(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: async () => {
        const res = await this.physioService.deletePhysio(id);
        this.getPhysios().then((physio: any) => {
          this.physios$.next(physio);
        })
        this.messageService.add({ severity: 'success', summary: 'Physio deleted', detail: 'The physio has been deleted succesfully' });
        //Actual logic to perform a confirmation
      }
    });
  }
  

  async openUpdatePhysio(id: string) {
    this.physio = await this.physioService.getPhysioById(id);
    this.display = true;
    this.formPhysio
    .setValue({
      fname: this.physio.fname,
      age: this.physio.age,
    })

  }

  async updatePhysio(id: string) {
    debugger
    this.physioService.updatePhysio(id, this.formPhysio.value)
    this.getPhysios().then((physios: any) => {
      this.physios$.next(physios);
    })
    this.physio = null;
    this.display = false;
  }



  hasInputError(name: string) {
    return this.formPhysio.get(name)?.errors &&
      this.formPhysio.get(name)?.hasError('required')
  }

  getErrorMessages(name: string) {
    return this.formPhysio.controls[name].errors
  }
}
