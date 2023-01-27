import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { Program } from './entities/program.entity';

@Injectable()
export class ProgramsService {
  // ca nous permet d'interagir avec l'entite Program '
  constructor(
    @InjectRepository(Program)
    private programRepository: Repository<Program>,
  ) {}
  // creer un programme juste l'admin est autorisé
  async create(createProgramDto: CreateProgramDto): Promise<Program> {
    return await this.programRepository.save(createProgramDto);
  }
  //afficher tous les programmes dans ma BDD
  async findAll() {
    return await this.programRepository.find();
  }
  // aller chercher un programme par son nom
  async findOne(id: string): Promise<Program> {
    const userFound = await this.programRepository.findOneBy({ id: id });
    //si on trouve pas de programme on affiche ce message
    if (!userFound) {
      throw new NotFoundException(
        `Je n ai pas trouvé de programme avec le nom : ${id}`,
      );
    }
    return await userFound;
  }
  //modifier un programme
  async patch(
    id: string,
    updateProgramDto: UpdateProgramDto,
  ): Promise<Program> {
    const upProgram = await this.findOne(id);
    upProgram.name = updateProgramDto.name;
    if (!upProgram) {
      throw new NotFoundException(`pas de programme avec le nom : ${id}`);
    }
    return await this.programRepository.save(upProgram);
  }
  // supprimer un programme dans la BDD
  async remove(id: string): Promise<string> {
    const result = await this.programRepository.delete({ id });
    if (result.affected === 0) {
      // SI ON TROUVE PAS LE PROGRAMME A SUPPRIME ON AFFICHE CE MESSAGE
      throw new NotFoundException(`pas de program avec le nom : ${id}`);
    }
    return `Le programme '${id}' est supprimé dans la BDD`;
  }
}
