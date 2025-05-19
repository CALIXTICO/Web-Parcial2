import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorModule } from './profesor/profesor.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { EstudianteEntity } from './estudiante/estudiante.entity/estudiante.entity';
import { ProfesorEntity } from './profesor/profesor.entity/profesor.entity';
import { ProyectoEntity } from './proyecto/proyecto.entity/proyecto.entity';
import { EvaluacionEntity } from './evaluacion/evaluacion.entity/evaluacion.entity';

@Module({
  imports: [EstudianteModule, ProfesorModule, EvaluacionModule, ProyectoModule,
   TypeOrmModule.forRoot({
     type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'postgres',
     database: 'Parcial2',
     entities: [EstudianteEntity, ProfesorEntity, ProyectoEntity, EvaluacionEntity],
     dropSchema: true,
     synchronize: true,
     autoLoadEntities: true
   }),
 ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
