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

 @IsNumber()
 @IsNotEmpty()
 readonly ext: number;
 
 @IsBoolean()
 @IsNotEmpty()
 readonly esParEvaluador: string

}