import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceiptsModule } from './receipts/receipts.module';
import * as dotenv from 'dotenv';
import { ExercisesModule } from './exercises/exercises.module';
import { ObjectivesModule } from './objectives/objectives.module';
import { ProgramsModule } from './programs/programs.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Exercise } from './exercises/entities/exercise.entity';
import { Receipt } from './receipts/entities/receipt.entity';
import { Objective } from './objectives/entities/objective.entity';
import { Program } from './programs/entities/program.entity';

dotenv.config({ path: '.env' });
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [User, Program, Objective, Exercise, Receipt],
      synchronize: process.env.MODE === 'DEV' ? true : false,
    }),
    ExercisesModule,
    ObjectivesModule,
    ProgramsModule,
    ReceiptsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
