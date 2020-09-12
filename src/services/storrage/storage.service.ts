import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SerialPopularity } from '../../schemas/request.schema';
import { Model } from 'mongoose';

@Injectable()
export class StorageService {
  constructor(
    @InjectModel(SerialPopularity.name) private SerialPopularityModel: Model<SerialPopularity>,) {}


  async getStorage(): Promise<Array<any>> {
    return await this.SerialPopularityModel.find().exec();
  }

  async setStorage(Series: any): Promise<any> {
    return this.SerialPopularityModel.findOneAndUpdate(
      { Serial: Series.id, name: Series.name },
      { $inc: { accessCount: 1 } },
      { upsert: true });
  }
}
