import {IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';

export class ProyectoDto {

 @IsString()
 @IsNotEmpty()
 readonly titulo: string;
 
 @IsString()
 @IsNotEmpty()
 readonly area: string;
 
 @IsNumber()
 @IsNotEmpty()
 readonly notaFinal: number;
 
 @IsNumber()
 @IsNotEmpty()
 readonly estado: number;

 @IsString()
 @IsNotEmpty()
 readonly fechaInicio: string;
 
 @IsString()
 @IsNotEmpty()
 readonly fechaFin: string;

 @IsNumber()
 @IsNotEmpty()
 readonly presupuesto: number;
}