import { Component, OnInit } from '@angular/core';
import { doc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { IPlayer } from 'src/app/interfaces/player.interfaces';
import { PlayersService } from 'src/app/shared/services/players.service';



@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public formPlayer!: FormGroup<any>;
  hasErrors: boolean = false;

  constructor(private formbuilder: FormBuilder, private playersService: PlayersService) { }


  players: any[] = [];
  display: boolean = false;
  countries!: { name: string }[];
  selectedCouuntry!: { name: string };
  positions!: { name: string }[];
  selectedPosition!: { name: string };


  ngOnInit(): void {
    this.getPlayers();
    this.formPlayer = this.formbuilder.group({
      fname: ["", [Validators.required]],
      age: ["", [Validators.required]],
      weight: ["", [Validators.required]],
      height: ["", [Validators.required]],
      position: ["", [Validators.required]],
      country: ["", [Validators.required]]

    })


    this.countries = [
      { name: "Mexico" },
      { name: "Colombia" },
      { name: "Argentine" }

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

  async getPlayers() {
    const querySnapshot = await this.playersService.getPlayers();
    querySnapshot.docs.forEach(doc => {
      this.players.push({_id:doc.id,...doc.data()})
    });

    console.log(this.players);
  }

  submitPlayer() {
    if (this.formPlayer.invalid) {
      alert("Invaid form, please check")
    } else {
      alert("All done")
    }
    this.addPlayer(this.formPlayer.value);
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

  async addPlayer(player: IPlayer) {
    const res = await this.playersService.addPlayer(player);
    console.log(res);
  }

  async deletePlayer(id:string){
    const res = await this.playersService.deletePlayer(id);
    console.log(res);
  }

}
