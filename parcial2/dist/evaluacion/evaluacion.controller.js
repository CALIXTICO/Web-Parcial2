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
exports.EvaluacionController = void 0;
const common_1 = require("@nestjs/common");
const evaluacion_service_1 = require("./evaluacion.service");
const business_errors_interceptor_1 = require("../shared/interceptors/business-errors/business-errors.interceptor");
const evaluacion_entity_1 = require("./evaluacion.entity/evaluacion.entity");
const evaluacion_dto_1 = require("./evaluacion.dto/evaluacion.dto");
const class_transformer_1 = require("class-transformer");
let EvaluacionController = class EvaluacionController {
    evaluacionService;
    constructor(evaluacionService) {
        this.evaluacionService = evaluacionService;
    }
    async crearEvaluacion(evaluacionDto) {
        const evaluacion = (0, class_transformer_1.plainToInstance)(evaluacion_entity_1.EvaluacionEntity, evaluacionDto);
        return await this.evaluacionService.crearEvaluacion(evaluacion);
    }
};
exports.EvaluacionController = EvaluacionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [evaluacion_dto_1.EvaluacionDto]),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "crearEvaluacion", null);
exports.EvaluacionController = EvaluacionController = __decorate([
    (0, common_1.Controller)('evaluacion'),
    (0, common_1.UseInterceptors)(business_errors_interceptor_1.BusinessErrorsInterceptor),
    __metadata("design:paramtypes", [evaluacion_service_1.EvaluacionService])
], EvaluacionController);
//# sourceMappingURL=evaluacion.controller.js.map