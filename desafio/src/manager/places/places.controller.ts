import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { placesInsertDto, placesUpdateDto } from './dto/places.dto';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post('/insert')
  insert(@Body() params: placesInsertDto) {
    return this.placesService.insert(params);
  }

  @Put('/update')
  update(@Body() params: placesUpdateDto) {
    return this.placesService.update(params);
  }

  @Get('/findOne/:id')
  findOne(@Param() params) {
    return this.placesService.findOne(params);
  }

  @Get('/findAll')
  findAll() {
    return this.placesService.findAll();
  }
}
