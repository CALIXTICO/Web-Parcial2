import { EstudianteService } from './estudiante.service';
import { EstudianteDto } from './estudiante.dto/estudiante.dto';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
export declare class EstudianteController {
    private readonly estudianteService;
    constructor(estudianteService: EstudianteService);
    crearEstudiante(estudianteDto: EstudianteDto): Promise<EstudianteEntity>;
    eliminarEstudiante(estudianteID: string): Promise<void>;
}
