import { Objective } from 'src/objectives/entities/objective.entity';
import { RoleEnumType } from '../entities/user.entity';

export class CreateUserDto {
  email: string;
  password: string;
  name: string;
  age: string;
  date_start: string;
  picture: string;
  role: RoleEnumType;
  objective: Objective;
}
