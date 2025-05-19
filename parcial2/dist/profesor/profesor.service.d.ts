import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { Repository } from 'typeorm';
export declare class ProfesorService {
    private readonly profesorRepository;
    constructor(profesorRepository: Repository<ProfesorEntity>);
    crearProfesor(profesor: ProfesorEntity): Promise<ProfesorEntity>;
    asignarEvaluador(id: string): Promise<ProfesorEntity>;
}
