import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BeersService } from './beers.service.js';

// example controller for working with a CRUD service
@Controller('beers')
export class BeersController {
  constructor(private readonly beersService: BeersService) {}

  @Get()
  findAll() {
    return this.beersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') whatever: string) {
    return this.beersService.findOne(whatever);
  }

  @Post()
  create(@Body() body: string) {
    return this.beersService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: string) {
    return this.beersService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.beersService.delete(id);
  }
}
