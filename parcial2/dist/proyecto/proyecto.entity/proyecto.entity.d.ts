import { EstudianteEntity } from "src/estudiante/estudiante.entity/estudiante.entity";
import { EvaluacionEntity } from "src/evaluacion/evaluacion.entity/evaluacion.entity";
import { ProfesorEntity } from "src/profesor/profesor.entity/profesor.entity";
export declare class ProyectoEntity {
    id: string;
    titulo: string;
    area: string;
    presupuesto: number;
    notaFinal: number;
    estado: number;
    fechaInicio: string;
    fechaFin: string;
    lider: EstudianteEntity;
    mentor: ProfesorEntity;
    evaluaciones: EvaluacionEntity[];
}
