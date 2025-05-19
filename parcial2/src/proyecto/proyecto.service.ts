import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { Repository } from 'typeorm';
import { EstudianteEntity } from 'src/estudiante/estudiante.entity/estudiante.entity';

@Injectable()
export class ProyectoService {
    constructor(
        @InjectRepository(ProyectoEntity)
        private readonly proyectoRepository: Repository<ProyectoEntity>
    ){}

    async crearProyecto(proyecto: ProyectoEntity): Promise<ProyectoEntity> {
        
        if (proyecto.presupuesto <= 0 || proyecto.titulo.length <= 15)
        {throw new BadRequestException('Los datos del proyecto son inválidos')}

        return await this.proyectoRepository.save(proyecto);
    }

    async avanzarProyecto(id: string): Promise<ProyectoEntity> {
            const persistedProyecto= await this.proyectoRepository.findOne({where:{id},  relations: ['estado']});
            if (!persistedProyecto) {
                throw new NotFoundException("El proyecto con ese id no fue encontrado");
            }

            if (persistedProyecto.estado == 4){throw new ConflictException("El proyecto ya se encuentra en su estado final");}
            
            persistedProyecto.estado += 1;

            return await this.proyectoRepository.save(persistedProyecto);
       }

    async findAllEstudiantes(id: string): Promise<EstudianteEntity> {
        const persistedProyecto = await this.proyectoRepository.findOne({where:{id}, relations: ['lider']});

        if (!persistedProyecto) {
            throw new NotFoundException("El proyecto con ese id no fue encontrado");
        }

        const estudiante = persistedProyecto.lider;

        return estudiante;
        }

}
