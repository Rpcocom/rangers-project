import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "players",
    loadChildren: () => import("./players/players.module").then(m => m.PlayersModule)
  },
  {
    path: "physio",
    loadChildren: () => import("./physio/physio.module").then(m => m.PhysioModule)
  },
  {
    path: "tests",
    loadChildren: () => import("./tests/tests.module").then(m => m.TestsModule)
  },
  {
    path: "training",
    loadChildren: () => import("./training/training.module").then(m => m.TrainingModule)
  },
  
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
