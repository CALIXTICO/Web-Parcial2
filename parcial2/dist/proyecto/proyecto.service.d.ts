import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { Repository } from 'typeorm';
import { EstudianteEntity } from 'src/estudiante/estudiante.entity/estudiante.entity';
export declare class ProyectoService {
    private readonly proyectoRepository;
    constructor(proyectoRepository: Repository<ProyectoEntity>);
    crearProyecto(proyecto: ProyectoEntity): Promise<ProyectoEntity>;
    avanzarProyecto(id: string): Promise<ProyectoEntity>;
    findAllEstudiantes(id: string): Promise<EstudianteEntity>;
}
