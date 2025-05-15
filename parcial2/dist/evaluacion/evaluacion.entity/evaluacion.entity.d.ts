import { ProfesorEntity } from "src/profesor/profesor.entity/profesor.entity";
import { ProyectoEntity } from "src/proyecto/proyecto.entity/proyecto.entity";
export declare class EvaluacionEntity {
    id: string;
    proyecto: ProyectoEntity;
    profesor: ProfesorEntity;
}
