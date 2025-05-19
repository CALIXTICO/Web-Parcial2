import { Body, Controller, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { ProyectoDto } from './proyecto.dto/proyecto.dto';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { plainToInstance } from 'class-transformer';
import { EstudianteEntity } from 'src/estudiante/estudiante.entity/estudiante.entity';

@Controller('proyecto')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProyectoController {

    constructor(private readonly proyectoService: ProyectoService) {}

    @Post()
    async crearProyecto(@Body() proyectoDto: ProyectoDto) {
    const proyecto: ProyectoEntity = plainToInstance(ProyectoEntity, proyectoDto);
    return await this.proyectoService.crearProyecto(proyecto);
    }

    @Put(':id')
    async asignarEvaluador(@Param('id') id: string): Promise<ProyectoEntity> {
    return this.proyectoService.avanzarProyecto(id);
    }

    @Get(':id/estudiantes')
    async findAllEstudiantes(@Param('id') id: string): Promise<EstudianteEntity> {
    return this.proyectoService.findAllEstudiantes(id);
    }

}
