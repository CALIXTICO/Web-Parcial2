import {IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';

export class EstudianteDto {

  @IsString()
 @IsNotEmpty()
 readonly nombre: string;
 
 @IsString()
 @IsNotEmpty()
 readonly semestre: string;
 
 @IsString()
 @IsNotEmpty()
 readonly  programa: string;
 
 @IsNumber()
 @IsNotEmpty()
 readonly promedio: number;
}
/* archivo: src/museum/museum.dto.ts */