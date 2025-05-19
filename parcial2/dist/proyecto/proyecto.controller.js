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
exports.ProyectoController = void 0;
const common_1 = require("@nestjs/common");
const proyecto_service_1 = require("./proyecto.service");
const business_errors_interceptor_1 = require("../shared/interceptors/business-errors/business-errors.interceptor");
const proyecto_dto_1 = require("./proyecto.dto/proyecto.dto");
const proyecto_entity_1 = require("./proyecto.entity/proyecto.entity");
const class_transformer_1 = require("class-transformer");
let ProyectoController = class ProyectoController {
    proyectoService;
    constructor(proyectoService) {
        this.proyectoService = proyectoService;
    }
    async crearProyecto(proyectoDto) {
        const proyecto = (0, class_transformer_1.plainToInstance)(proyecto_entity_1.ProyectoEntity, proyectoDto);
        return await this.proyectoService.crearProyecto(proyecto);
    }
    async asignarEvaluador(id) {
        return this.proyectoService.avanzarProyecto(id);
    }
    async findAllEstudiantes(id) {
        return this.proyectoService.findAllEstudiantes(id);
    }
};
exports.ProyectoController = ProyectoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [proyecto_dto_1.ProyectoDto]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "crearProyecto", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "asignarEvaluador", null);
__decorate([
    (0, common_1.Get)(':id/estudiantes'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "findAllEstudiantes", null);
exports.ProyectoController = ProyectoController = __decorate([
    (0, common_1.Controller)('proyecto'),
    (0, common_1.UseInterceptors)(business_errors_interceptor_1.BusinessErrorsInterceptor),
    __metadata("design:paramtypes", [proyecto_service_1.ProyectoService])
], ProyectoController);
//# sourceMappingURL=proyecto.controller.js.map