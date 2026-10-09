import { Module } from '@nestjs/common';
import { BeersController } from './beers.controller.js';
import { BeersService } from './beers.service.js';

@Module({
  // list our controllers (API routes we want this module to instantiate)
  controllers: [BeersController],

  //  Here we can list providers within this current module that should be made available anywhere this module is imported
  // === exports

  // for adding other modules that this module requires
  // === imports

  // list our services for this module
  providers: [BeersService],
})
export class BeersModule {}
