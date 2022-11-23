import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddTestsComponent } from './components/add-tests/add-tests.component';

const routes: Routes = [
  {
    path: "add-tests",
    component: AddTestsComponent
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
export class TestsRoutingModule { }
