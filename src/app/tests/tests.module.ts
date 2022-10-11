import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTestsComponent } from './components/add-tests/add-tests.component';
import { TestsRoutingModule } from './tests-routing.module';




@NgModule({
  declarations: [
    AddTestsComponent
  ],
  imports: [
    CommonModule,
    TestsRoutingModule
  ]
})
export class TestsModule { }
