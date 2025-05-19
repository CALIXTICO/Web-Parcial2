import { Body, Controller, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { ProfesorDto } from './profesor.dto/profesor.dto';
import { plainToInstance } from 'class-transformer';
import { ProfesorEntity } from './profesor.entity/profesor.entity';

@Controller('profesor')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProfesorController {

    constructor(private readonly profesorService: ProfesorService) {}

    @Post()
    async crearProfesor(@Body() profesorDto: ProfesorDto) {
    const profesor: ProfesorEntity = plainToInstance(ProfesorEntity, profesorDto);
    return await this.profesorService.crearProfesor(profesor);
    }

    @Put(':id')
    async asignarEvaluador(@Param('id') id: string): Promise<ProfesorEntity> {
    return this.profesorService.asignarEvaluador(id);
    }
}
