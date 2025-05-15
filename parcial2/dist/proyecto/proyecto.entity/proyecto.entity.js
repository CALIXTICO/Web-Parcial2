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
exports.ProyectoEntity = void 0;
const estudiante_entity_1 = require("../../estudiante/estudiante.entity/estudiante.entity");
const evaluacion_entity_1 = require("../../evaluacion/evaluacion.entity/evaluacion.entity");
const profesor_entity_1 = require("../../profesor/profesor.entity/profesor.entity");
const typeorm_1 = require("typeorm");
let ProyectoEntity = class ProyectoEntity {
    id;
    titulo;
    area;
    presupuesto;
    notaFinal;
    estado;
    fechaInicio;
    fechaFin;
    lider;
    mentor;
    evaluaciones;
};
exports.ProyectoEntity = ProyectoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", String)
], ProyectoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProyectoEntity.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProyectoEntity.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProyectoEntity.prototype, "presupuesto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProyectoEntity.prototype, "notaFinal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProyectoEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProyectoEntity.prototype, "fechaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProyectoEntity.prototype, "fechaFin", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.EstudianteEntity, estudiante => estudiante.proyectos),
    __metadata("design:type", estudiante_entity_1.EstudianteEntity)
], ProyectoEntity.prototype, "lider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profesor_entity_1.ProfesorEntity, profesor => profesor.mentorias),
    __metadata("design:type", profesor_entity_1.ProfesorEntity)
], ProyectoEntity.prototype, "mentor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => evaluacion_entity_1.EvaluacionEntity, evaluacion => evaluacion.proyecto),
    __metadata("design:type", Array)
], ProyectoEntity.prototype, "evaluaciones", void 0);
exports.ProyectoEntity = ProyectoEntity = __decorate([
    (0, typeorm_1.Entity)()
], ProyectoEntity);
//# sourceMappingURL=proyecto.entity.js.map