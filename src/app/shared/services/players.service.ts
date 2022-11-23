import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { IPlayer } from 'src/app/interfaces/player.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  collection(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private firestore: Firestore) { }

  async getPlayers() {
    const querySnapshot = await getDocs(collection(this.firestore, "players"))
    const players = querySnapshot.docs.map((doc) => {
      return { _id: doc.id, ...doc.data() }
    });
    return players;
  }

  async getPlayerById(id: string) {
    const playerRef = doc(this.firestore, "players", id);
    const docSnap = await getDoc(playerRef);
    return {
      _id: docSnap.id,
      ...docSnap.data(),
    };

  }

  async addPlayer(player: IPlayer) {
    const playerRef = collection(this.firestore, 'players')
    const res = await addDoc(playerRef, player);
    return res;
  }

  deletePlayer(id: string) {
    deleteDoc(doc(this.firestore, "players", id))
  }

  async updatePlayer(id: string, player: IPlayer) {
    debugger
    const playerRef = doc(this.firestore, "players", id);
    const res = await updateDoc(playerRef, { ...player })
    console.log(res);

    // Set the "capital" field of the city 'DC'
    // const res = await updateDoc(playerRef, {player});
  }

}
