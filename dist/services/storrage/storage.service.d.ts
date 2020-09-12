import { SerialPopularity } from '../../schemas/request.schema';
import { Model } from 'mongoose';
export declare class StorageService {
    private SerialPopularityModel;
    constructor(SerialPopularityModel: Model<SerialPopularity>);
    getStorage(): Promise<Array<any>>;
    setStorage(Series: any): Promise<any>;
}
