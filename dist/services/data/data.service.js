"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const common_1 = require("@nestjs/common");
const flatted_1 = require("flatted");
const axios_1 = require("axios");
let DataService = class DataService {
    async getSeriesDetails(id) {
        try {
            const response = await axios_1.default.get(`https://api.themoviedb.org/3/tv/${id}?api_key=7dad236e5b5c61cc3756a93d2879d59b`);
            return response.data;
        }
        catch (e) {
            return false;
        }
    }
    async getSeasonsDetails(SeriesDetails, id) {
        try {
            const requests = [];
            for (let i = 1; i < SeriesDetails.number_of_seasons; i++) {
                requests.push(axios_1.default.get(`https://api.themoviedb.org/3/tv/${id}/season/${i}?api_key=7dad236e5b5c61cc3756a93d2879d59b`));
            }
            const result = await axios_1.default.all(requests);
            return flatted_1.stringify(result);
        }
        catch (e) {
            return e;
        }
    }
};
DataService = __decorate([
    common_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map