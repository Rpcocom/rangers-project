import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { IPhysio } from 'src/app/interfaces/physio.interfaces';


@Injectable({
  providedIn: 'root'
})

export class PhysioService {
  collection(arg0: string) {
    throw new Error('Method not implemented.');
  }
    constructor(private firestore: Firestore) { }
  
  async getPhysios() {
      const querySnapshot = await getDocs(collection(this.firestore, "physios"))
      const physios = querySnapshot.docs.map((doc) => {
        return { _id: doc.id, ...doc.data() }
      });
      return physios;
    }
    async getPhysioById(id: string) {
      const physioRef = doc(this.firestore, "physios", id);
      const docSnap = await getDoc(physioRef);
      return {
        _id: docSnap.id,
        ...docSnap.data(),
      };
  
    }

  async addPhysio(physio: IPhysio) {
      const physioRef = collection(this.firestore, 'physios')
      const res = await addDoc(physioRef, physio);
      return res;
    }

    deletePhysio(id: string) {
      deleteDoc(doc(this.firestore, "physios", id))
    }

    async updatePhysio(id: string, physio: IPhysio) {
      debugger
      const physioRef = doc(this.firestore, "physios", id);
      const res = await updateDoc(physioRef, { ...physio })
      console.log(res);
  
      // Set the "capital" field of the city 'DC'
      // const res = await updateDoc(playerRef, {player});
    }
  }
