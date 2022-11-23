import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog'
import {CarouselModule} from 'primeng/carousel';

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
    ButtonModule,
    ToastModule, 
    ConfirmDialogModule,
    CarouselModule
  ],
  exports: [MenubarModule, CardModule, ImageModule, InputTextModule, DropdownModule, DialogModule, ButtonModule, ToastModule, ConfirmDialogModule, CarouselModule],
  
})
export class PrimeNgModule { }
