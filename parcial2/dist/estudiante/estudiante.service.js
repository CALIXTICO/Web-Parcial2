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
exports.EstudianteService = void 0;
const common_1 = require("@nestjs/common");
const estudiante_entity_1 = require("./estudiante.entity/estudiante.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let EstudianteService = class EstudianteService {
    estudianteRepository;
    constructor(estudianteRepository) {
        this.estudianteRepository = estudianteRepository;
    }
    async crearEstudiante(estudiante) {
        if (estudiante.promedio <= 3.2 || estudiante.semestre < 4) {
            throw new common_1.BadRequestException('Los datos del usuario son inválidos');
        }
        return await this.estudianteRepository.save(estudiante);
    }
    async eliminarEstudiante(id) {
        const estudiante = await this.estudianteRepository.findOne({ where: { id }, relations: ["proyectos"] });
        if (!estudiante)
            throw new common_1.NotFoundException("El estudiante con ese id no fue encontrado");
        if (estudiante.proyectos.length > 0)
            throw new common_1.ConflictException("No está permitido borrar a este usuario");
        await this.estudianteRepository.remove(estudiante);
    }
};
exports.EstudianteService = EstudianteService;
exports.EstudianteService = EstudianteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(estudiante_entity_1.EstudianteEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EstudianteService);
//# sourceMappingURL=estudiante.service.js.map