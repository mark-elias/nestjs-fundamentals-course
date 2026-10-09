import { Injectable, NotFoundException } from '@nestjs/common';

import { Beer } from './entities/beer.entity.js';

@Injectable()
export class BeersService {
  private beers: Beer[] = [
    {
      id: 1,
      name: 'Chula Vista Lager',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'wheat'],
    },
  ];

  findAll() {
    return this.beers;
  }

  // example of returning user friendly error messages
  findOne(id: string) {
    // this will force an error, you can see the error in the console
    // throw 'a random error';

    const coffee = this.beers.find((item) => item.id === +id);

    // return an error if the coffee is not found
    // nestjs has built in exception exception filters
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    // successful result
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.beers.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing entity
    }
  }

  delete(id: string) {
    const coffeeIndex = this.beers.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.beers.splice(coffeeIndex, 1);
    }
  }
}
