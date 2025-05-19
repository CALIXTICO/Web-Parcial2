import { ProyectoService } from './proyecto.service';
import { ProyectoDto } from './proyecto.dto/proyecto.dto';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { EstudianteEntity } from 'src/estudiante/estudiante.entity/estudiante.entity';
export declare class ProyectoController {
    private readonly proyectoService;
    constructor(proyectoService: ProyectoService);
    crearProyecto(proyectoDto: ProyectoDto): Promise<ProyectoEntity>;
    avanzarProyecto(id: string): Promise<ProyectoEntity>;
    findAllEstudiantes(id: string): Promise<EstudianteEntity>;
}
