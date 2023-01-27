import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column({
    nullable: false,
    // unique: true,
    type: 'varchar',
    length: 60,
  })
  name: string;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  ingredients: string;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  calories: string;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  proteins: string;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  carbohydrates: string;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  lipids: string;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  preparation_time: string;
  @Column({
    nullable: false,
    type: 'varchar',
    length: 60,
  })
  operating_mode: string;

  @ManyToMany(() => User, { eager: false })
  user: User[];
}
