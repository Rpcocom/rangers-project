import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-physio',
  templateUrl: './add-physio.component.html',
  styleUrls: ['./add-physio.component.css']
})
export class AddPhysioComponent implements OnInit {
  public formPhysio!: FormGroup<any>;

  constructor(private formbuilder: FormBuilder) {
    

  }

  display: boolean = false;

  ngOnInit(): void {
    this.formPhysio = this.formbuilder.group({
      fname: ["", [Validators.required]],
      age: ["", [Validators.required]],
    })
    
  }

  showDialog() {
    this.display = true;
  }

  submitPlayer() {
    if (this.formPhysio.invalid) {
      alert("Invaid form, please check")
    } else {
      alert("All done")
    }
  }

  physioSend() {
    this.display = true;
  }

  clearForm() {
    this.formPhysio.reset();
  }

  hasInputError(name: string) {
    return this.formPhysio.get(name)?.errors &&
      this.formPhysio.get(name)?.hasError('required')
  }

  getErrorMessages(name: string) {
    return this.formPhysio.controls[name].errors
  }
}
