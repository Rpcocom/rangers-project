import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTestsComponent } from './components/add-tests/add-tests.component';
import { TestsRoutingModule } from './tests-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddTestsComponent
  ],
  imports: [
    CommonModule,
    TestsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class TestsModule { }
