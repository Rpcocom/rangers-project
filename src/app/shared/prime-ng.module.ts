import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';
import {ChipsModule} from 'primeng/chips';
import {GMapModule} from 'primeng/gmap';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [MenubarModule,CardModule,ImageModule, GMapModule,ChipsModule]
})
export class PrimeNgModule { }
