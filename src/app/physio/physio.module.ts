import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPhysioComponent } from './components/add-physio/add-physio.component';
import { PhysioRoutingModule } from './physio-routing.module';



@NgModule({
  declarations: [
    AddPhysioComponent
  ],
  imports: [
    CommonModule,
    PhysioRoutingModule
  ]
})
export class PhysioModule { }
