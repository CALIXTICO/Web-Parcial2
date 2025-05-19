import { ProfesorService } from './profesor.service';
import { ProfesorDto } from './profesor.dto/profesor.dto';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
export declare class ProfesorController {
    private readonly profesorService;
    constructor(profesorService: ProfesorService);
    crearProfesor(profesorDto: ProfesorDto): Promise<ProfesorEntity>;
    asignarEvaluador(id: string): Promise<ProfesorEntity>;
}
