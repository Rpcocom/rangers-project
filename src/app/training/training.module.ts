import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { ExercicesRoutingModule } from './exercices-routing.module';



@NgModule({
  declarations: [
    ExercicesComponent
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule
  ]
})
export class TrainingModule { }
