import { Module } from '@nestjs/common';
import { GuitarsController } from './guitars.controller.js';

@Module({
  controllers: [GuitarsController]
})
export class GuitarsModule {}
