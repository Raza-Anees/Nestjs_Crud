import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpCode,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  Patch,
  Headers,
  Delete,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/id.dto';
import { ParseIdPipe } from './pipes/parseidpipes';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Controller('property')
export class PropertyController {
  constructor(private PropertyService: PropertyService) {}
  @Get()
  findAll() {
    return this.PropertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.PropertyService.findOne(id);
  }

  // validation through class validator and whitlist is for no any other input comes forward and there is alos forbidnowhitelist
  @Post()
  //   @HttpCode(202)
  // @UsePipes(
  //   new ValidationPipe({
  //   whitelist: true,
  //   forbidNonWhitelisted: true,
  // groups: ['update'],
  // always: true,
  //   }),
  // )
  create(@Body() dto: CreatePropertyDto) {
    return this.PropertyService.create(dto);
  }
  // @Post()
  // create(@Body('name') name) {
  //   return name;
  // }

  @Patch(':id')
  // @UsePipes(
  //   new ValidationPipe({
  //   whitelist: true,
  //   forbidNonWhitelisted: true,
  //   groups: ['update'],
  //     always: true,
  //   }),
  // )
  // update(@Param() Param: IdParamDto, @Body() body: CreatePropertyDto) {
  update(
    @Param('id', ParseIdPipe) id,
    @Body() body: UpdatePropertyDto,
    // @Headers('accept') headers,
  ) {
    return this.PropertyService.update(id, body);
    // return this.PropertyService.update(id, body);
  }

  @Delete(':id')
  // @UsePipes(
  //   new ValidationPipe({
  //   whitelist: true,
  //   forbidNonWhitelisted: true,
  //   groups: ['update'],
  //     always: true,
  //   }),
  // )
  // update(@Param() Param: IdParamDto, @Body() body: CreatePropertyDto) {
  delete(
    @Param('id', ParseIdPipe) id,
    // @Body() body: UpdatePropertyDto,
    // @Headers('accept') headers,
  ) {
    return this.PropertyService.delete(id);
    // return this.PropertyService.update(id, body);
  }
}
