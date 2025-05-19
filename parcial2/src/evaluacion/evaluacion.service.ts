import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EvaluacionEntity } from './evaluacion.entity/evaluacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EvaluacionService {
    constructor(
        @InjectRepository(EvaluacionEntity)
        private readonly evaluacionRepository: Repository<EvaluacionEntity>
    ){}

    async crearEvaluacion(evaluacion: EvaluacionEntity): Promise<EvaluacionEntity> {
        
        if (evaluacion.proyecto.mentor == evaluacion.profesor)
        {throw new BadRequestException('Los datos de la evaluacion son inválidos')}

        return await this.evaluacionRepository.save(evaluacion);
    }
}
