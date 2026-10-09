import { Module } from '@nestjs/common';
import { BeersController } from './beers.controller.js';
import { BeersService } from './beers.service.js';

@Module({
  controllers: [BeersController],
  providers: [BeersService]
})
export class BeersModule {}
