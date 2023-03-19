import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls: ['heroe.component.css']
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  //gets and sets and another methods
  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre(newName: HTMLInputElement):void {
    this.nombre = newName.value;
  }
  
  cambiarEdad(pEdad: HTMLInputElement):void {
    this.edad = pEdad.valueAsNumber;
    console.log('hey..');
    
  }
}
