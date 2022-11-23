import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPhysioComponent } from './components/add-physio/add-physio.component';
import { PhysioRoutingModule } from './physio-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddPhysioComponent
  ],
  imports: [
    CommonModule,
    PhysioRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PhysioModule { }
