export class CreateBeerDto {
  // add readonly to properties to maintain immutability
  readonly name: string;
  readonly brand: string;
  readonly flavors: string[];
}
