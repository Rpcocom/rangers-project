import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs } from '@angular/fire/firestore';
import { IPlayer } from 'src/app/interfaces/player.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private firestore: Firestore) { }

  async getPlayers() {
    return await getDocs(collection(this.firestore, "players"))
  }

  async addPlayer(player: IPlayer) {
    const playerRef = collection(this.firestore, 'players')
    const res = await addDoc(playerRef, player);
    return res;
  }

  deletePlayer(id: string) {
    deleteDoc(doc(this.firestore, "players", id))
  }
}
