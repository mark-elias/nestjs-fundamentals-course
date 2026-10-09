import { Controller, Get, Query } from '@nestjs/common';

@Controller('guitars')
export class GuitarsController {
  // pagination with query parameters
  // the url query parameter name has to match the type property name
  @Get('pagination-example')
  paginatedGetAll(
    @Query() queryParameters: { limit: string; offset: string; word: string },
  ) {
    const { limit, offset, word } = queryParameters;
    return `here are your query param(s). limit: ${limit} offset: ${offset} word: ${word}`;
  }
}
