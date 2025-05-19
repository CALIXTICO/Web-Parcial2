import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { EvaluacionEntity } from './evaluacion.entity/evaluacion.entity';
import { EvaluacionDto } from './evaluacion.dto/evaluacion.dto';
import { plainToInstance } from 'class-transformer';

@Controller('evaluacion')
@UseInterceptors(BusinessErrorsInterceptor)
export class EvaluacionController {

    constructor(private readonly evaluacionService: EvaluacionService) {}

    @Post()
    async crearEvaluacion(@Body() evaluacionDto: EvaluacionDto) {
    const evaluacion: EvaluacionEntity = plainToInstance(EvaluacionEntity, evaluacionDto);
    return await this.evaluacionService.crearEvaluacion(evaluacion);
    }
}
