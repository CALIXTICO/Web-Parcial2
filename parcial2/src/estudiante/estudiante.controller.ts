import { Body, Controller, Delete, HttpCode, Param, Post, UseInterceptors } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { EstudianteDto } from './estudiante.dto/estudiante.dto';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { plainToInstance } from 'class-transformer';

@Controller('estudiante')
@UseInterceptors(BusinessErrorsInterceptor)
export class EstudianteController {

    constructor(private readonly estudianteService: EstudianteService) {}

    @Post()
    async crearEstudiante(@Body() estudianteDto: EstudianteDto) {
    const estudiante: EstudianteEntity = plainToInstance(EstudianteEntity, estudianteDto);
    return await this.estudianteService.crearEstudiante(estudiante);
    }

    @Delete(':estudianteID')
    @HttpCode(204)
    async eliminarEstudiante(@Param('estudianteID') estudianteID: string) {
        return await this.estudianteService.eliminarEstudiante(estudianteID);
    }
}
