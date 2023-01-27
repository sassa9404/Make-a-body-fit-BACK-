import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Exercise } from './entities/exercise.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exercisesRepository: Repository<Exercise>,
  ) {}
  async create(createExercisesDto: CreateExerciseDto): Promise<Exercise> {
    return await this.exercisesRepository.save(createExercisesDto);
  }
  async findAll() {
    return await this.exercisesRepository.find();
  }

  async findOne(id: string): Promise<Exercise> {
    const userFound = await this.exercisesRepository.findOneBy({ id: id });
    if (!userFound) {
      throw new NotFoundException(
        `Je n ai pas trouvé d'exercice avec l'ID : ${id}`,
      );
    }
    return await userFound;
  }

  async patch(
    id: string,
    updateExercisesDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    const upExercises = await this.findOne(id);
    console.log('Exercisess updateD : ', upExercises);

    upExercises.name = updateExercisesDto.name;
    upExercises.instructions = updateExercisesDto.instructions;

    if (!upExercises) {
      throw new NotFoundException(`pas d'exercise avec le nom : ${id}`);
    }
    return await this.exercisesRepository.save(upExercises);
  }

  async remove(id: string): Promise<string> {
    const result = await this.exercisesRepository.delete({ id });
    if (result.affected === 0) {
      // SI ON TROUVE PAS d'OBJECTIF A SUPPRIME ON AFFICHE CE MESSAGE
      throw new NotFoundException(`pas d'objectif avec le nom : ${id}`);
    }
    return `L'objectif '${id}' est supprimé dans la BDD`;
  }
}
