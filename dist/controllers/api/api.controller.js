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
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const data_service_1 = require("../../services/data/data.service");
const sorting_service_1 = require("../../services/sorting/sorting.service");
const request_schema_1 = require("../../schemas/request.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const storage_service_1 = require("../../services/storrage/storage.service");
let ApiController = class ApiController {
    constructor(DataService, SortingService, StorageService, SerialPopularityModel) {
        this.DataService = DataService;
        this.SortingService = SortingService;
        this.StorageService = StorageService;
        this.SerialPopularityModel = SerialPopularityModel;
    }
    async getAll(params) {
        const SeriesInfo = await this.DataService.getSeriesDetails(params.id);
        if (SeriesInfo) {
            await this.StorageService.setStorage(SeriesInfo);
            const SeasonInfo = await this.DataService.getSeasonsDetails(SeriesInfo, params.id);
            return this.SortingService.SortEpisodes(SeasonInfo);
        }
        else {
            return { message: 'Wrong ID of the Series or Accesses Error' };
        }
    }
    async getResult() {
        const Storage = await this.StorageService.getStorage();
        return this.SortingService.SortSeriesResponses(Storage);
    }
};
__decorate([
    common_1.Get('/topEpisodes/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getAll", null);
__decorate([
    common_1.Get('/analytics/popularSeries'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getResult", null);
ApiController = __decorate([
    common_1.Controller('api'),
    __param(3, mongoose_2.InjectModel(request_schema_1.SerialPopularity.name)),
    __metadata("design:paramtypes", [data_service_1.DataService,
        sorting_service_1.SortingService,
        storage_service_1.StorageService,
        mongoose_1.Model])
], ApiController);
exports.ApiController = ApiController;
//# sourceMappingURL=api.controller.js.map