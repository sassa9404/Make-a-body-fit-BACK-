import { Exercise } from 'src/exercises/entities/exercise.entity';
import { Program } from 'src/programs/entities/program.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Objective {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 60,
    unique: true,
  })
  type: string;

  @ManyToMany(() => Program, { eager: false })
  program: Program[];
}
