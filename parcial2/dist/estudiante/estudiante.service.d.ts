import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { Repository } from 'typeorm';
export declare class EstudianteService {
    private readonly estudianteRepository;
    constructor(estudianteRepository: Repository<EstudianteEntity>);
    crearEstudiante(estudiante: EstudianteEntity): Promise<EstudianteEntity>;
    eliminarEstudiante(id: string): Promise<void>;
}
