import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    
  @Get('nested-route')
  getCoffees() {
    return 'this returns all coffees';
  }
}
