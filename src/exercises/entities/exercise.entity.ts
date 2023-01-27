import { Objective } from 'src/objectives/entities/objective.entity';
import { Program } from 'src/programs/entities/program.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column({
    unique: true,
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  name: string;

  @Column({
    nullable: true,
  })
  instructions: string;

  @ManyToMany(() => Program, { eager: false })
  @JoinTable()
  program: Program[];
}
