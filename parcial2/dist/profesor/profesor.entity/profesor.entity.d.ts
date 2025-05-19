import { EvaluacionEntity } from "src/evaluacion/evaluacion.entity/evaluacion.entity";
import { ProyectoEntity } from "src/proyecto/proyecto.entity/proyecto.entity";
export declare class ProfesorEntity {
    id: string;
    cedula: number;
    nombre: string;
    depto: string;
    ext: number;
    esParEvaluador: string;
    mentorias: ProyectoEntity[];
    evaluaciones: EvaluacionEntity[];
}
