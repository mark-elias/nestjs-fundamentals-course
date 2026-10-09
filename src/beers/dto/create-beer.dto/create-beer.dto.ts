import { IsArray, IsString } from 'class-validator';

export class CreateBeerDto {
  // add readonly to properties to maintain immutability
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsArray()
  @IsString({ each: true })
  readonly flavors: string[];
}
