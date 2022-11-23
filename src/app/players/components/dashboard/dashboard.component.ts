import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IPlayer } from 'src/app/interfaces/player.interfaces';
import { PlayersService } from 'src/app/shared/services/players.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  players$ = new Subject<any>();
  options: any;
  players: any[] = [];
  display: boolean = false;
  countries!: { name: string }[];
  selectedCouuntry!: { name: string };
  positions!: { name: string }[];
  selectedPosition!: { name: string };
  player!:any;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };
    this.players$.subscribe((players: IPlayer[]) => {
      this.players = [...players];
    });
    this.getPlayers().then((players: any) => {
      this.players$.next(players);
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

  async getPlayers() {
    return await this.playersService.getPlayers()
  }

}
