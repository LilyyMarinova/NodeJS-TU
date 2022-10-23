import { Injectable } from '@nestjs/common';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {

  marvelHeroes: Hero[] = [
    {name: 'Spiderman 1', powers: ['web'], universe: 'Marvel'},
    {name: 'Spiderman 2', powers: ['web'], universe: 'Marvel'},
    {name: 'Spiderman 3', powers: ['web'], universe: 'Marvel'}
  ];

  dcHeroes: Hero[] = [
    {name: 'Batman 1', powers: ['strenght'], universe: 'DC'},
    {name: 'Batman 2', powers: ['strenght'], universe: 'DC'},
  ];

  getAllHeroes(): Hero[] {
    const heroes = [...this.marvelHeroes];
    return heroes;
  }

  getHeroesByUniverse(universe: string): Hero[] {
    const heroes = [...this.marvelHeroes, ...this.dcHeroes].filter(
      (hero) => hero.universe.toLocaleLowerCase() === universe.toLocaleLowerCase()
    );

    return heroes;
  }

}
