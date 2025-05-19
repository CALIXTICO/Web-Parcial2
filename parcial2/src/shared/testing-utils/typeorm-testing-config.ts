/* eslint-disable prettier/prettier */
/* archivo src/shared/testing-utils/typeorm-testing-config.ts*/
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteEntity } from 'src/estudiante/estudiante.entity/estudiante.entity';
import { EvaluacionEntity } from 'src/evaluacion/evaluacion.entity/evaluacion.entity';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity/proyecto.entity';

export const TypeOrmTestingConfig = () => [
 TypeOrmModule.forRoot({
   type: 'sqlite',
   database: ':memory:',
   dropSchema: true,
   entities: [EstudianteEntity, ProfesorEntity, EvaluacionEntity, ProyectoEntity],
   synchronize: true,
   autoLoadEntities: true,
 }),
 TypeOrmModule.forFeature([EstudianteEntity, ProfesorEntity, EvaluacionEntity, ProyectoEntity]),
];
/* archivo src/shared/testing-utils/typeorm-testing-config.ts*/