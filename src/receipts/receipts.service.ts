import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { Receipt } from './entities/receipt.entity';

@Injectable()
export class ReceiptsService {
  create(createReceiptDto: CreateReceiptDto) {
    return 'This action adds a new receipt';
  }

  constructor(
    @InjectRepository(Receipt)
    private userRepository: Repository<Receipt>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<Receipt> {
    const userFound = await this.userRepository.findOneBy({ id: id });
    if (!userFound) {
      throw new NotFoundException(
        `Je n ai pas trouvé de recette avec l'ID : ${id}`,
      );
    }
    return await userFound;
  }

  update(id: number, updateReceiptDto: UpdateReceiptDto) {
    return `This action updates a #${id} receipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} receipt`;
  }
}
