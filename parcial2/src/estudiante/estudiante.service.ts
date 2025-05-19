import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class EstudianteService {

    constructor(
        @InjectRepository(EstudianteEntity)
        private readonly estudianteRepository: Repository<EstudianteEntity>
    ){}

    async crearEstudiante(estudiante: EstudianteEntity): Promise<EstudianteEntity> {

        if (estudiante.promedio <= 3.2 || estudiante.semestre < 4)
        {throw new BadRequestException('Los datos del usuario son inválidos')}

        return await this.estudianteRepository.save(estudiante);
   }

   async eliminarEstudiante(id: string)
   {
        const estudiante = await this.estudianteRepository.findOne({where: {id}, relations: ["proyectos"] } );
        
        if (!estudiante)
        throw new NotFoundException("El estudiante con ese id no fue encontrado");

        if (estudiante.proyectos.length > 0)
        throw new ConflictException("No está permitido borrar a este usuario");

       await this.estudianteRepository.remove(estudiante);
   }
}
