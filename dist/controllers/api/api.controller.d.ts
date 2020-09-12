import { DataService } from '../../services/data/data.service';
import { SortingService } from '../../services/sorting/sorting.service';
import { SerialPopularity } from '../../schemas/request.schema';
import { Model } from 'mongoose';
import { StorageService } from '../../services/storrage/storage.service';
export declare class ApiController {
    private DataService;
    private SortingService;
    private StorageService;
    private SerialPopularityModel;
    constructor(DataService: DataService, SortingService: SortingService, StorageService: StorageService, SerialPopularityModel: Model<SerialPopularity>);
    getAll(params: any): Promise<any>;
    getResult(): Promise<any>;
}
