import {IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';

export class ProfesorDto {

 @IsNumber()
 @IsNotEmpty()
 readonly cedula: number;
 
 @IsString()
 @IsNotEmpty()
 readonly nombre: string;
 
 @IsString()
 @IsNotEmpty()
 readonly depto: string;
 
 @IsBoolean()
 @IsNotEmpty()
 readonly esParEvaluador: string

}