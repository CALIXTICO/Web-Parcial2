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
exports.ProfesorController = void 0;
const common_1 = require("@nestjs/common");
const profesor_service_1 = require("./profesor.service");
const business_errors_interceptor_1 = require("../shared/interceptors/business-errors/business-errors.interceptor");
const profesor_dto_1 = require("./profesor.dto/profesor.dto");
const class_transformer_1 = require("class-transformer");
const profesor_entity_1 = require("./profesor.entity/profesor.entity");
let ProfesorController = class ProfesorController {
    profesorService;
    constructor(profesorService) {
        this.profesorService = profesorService;
    }
    async crearProfesor(profesorDto) {
        const profesor = (0, class_transformer_1.plainToInstance)(profesor_entity_1.ProfesorEntity, profesorDto);
        return await this.profesorService.crearProfesor(profesor);
    }
    async asignarEvaluador(id) {
        return this.profesorService.asignarEvaluador(id);
    }
};
exports.ProfesorController = ProfesorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profesor_dto_1.ProfesorDto]),
    __metadata("design:returntype", Promise)
], ProfesorController.prototype, "crearProfesor", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfesorController.prototype, "asignarEvaluador", null);
exports.ProfesorController = ProfesorController = __decorate([
    (0, common_1.Controller)('profesor'),
    (0, common_1.UseInterceptors)(business_errors_interceptor_1.BusinessErrorsInterceptor),
    __metadata("design:paramtypes", [profesor_service_1.ProfesorService])
], ProfesorController);
//# sourceMappingURL=profesor.controller.js.map