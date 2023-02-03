import { Objective } from 'src/objectives/entities/objective.entity';
import { RoleEnumType } from 'src/users/entities/user.entity';

export class CreateAuthDto {
  email: string;
  password: string;
  name: string;
  age: string;
  date_start?: string;
  picture?: string;
  role?: RoleEnumType;
  objective: Objective;
}
