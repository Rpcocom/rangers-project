import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tests',
  templateUrl: './add-tests.component.html',
  styleUrls: ['./add-tests.component.css']
})

export class AddTestsComponent implements OnInit {

  public formTest!: FormGroup<any>;

  constructor(private formbuilder: FormBuilder) {

   }
   
   display: boolean = false;

  ngOnInit(): void {
    this.formTest = this.formbuilder.group({
      speed: ["", [Validators.required]],
      sprint: ["", [Validators.required]],
      flexibility: ["", [Validators.required]],
      jump: ["", [Validators.required]],
      abs: ["", [Validators.required]],
      date: ["", [Validators.required]],
    })
  }
  showDialog() {
    this.display = true;
  }
  submitTest() {
    if (this.formTest.invalid) {
      alert("Invaid form, please check")
    } else {
      alert("All done")
    }
  }

  testSend() {
    this.display = true;
  }

  clearForm() {
    this.formTest.reset();
  }

  hasInputError(name: string) {
    return this.formTest.get(name)?.errors &&
      this.formTest.get(name)?.hasError('required')
  }

  getErrorMessages(name: string) {
    return this.formTest.controls[name].errors
  }


}
