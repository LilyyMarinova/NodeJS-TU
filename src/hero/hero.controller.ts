import { Controller, Get, Param, Query } from '@nestjs/common';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';


@Controller('hero')
export class HeroController {
	constructor(private heroService: HeroService) {}

	@Get(':universe')
	getHeroesByUniverse(@Param('universe') universe: string) {
		return this.heroService.getHeroesByUniverse(universe);
	}
  
	@Get()
	getHeroesByFilters(@Query() queryParams: { name: string, universe: string }): Hero[] {
		if (Object.keys(queryParams).length === 0) {
			return this.heroService.getAllHeroes();
		}

		return this.heroService.getHeroesByFilters(queryParams.universe, queryParams.name);
	}
	
}
