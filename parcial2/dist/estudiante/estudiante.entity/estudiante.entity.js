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
exports.EstudianteEntity = void 0;
const proyecto_entity_1 = require("../../proyecto/proyecto.entity/proyecto.entity");
const typeorm_1 = require("typeorm");
let EstudianteEntity = class EstudianteEntity {
    id;
    cedula;
    nombre;
    semestre;
    programa;
    promedio;
    proyectos;
};
exports.EstudianteEntity = EstudianteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(typeorm_1.Unique),
    __metadata("design:type", Number)
], EstudianteEntity.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EstudianteEntity.prototype, "semestre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "programa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EstudianteEntity.prototype, "promedio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => proyecto_entity_1.ProyectoEntity, proyecto => proyecto.lider),
    __metadata("design:type", Array)
], EstudianteEntity.prototype, "proyectos", void 0);
exports.EstudianteEntity = EstudianteEntity = __decorate([
    (0, typeorm_1.Entity)()
], EstudianteEntity);
//# sourceMappingURL=estudiante.entity.js.map