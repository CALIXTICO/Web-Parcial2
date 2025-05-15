import { ProyectoEntity } from "src/proyecto/proyecto.entity/proyecto.entity";
export declare class EstudianteEntity {
    id: string;
    cedula: number;
    nombre: string;
    semestre: number;
    programa: string;
    promedio: number;
    proyectos: ProyectoEntity[];
}
