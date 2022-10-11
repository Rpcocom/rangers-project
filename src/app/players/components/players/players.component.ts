import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any[] = [
    {
      name: "Rodrigo Puc",
      nat: "Mexican",
      pos: "Defender"
    },
    {
      name: "Marcos Guardado",
      nat: "Mexican",
      pos: "Attacker"
    },
    {
      name: "Javier Hernandez",
      nat: "Mexican",
      pos: "Defender"
    },
    {
      name: "Nestor Araujo",
      nat: "Argetinian",
      pos: "Goal Keeper"
    },
    {
      name: "Rodrigo Puc",
      nat: "Mexican",
      pos: "Defender"
    },
    {
      name: "Marcos Guardado",
      nat: "Mexican",
      pos: "Attacker"
    },
    {
      name: "Javier Hernandez",
      nat: "Mexican",
      pos: "Defender"
    },
    {
      name: "Nestor Araujo",
      nat: "Argetinian",
      pos: "Goal Keeper"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
