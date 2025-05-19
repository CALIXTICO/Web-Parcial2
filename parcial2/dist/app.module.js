"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const estudiante_module_1 = require("./estudiante/estudiante.module");
const profesor_module_1 = require("./profesor/profesor.module");
const evaluacion_module_1 = require("./evaluacion/evaluacion.module");
const proyecto_module_1 = require("./proyecto/proyecto.module");
const estudiante_entity_1 = require("./estudiante/estudiante.entity/estudiante.entity");
const profesor_entity_1 = require("./profesor/profesor.entity/profesor.entity");
const proyecto_entity_1 = require("./proyecto/proyecto.entity/proyecto.entity");
const evaluacion_entity_1 = require("./evaluacion/evaluacion.entity/evaluacion.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [estudiante_module_1.EstudianteModule, profesor_module_1.ProfesorModule, evaluacion_module_1.EvaluacionModule, proyecto_module_1.ProyectoModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'Parcial2',
                entities: [estudiante_entity_1.EstudianteEntity, profesor_entity_1.ProfesorEntity, proyecto_entity_1.ProyectoEntity, evaluacion_entity_1.EvaluacionEntity],
                dropSchema: true,
                synchronize: true,
                autoLoadEntities: true
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map