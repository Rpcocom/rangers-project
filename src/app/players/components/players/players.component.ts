import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public formPlayer!: FormGroup<any>;
  hasErrors: boolean = false;
  constructor(private formbuilder: FormBuilder) {

  }

  display: boolean = false;
  countries!: { name: string }[];
  selectedCouuntry!: { name: string };
  positions!: { name: string }[];
  selectedPosition!: { name: string };
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


  ngOnInit(): void {

    this.formPlayer = this.formbuilder.group({
      fname: ["", [Validators.required]],
      age: ["", [Validators.required]],
      position: ["", [Validators.required]],
      country: ["", [Validators.required]]

    })


    this.countries = [
      { name: "Mexico" },
      { name: "Colombia" },
      { name: "Argentine"}

    ];

    this.positions = [
      { name: "Goalkeeper" },
      { name: "Defender" },
      { name: "Midfielder" },
      { name: "Forward" }
    ];
  }

  showDialog() {
    this.display = true;
  }

  submitPlayer() {
    if (this.formPlayer.invalid) {
      alert("Invaid form, please check")
    } else {
      alert("All done")
    }
  }

  playerSend() {
    this.display = true;
  }

  clearForm() {
    this.formPlayer.reset();
  }


  hasInputError(name: string) {
    return this.formPlayer.get(name)?.errors &&
      this.formPlayer.get(name)?.hasError('required')
  }

  getErrorMessages(name: string) {
    return this.formPlayer.controls[name].errors
  }

}
