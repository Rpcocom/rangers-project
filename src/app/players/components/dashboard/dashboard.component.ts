import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  options: any;
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
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };

  }

}
