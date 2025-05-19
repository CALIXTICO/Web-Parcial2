"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesorEntity = void 0;
const evaluacion_entity_1 = require("../../evaluacion/evaluacion.entity/evaluacion.entity");
const proyecto_entity_1 = require("../../proyecto/proyecto.entity/proyecto.entity");
const typeorm_1 = require("typeorm");
let ProfesorEntity = class ProfesorEntity {
    id;
    cedula;
    nombre;
    depto;
    ext;
    esParEvaluador;
    mentorias;
    evaluaciones;
};
exports.ProfesorEntity = ProfesorEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", String)
], ProfesorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], ProfesorEntity.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfesorEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfesorEntity.prototype, "depto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProfesorEntity.prototype, "ext", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", String)
], ProfesorEntity.prototype, "esParEvaluador", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => proyecto_entity_1.ProyectoEntity, proyecto => proyecto.mentor),
    __metadata("design:type", Array)
], ProfesorEntity.prototype, "mentorias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => evaluacion_entity_1.EvaluacionEntity, evaluacion => evaluacion.profesor),
    __metadata("design:type", Array)
], ProfesorEntity.prototype, "evaluaciones", void 0);
exports.ProfesorEntity = ProfesorEntity = __decorate([
    (0, typeorm_1.Entity)()
], ProfesorEntity);
//# sourceMappingURL=profesor.entity.js.map