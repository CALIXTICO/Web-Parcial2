"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmTestingConfig = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const estudiante_entity_1 = require("../../estudiante/estudiante.entity/estudiante.entity");
const evaluacion_entity_1 = require("../../evaluacion/evaluacion.entity/evaluacion.entity");
const profesor_entity_1 = require("../../profesor/profesor.entity/profesor.entity");
const proyecto_entity_1 = require("../../proyecto/proyecto.entity/proyecto.entity");
const TypeOrmTestingConfig = () => [
    typeorm_1.TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [estudiante_entity_1.EstudianteEntity, profesor_entity_1.ProfesorEntity, evaluacion_entity_1.EvaluacionEntity, proyecto_entity_1.ProyectoEntity],
        synchronize: true,
        autoLoadEntities: true,
    }),
    typeorm_1.TypeOrmModule.forFeature([estudiante_entity_1.EstudianteEntity, profesor_entity_1.ProfesorEntity, evaluacion_entity_1.EvaluacionEntity, proyecto_entity_1.ProyectoEntity]),
];
exports.TypeOrmTestingConfig = TypeOrmTestingConfig;
//# sourceMappingURL=typeorm-testing-config.js.map