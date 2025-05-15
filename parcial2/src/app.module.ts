import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/*@Module({
  imports: [EstudianteModule, ProfesorModule, EvaluacionModule, ProyectoModule,
   TypeOrmModule.forRoot({
     type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'postgress',
     database: 'parcial2_prueba',
     entities: [EstudianteEntity, ProfesorEntity, ProyectoEntity, EvaluacionEntity],
     dropSchema: true,
     synchronize: true,
     autoLoadEntities: true
   }),
 ],
  controllers: [AppController],
  providers: [AppService],
})*/

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
