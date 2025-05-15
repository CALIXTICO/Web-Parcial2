import { ProyectoEntity } from "src/proyecto/proyecto.entity/proyecto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class EstudianteEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: string;

    @Column(Unique)
    cedula: number;

    @Column()
    nombre: string;

    @Column()
    semestre: number;

    @Column()
    programa: string;

    @Column()
    promedio: number;

    @OneToMany(() => ProyectoEntity, proyecto => proyecto.lider)
    proyectos: ProyectoEntity[]

}
