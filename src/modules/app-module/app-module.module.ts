import { HttpModule, Module } from '@nestjs/common';
import { ApiController } from '../../controllers/api/api.controller';
import { DataService } from '../../services/data/data.service';
import { SortingService } from '../../services/sorting/sorting.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SerialPopularity, SerialPopularitySchema } from '../../schemas/request.schema';
import { StorageService } from '../../services/storrage/storage.service';

const environment = process.env.NODE_ENV || 'development';

@Module({
  imports: [HttpModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_WRITE_CONNECTION_STRING,
      {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
      },
    ), MongooseModule.forFeature([{ name: SerialPopularity.name, schema: SerialPopularitySchema }])],
  controllers: [ApiController],
  providers: [DataService, SortingService, StorageService],
})
export class AppModule {
}
