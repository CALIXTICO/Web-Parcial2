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
exports.EstudianteController = void 0;
const common_1 = require("@nestjs/common");
const estudiante_service_1 = require("./estudiante.service");
const business_errors_interceptor_1 = require("../shared/interceptors/business-errors/business-errors.interceptor");
const estudiante_dto_1 = require("./estudiante.dto/estudiante.dto");
const estudiante_entity_1 = require("./estudiante.entity/estudiante.entity");
const class_transformer_1 = require("class-transformer");
let EstudianteController = class EstudianteController {
    estudianteService;
    constructor(estudianteService) {
        this.estudianteService = estudianteService;
    }
    async crearEstudiante(estudianteDto) {
        const estudiante = (0, class_transformer_1.plainToInstance)(estudiante_entity_1.EstudianteEntity, estudianteDto);
        return await this.estudianteService.crearEstudiante(estudiante);
    }
    async eliminarEstudiante(estudianteID) {
        return await this.estudianteService.eliminarEstudiante(estudianteID);
    }
};
exports.EstudianteController = EstudianteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [estudiante_dto_1.EstudianteDto]),
    __metadata("design:returntype", Promise)
], EstudianteController.prototype, "crearEstudiante", null);
__decorate([
    (0, common_1.Delete)(':estudianteID'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('estudianteID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstudianteController.prototype, "eliminarEstudiante", null);
exports.EstudianteController = EstudianteController = __decorate([
    (0, common_1.Controller)('estudiante'),
    (0, common_1.UseInterceptors)(business_errors_interceptor_1.BusinessErrorsInterceptor),
    __metadata("design:paramtypes", [estudiante_service_1.EstudianteService])
], EstudianteController);
//# sourceMappingURL=estudiante.controller.js.map