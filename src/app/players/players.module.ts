import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlayersRoutingModule } from './players-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlayersComponent } from './components/players/players.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    DashboardComponent,
    PlayersComponent
  ],
  imports: [
    SharedModule,
    PlayersRoutingModule,
    CommonModule,
    ReactiveFormsModule, 
    ToastModule
  ],
  exports:[DashboardComponent]
})
export class PlayersModule { }
