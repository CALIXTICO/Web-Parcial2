import { EvaluacionEntity } from "src/evaluacion/evaluacion.entity/evaluacion.entity";
import { ProyectoEntity } from "src/proyecto/proyecto.entity/proyecto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class ProfesorEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: string;

    @Column({unique: true})
    cedula: number;

    @Column()
    nombre: string;

    @Column()
    depto: string;

    @Column()
    ext: number;

    @Column({ type: 'boolean' })
    esParEvaluador: string

    @OneToMany(() => ProyectoEntity, proyecto => proyecto.mentor)
    mentorias: ProyectoEntity[]

    @OneToMany(() => EvaluacionEntity, evaluacion => evaluacion.profesor)
    evaluaciones: EvaluacionEntity[]
}
