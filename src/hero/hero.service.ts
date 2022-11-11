import { Injectable } from '@nestjs/common';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {

  marvelHeroes: Hero[] = [
    {name: 'Spiderman', powers: ['web'], universe: 'Marvel'},
    {name: 'Iron Man', powers: ['web'], universe: 'Marvel'},
    {name: 'Deadpool', powers: ['web'], universe: 'Marvel'},
    {name: 'Ant-man', powers: ['web'], universe: 'Marvel'},
  ];

  dcHeroes: Hero[] = [
    {name: 'Batman', powers: ['strenght'], universe: 'DC'},
    {name: 'Catwoman', powers: ['strenght'], universe: 'DC'},
    {name: 'Superman', powers: ['strenght'], universe: 'DC'},
  ];

  getAllHeroes(): Hero[] {
    const heroes = [...this.marvelHeroes, ...this.dcHeroes];
    return heroes;
  }

  getHeroesByUniverse(universe: string): Hero[] {
    const heroes = [...this.marvelHeroes, ...this.dcHeroes].filter(
      (hero) => hero.universe.toLocaleLowerCase() === universe.toLocaleLowerCase()
    );

    return heroes;
  }

  getHeroesByFilters(universe: string, name: string): Hero[] {
    let heroes = [];
    if (universe !== undefined && name !== undefined) {
      heroes = [...this.marvelHeroes, ...this.dcHeroes].filter(
        (hero) => hero.universe.toLocaleLowerCase() === universe.toLocaleLowerCase() && hero.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );
    }

    if (universe !== undefined) {
      heroes = [...this.marvelHeroes, ...this.dcHeroes].filter(
        (hero) => hero.universe.toLocaleLowerCase() === universe.toLocaleLowerCase()
      );
    }

    if (name !== undefined) {
      heroes = [...this.marvelHeroes, ...this.dcHeroes].filter(
        (hero) => hero.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );
    }

    return heroes;
  }

}

