import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPhysioComponent } from './components/add-physio/add-physio.component';

const routes: Routes = [
  {
    path: "add-physio",
    component: AddPhysioComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PhysioRoutingModule { }
