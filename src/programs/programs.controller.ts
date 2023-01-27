import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}
  // ROUTE POUR CREER UN PROGRAMME
  @Post()
  create(@Body() createActivityDto: CreateProgramDto) {
    if (!createActivityDto.name)
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    return this.programsService.create(createActivityDto);
  }
  //ROUTE POUR CHERCHER TOUS LES PROGRAMMES
  @Get()
  findAll() {
    return this.programsService.findAll();
  }
  // ROUTE POUR CHERCHER UN PROGRAMME PAR SON ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programsService.findOne(id);
  }
  // ROUTE EFFECTUER UNE MODIFICATION SUR MON PROGRAMME
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramDto: UpdateProgramDto) {
    if (!updateProgramDto.name)
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    return this.programsService.patch(id, updateProgramDto);
  }
  //ROUTE POUR SUPPRIMER UN PROGRAMME PAR SON ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programsService.remove(id);
  }
}
