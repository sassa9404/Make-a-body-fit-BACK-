import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
// ca nous permet d'interagir avec l'entite users '
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create() {
    return 'This action adds a new user';
  }
  // recuperation de tous les users
  async findAll() {
    return await this.userRepository.find();
  }

  // On vérifie si le user existe
  async findOne(userId: string): Promise<User> {
    const userFound = await this.userRepository.findOneBy({ id: userId });
    if (!userFound) {
      throw new NotFoundException(`Pas  d utilisateur avec l'ID : ${userId}`);
    }
    return await userFound;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
