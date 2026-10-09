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
import { UpdateBeerDto } from './dto/update-beer.dto/update-beer.dto.js';
import { CreateBeerDto } from './dto/create-beer.dto/create-beer.dto.js';

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
  create(@Body() createBeerDto: CreateBeerDto) {
    return this.beersService.create(createBeerDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeerDto: UpdateBeerDto) {
    return this.beersService.update(id, updateBeerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.beersService.delete(id);
  }
}
