import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ObjectivesService } from './objectives.service';
import { CreateObjectiveDto } from './dto/create-objective.dto';
import { UpdateObjectiveDto } from './dto/update-objective.dto';

@Controller('objectives')
export class ObjectivesController {
  constructor(private readonly objectivesService: ObjectivesService) {}
  //ROUTE POUR CREER UN OBJECTIF
  @Post()
  create(@Body() createObjectiveDto: CreateObjectiveDto) {
    return this.objectivesService.create(createObjectiveDto);
  }
  //ROUTE POUR CHERCHER TOUS LES OBJECTIFS
  @Get()
  findAll() {
    return this.objectivesService.findAll();
  }
  //ROUTE POUR CHERCHE UN OBJECTIF
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectivesService.findOne(id);
  }
  //ROUTE POUR MODIFIER UN OBJECTIF
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateObjectiveDto: UpdateObjectiveDto,
  ) {
    if (!updateObjectiveDto.type)
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    return this.objectivesService.patch(id, updateObjectiveDto);
  }
  //ROUTE POUR SUPPRIMER UN OBJECTIF
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectivesService.remove(id);
  }
}
