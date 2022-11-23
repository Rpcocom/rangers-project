import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeNgModule } from './prime-ng.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [NavbarComponent,PrimeNgModule]
})
export class SharedModule { }
