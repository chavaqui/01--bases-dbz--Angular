import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {
    private _personajes: Personaje[] =[
        {
          nombre: 'Freezer',
          poder: 1000000
        },
        {
          nombre: 'Goku',
          poder: 74500
        }
      ]

    get personajes(): Personaje[] {
        return [...this._personajes]
    }  

    constructor(){
    }

    agregarPersonaje( pPersonaje: Personaje) {
        this._personajes.push(pPersonaje)
    }
}