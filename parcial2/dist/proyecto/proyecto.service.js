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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const proyecto_entity_1 = require("./proyecto.entity/proyecto.entity");
const typeorm_2 = require("typeorm");
let ProyectoService = class ProyectoService {
    proyectoRepository;
    constructor(proyectoRepository) {
        this.proyectoRepository = proyectoRepository;
    }
    async crearProyecto(proyecto) {
        if (proyecto.presupuesto <= 0 || proyecto.titulo.length <= 15) {
            throw new common_1.BadRequestException('Los datos del proyecto son inválidos');
        }
        return await this.proyectoRepository.save(proyecto);
    }
    async avanzarProyecto(id) {
        const persistedProyecto = await this.proyectoRepository.findOne({ where: { id }, relations: ['estado'] });
        if (!persistedProyecto) {
            throw new common_1.NotFoundException("El proyecto con ese id no fue encontrado");
        }
        if (persistedProyecto.estado == 4) {
            throw new common_1.ConflictException("El proyecto ya se encuentra en su estado final");
        }
        persistedProyecto.estado += 1;
        return await this.proyectoRepository.save(persistedProyecto);
    }
    async findAllEstudiantes(id) {
        const persistedProyecto = await this.proyectoRepository.findOne({ where: { id }, relations: ['lider'] });
        if (!persistedProyecto) {
            throw new common_1.NotFoundException("El proyecto con ese id no fue encontrado");
        }
        const estudiante = persistedProyecto.lider;
        return estudiante;
    }
};
exports.ProyectoService = ProyectoService;
exports.ProyectoService = ProyectoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(proyecto_entity_1.ProyectoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProyectoService);
//# sourceMappingURL=proyecto.service.js.map