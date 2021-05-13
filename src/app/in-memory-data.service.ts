import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Superman", edad: 30, poder: "Superfuerza, volar", identidad: "Clark Ken", universo: "DC" },
      { id: 12, name: "Batman", edad: 27, poder: "Traje de murcielago", identidad: "Bruno Diaz", universo: "DC" },
      { id: 13, name: "Hulk", edad: 40, poder: "Transformacion", identidad: "Bruce Banner", universo: "Marvel" },
      { id: 14, name: "Ironman", edad: 28, poder: "Traje Tecnologico", identidad: "Tony Stark", universo: "Marvel" },
      { id: 15, name: "Thor", edad: 1000, poder: "Manipular Truenos y Rayos", identidad: "Thor", universo: "Marvel" },
      { id: 16, name: "Spiderman", edad: 20, poder: "Telaraña, Sentido Aracnido", identidad: "Peter Parker", universo: "Marvel" },
      { id: 17, name: "Black Widow", edad: 33, poder: "Fuerza Superior", identidad: "Natasha Romanof", universo: "Marvel" },
      { id: 18, name: "Flash", edad: 24, poder: "Velocidad del sonido", identidad: "Barry Allen", universo: "DC" },
      { id: 19, name: "Bruja escarlata", edad: 29, poder: "Magia", identidad: "Wanda Maximoff", universo: "Marvel" },
      { id: 20, name: "Wonder Woman", edad: 26, poder: "Amazonico", identidad: "Diana Prince", universo: "DC" },

    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
