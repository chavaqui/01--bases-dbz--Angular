import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // personajes: Personaje[] = [];
  
  nuevo: Personaje ={
    nombre:'raiku',
    poder: 30
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes
  // }

  // agregarNuevoPersonaje(argumento: Personaje) {
  //   this.personajes.push(argumento)
    
  // }

  // constructor(private dbzService: DbzService) {
    
  // }
}
