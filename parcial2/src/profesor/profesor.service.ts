import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesorService {

    constructor(
            @InjectRepository(ProfesorEntity)
            private readonly profesorRepository: Repository<ProfesorEntity>
        ){}

    async crearProfesor(profesor: ProfesorEntity): Promise<ProfesorEntity> {
    
        if (profesor.ext >= 100000 || profesor.ext < 10000)
        {throw new BadRequestException('Los datos del profesor son inválidos')}

        return await this.profesorRepository.save(profesor);
    }

    async asignarEvaluador(id: string): Promise<ProfesorEntity> {
       const persistedProfesor= await this.profesorRepository.findOne({where:{id},  relations: ['evaluaciones']});
       if (!persistedProfesor) {
            throw new NotFoundException("El profesor con ese id no fue encontrado");
        }

        if (persistedProfesor.evaluaciones.length > 3) {
            persistedProfesor.esParEvaluador = 'false';
            return await this.profesorRepository.save(persistedProfesor);
        }

        return persistedProfesor;
   }

}
