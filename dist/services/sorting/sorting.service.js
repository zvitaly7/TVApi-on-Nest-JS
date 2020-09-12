"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortingService = void 0;
const common_1 = require("@nestjs/common");
const flatted_1 = require("flatted");
let SortingService = class SortingService {
    SortEpisodes(Episodes) {
        const episodes = (flatted_1.parse(Episodes).map(season => {
            return season.data.episodes;
        })).reduce((a, b) => {
            return a.concat(b);
        });
        return episodes.map(episode => {
            return {
                episodeName: episode.name,
                averageVotes: episode.vote_average,
            };
        }).sort((ep1, ep2) => {
            return ep2.averageVotes - ep1.averageVotes;
        }).slice(0, 20);
    }
    SortSeriesResponses(Responses) {
        Responses.sort((s1, s2) => {
            return s2.accessCount - s1.accessCount;
        }).slice(0, 5);
        return Responses;
    }
};
SortingService = __decorate([
    common_1.Injectable()
], SortingService);
exports.SortingService = SortingService;
//# sourceMappingURL=sorting.service.js.map