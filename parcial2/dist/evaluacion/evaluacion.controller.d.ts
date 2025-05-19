import { EvaluacionService } from './evaluacion.service';
import { EvaluacionEntity } from './evaluacion.entity/evaluacion.entity';
import { EvaluacionDto } from './evaluacion.dto/evaluacion.dto';
export declare class EvaluacionController {
    private readonly evaluacionService;
    constructor(evaluacionService: EvaluacionService);
    crearEvaluacion(evaluacionDto: EvaluacionDto): Promise<EvaluacionEntity>;
}
