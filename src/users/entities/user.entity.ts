import { Objective } from 'src/objectives/entities/objective.entity';
import { Program } from 'src/programs/entities/program.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum RoleEnumType {
  USER = 'user',
  ADMIN = 'admin',
}
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column({
    unique: true,
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  email: string;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  password: string;
  @Column({
    unique: true,
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  name: string;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  age: string;

  @Column({
    nullable: true,
    type: 'date',
  })
  date_start: string;

  @Column({
    nullable: true,
  })
  picture: string;
  @Column({
    nullable: true,
    type: 'varchar',
    length: 60,
  })
  role: RoleEnumType;

  @ManyToOne(() => Program, (program) => program.user, { eager: true })
  program: Program;

  @ManyToOne(() => Objective, (objectif) => objectif.user, { eager: true })
  objective: Objective;

  @ManyToMany(() => Receipt, { eager: true })
  @JoinTable()
  receipt: Receipt[];
}
