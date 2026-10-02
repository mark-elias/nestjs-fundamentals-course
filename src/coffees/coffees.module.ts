import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller.js';

@Module({
  controllers: [CoffeesController],
})
export class CoffeesModule {}
