export class UpdateBeerDto {
  // add readonly to properties to maintain immutability
  // usually for update endpint, properties should be optional
  readonly name?: string;
  readonly brand?: string;
  readonly flavors?: string[];
}
