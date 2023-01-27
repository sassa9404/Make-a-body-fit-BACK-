import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateObjectiveDto } from './dto/create-objective.dto';
import { UpdateObjectiveDto } from './dto/update-objective.dto';
import { Objective } from './entities/objective.entity';

@Injectable()
export class ObjectivesService {
  // patch(id: string, updateObjectiveDto: UpdateObjectiveDto) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(
    @InjectRepository(Objective)
    private objectiveRepository: Repository<Objective>,
  ) {}
  //creer un objective
  async create(createObjectiveDto: CreateObjectiveDto): Promise<Objective> {
    return await this.objectiveRepository.save(createObjectiveDto);
  }
  // afficher tous mes objectifs
  async findAll() {
    return await this.objectiveRepository.find();
  }
  // afficher un seul objectif
  async findOne(id: string): Promise<Objective> {
    const userFound = await this.objectiveRepository.findOneBy({ id: id });
    if (!userFound) {
      throw new NotFoundException(
        `Je n ai pas trouvé d'objective avec l'ID : ${id}`,
      );
    }
    return await userFound;
  }
  //modifier l'objective
  async patch(
    id: string,
    updateObjectiveDto: UpdateObjectiveDto,
  ): Promise<Objective> {
    const upObjective = await this.findOne(id);
    console.log('objectives updateD : ', upObjective);

    upObjective.type = updateObjectiveDto.type;

    if (!upObjective) {
      throw new NotFoundException(`pas de Objectif avec le nom : ${id}`);
    }
    return await this.objectiveRepository.save(upObjective);
  }
  //Supprimer un programme
  async remove(id: string): Promise<string> {
    const result = await this.objectiveRepository.delete({ id });
    if (result.affected === 0) {
      // SI ON TROUVE PAS d'OBJECTIF A SUPPRIME ON AFFICHE CE MESSAGE
      throw new NotFoundException(`pas d'objectif avec le nom : ${id}`);
    }
    return `L'objectif '${id}' est supprimé dans la BDD`;
  }
}
