import { PartialType } from '@nestjs/mapped-types';
import { CreateBeerDto } from '../create-beer.dto/create-beer.dto.js';

// partial type function returns the type of the class passed into it
// it inherits the validation rules
// and makes sets the properties to OPTIONAL
export class UpdateBeerDto extends PartialType(CreateBeerDto) {}

// ==== old code without Mapped Types ====

// export class UpdateBeerDto {
//   // add readonly to properties to maintain immutability
//   // usually for update endpint, properties should be optional
//   readonly name?: string;
//   readonly brand?: string;
//   readonly flavors?: string[];
// }
