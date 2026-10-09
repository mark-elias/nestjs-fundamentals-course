import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CoffeesModule } from './coffees/coffees.module.js';
import { GuitarsModule } from './guitars/guitars.module.js';
import { BeersModule } from './beers/beers.module.js';

@Module({
  imports: [CoffeesModule, GuitarsModule, BeersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
