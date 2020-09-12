import {Injectable } from '@nestjs/common';
import {stringify } from 'flatted';
import Axios from 'axios';

@Injectable()
export class DataService {

  async getSeriesDetails(id: string): Promise<boolean> {
    try {
      const response = await Axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=7dad236e5b5c61cc3756a93d2879d59b`);
      return response.data;
    } catch (e) {
      return false;
    }
  }

  async getSeasonsDetails(SeriesDetails: any, id: string): Promise<any> {
    try {
      const requests = [];
      for (let i = 1; i < SeriesDetails.number_of_seasons; i++) {
        requests.push(Axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${i}?api_key=7dad236e5b5c61cc3756a93d2879d59b`));
      }
      const result = await Axios.all(requests);
      return stringify(result);

    } catch (e) {
      return e;
    }

  }
}
