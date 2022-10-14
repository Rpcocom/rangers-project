import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    ImageModule,
    InputTextModule,
    DropdownModule,
    DialogModule,
    ButtonModule
  ],
  exports: [MenubarModule, CardModule, ImageModule, InputTextModule, DropdownModule, DialogModule, ButtonModule]
})
export class PrimeNgModule { }
