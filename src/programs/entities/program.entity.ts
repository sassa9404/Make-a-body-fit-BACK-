import { Exercise } from 'src/exercises/entities/exercise.entity';
import { Objective } from 'src/objectives/entities/objective.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Program {
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
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  description: string;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  program_duration: string;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  weekly_session: string;
  @Column({
    nullable: true,
  })
  url_picture: string;
  @Column({
    nullable: true,
    type: 'varchar',
    length: 60,
  })
  equipment: string;

  @OneToMany(() => User, (user) => user.program, { eager: false })
  user: User;
  @ManyToMany(() => Exercise, { eager: false })
  exercise: Exercise[];
  @ManyToMany(() => Objective, { eager: false })
  @JoinTable()
  objective: Objective[];
}
