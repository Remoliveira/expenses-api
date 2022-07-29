import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SService } from './s.service';
import { CreateDto } from './dto/create-.dto';
import { UpdateDto } from './dto/update-.dto';

@Controller('s')
export class SController {
  constructor(private readonly sService: SService) {}

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.sService.create(createDto);
  }

  @Get()
  findAll() {
    return this.sService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.sService.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sService.remove(+id);
  }
}
