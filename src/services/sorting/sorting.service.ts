import { Injectable } from '@nestjs/common';
import { parse } from 'flatted';

@Injectable()
export class SortingService {

  SortEpisodes(Episodes: string): Array<any> {
    const episodes = (parse(Episodes).map(season => {
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

  SortSeriesResponses(Responses: Array<any>): Array<any> {
    Responses.sort((s1, s2) => {
      return s2.accessCount - s1.accessCount;
    }).slice(0, 5);
    return Responses;
  }
}
