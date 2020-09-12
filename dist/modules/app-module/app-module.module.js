"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const api_controller_1 = require("../../controllers/api/api.controller");
const data_service_1 = require("../../services/data/data.service");
const sorting_service_1 = require("../../services/sorting/sorting.service");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const request_schema_1 = require("../../schemas/request.schema");
const storage_service_1 = require("../../services/storrage/storage.service");
const environment = process.env.NODE_ENV || 'development';
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule,
            config_1.ConfigModule.forRoot({
                envFilePath: `.env.${environment}`,
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_WRITE_CONNECTION_STRING, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            }), mongoose_1.MongooseModule.forFeature([{ name: request_schema_1.SerialPopularity.name, schema: request_schema_1.SerialPopularitySchema }])],
        controllers: [api_controller_1.ApiController],
        providers: [data_service_1.DataService, sorting_service_1.SortingService, storage_service_1.StorageService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app-module.module.js.map