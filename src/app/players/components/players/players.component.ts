import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPlayer } from 'src/app/interfaces/player.interfaces';
import { PlayersService } from 'src/app/shared/services/players.service';
import { ConfirmationService, MessageService } from 'primeng/api';


import { Subject } from 'rxjs';




@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [MessageService, ConfirmationService]

})

export class PlayersComponent implements OnInit {
  players$ = new Subject<any>();
  public formPlayer!: FormGroup<any>;
  hasErrors: boolean = false;

  constructor(private formbuilder: FormBuilder, private playersService: PlayersService, private messageService: MessageService, private confirmationService: ConfirmationService) { }


  players: any[] = [];
  display: boolean = false;
  countries!: { name: string }[];
  selectedCouuntry!: { name: string };
  positions!: { name: string }[];
  selectedPosition!: { name: string };
  player!: any;


  ngOnInit(): void {
    this.players$.subscribe((players: IPlayer[]) => {
      this.players = [...players];
    });
    this.getPlayers().then((players: any) => {
      this.players$.next(players);
    })
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


  playerSend() {
    this.display = true;
  }

  clearForm() {
    this.formPlayer.reset();
    this.player = undefined;
  }

  showDialog() {
    this.display = true;
  }





  async addPlayer(player: IPlayer) {
    const res = await this.playersService.addPlayer(player);
    this.getPlayers().then((players: any) => {
      this.players$.next(players);
    })

  }

  async submitPlayer() {
    if (this.formPlayer.invalid) {
      alert("Invaid form, please check")
    } else {
      this.messageService.add({ severity: 'success', summary: 'Player Added', detail: 'The player has been added succesfully' });
    }
    this.addPlayer(this.formPlayer.value);
    this.getPlayers().then((players: any) => {
      this.players$.next(players);
    })
    this.display = false;
  }
  async getPlayers() {
    return await this.playersService.getPlayers()
  }
  


  deletePlayer(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: async () => {
        const res = await this.playersService.deletePlayer(id);
        this.getPlayers().then((players: any) => {
          this.players$.next(players);
        })
        this.messageService.add({ severity: 'success', summary: 'Player deleted', detail: 'The player has been deleted succesfully' });
        //Actual logic to perform a confirmation
      }
    });
  }



  async openUpdatePlayer(id: string) {
    this.player = await this.playersService.getPlayerById(id);
    this.display = true;
    this.formPlayer.setValue({
      fname: this.player.fname,
      age: this.player.age,
      weight: this.player.weight,
      height: this.player.height,
      position: {name:this.player.position.name},
      country: {name:this.player.country.name}

    })

  }

  async updatePlayer(id: string) {
    debugger
    this.playersService.updatePlayer(id, this.formPlayer.value)
    this.getPlayers().then((players: any) => {
      this.players$.next(players);
    })
    this.player = null;
    this.display = false;
  }


  hasInputError(name: string) {
    return this.formPlayer.get(name)?.errors &&
      this.formPlayer.get(name)?.hasError('required')
  }

  getErrorMessages(name: string) {
    return this.formPlayer.controls[name].errors
  }

}
