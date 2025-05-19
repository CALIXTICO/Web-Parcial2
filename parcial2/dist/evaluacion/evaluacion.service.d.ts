import { EvaluacionEntity } from './evaluacion.entity/evaluacion.entity';
import { Repository } from 'typeorm';
export declare class EvaluacionService {
    private readonly evaluacionRepository;
    constructor(evaluacionRepository: Repository<EvaluacionEntity>);
    crearEvaluacion(evaluacion: EvaluacionEntity): Promise<EvaluacionEntity>;
}
