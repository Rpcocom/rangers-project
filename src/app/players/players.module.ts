import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlayersRoutingModule } from './players-routing.module';
import { PrimeNgModule } from '../shared/prime-ng.module';
import { PlayersComponent } from './components/players/players.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PlayersComponent,
  ],
  imports: [
    PrimeNgModule,
    PlayersRoutingModule,
    CommonModule
  ],
  exports:[DashboardComponent]
})
export class PlayersModule { }
