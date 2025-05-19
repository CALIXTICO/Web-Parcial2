import { Module } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluacionEntity } from './evaluacion.entity/evaluacion.entity';
import { EvaluacionController } from './evaluacion.controller';

@Module({
  providers: [EvaluacionService],
  imports: [TypeOrmModule.forFeature([EvaluacionEntity])],
  controllers: [EvaluacionController]
})
export class EvaluacionModule {}
