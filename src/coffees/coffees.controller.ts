import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  // basic route
  @Get()
  getCoffess() {
    return 'this returns all coffees';
  }
  // nested route
  @Get('nested-route')
  getCoffees() {
    return 'this is a basic nested route';
  }

  // ===== route parameters =====
  // @Param('coffeeId') returns that one URL slot as a string, e.g. "10".
  // @Param() returns every slot in one object, e.g. { coffeeId: "10", coffeeSize: "large" }.
  // Those object values are still strings. The empty decorator only groups the slots.
  // ===================

  // the name inside the get and param decorators have to match
  @Get(':coffeeId')
  // the parameter name is my local variable, nest ignores this name. doesnt care about it
  // every route parameter arrives as a string. so type must be string
  getOneParam(@Param('coffeeId') whatever: string) {
    // varaible name has to match my parameter name
    return `retunrs one route parameter ${whatever}`;
  }

  // @Get(':coffeeId')
  // getOneParamObject(@Param() whatever: { coffeeId: string }) {
  //   return whatever;
  // }

  // multiple route parameters
  @Get(':coffeeId/:coffeeSize')
  getMultipleParams(
    @Param() whatever: { coffeeId: string; coffeeSize: string },
  ) {
    // return `id: ${whatever.coffeeId}, size: ${whatever.coffeeSize}`;
    return whatever;
  }

  @Get(':coffeeId/:servingSize/:milkType')
  getMultipleParamDecorators(
    @Param('coffeeId') whateverCoffee: string,
    @Param('servingSize') whateverSize: string,
    @Param('milkType') whateverMilk: string,
  ) {
    return `id: ${whateverCoffee}, size: ${whateverSize}, ${whateverMilk}`;
  }

  // ===== Body decorator ===
  @Post()
  addCoffee(@Body() body: string) {
    return body;
  }

  // ===== HTTP response status codes
  // example if you want this endpoint to always return a certain status code
  @Post()
  @HttpCode(HttpStatus.GONE)
  oldEndpoint(@Body() body: string) {
    return body;
  }
}
