import { Controller, Get, Inject, Param } from '@nestjs/common';
import { DataService } from '../../services/data/data.service';
import { SortingService } from '../../services/sorting/sorting.service';
import { SerialPopularity } from '../../schemas/request.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { StorageService } from '../../services/storrage/storage.service';

@Controller('api')
export class ApiController {
  constructor(private DataService: DataService,
              private  SortingService: SortingService,
              private StorageService: StorageService,
              @InjectModel(SerialPopularity.name) private SerialPopularityModel: Model<SerialPopularity>,
  ) {}

  @Get('/topEpisodes/:id')
  async getAll(@Param() params): Promise<any> {
    const SeriesInfo = await this.DataService.getSeriesDetails(params.id);
    if (SeriesInfo) {
      await this.StorageService.setStorage(SeriesInfo);
      const SeasonInfo = await this.DataService.getSeasonsDetails(SeriesInfo, params.id);
      return this.SortingService.SortEpisodes(SeasonInfo);
    } else {
      return { message: 'Wrong ID of the Series or Accesses Error' };
    }
  }

  @Get('/analytics/popularSeries')
  async getResult(): Promise<any> {
    const Storage = await this.StorageService.getStorage();
    return this.SortingService.SortSeriesResponses(Storage);
  }
}
