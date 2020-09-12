import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SerialPopularity extends Document {
  @Prop()
  Serial: number;

  @Prop()
  accessCount: number;

  @Prop()
  name: string;
}

export const SerialPopularitySchema = SchemaFactory.createForClass(SerialPopularity);
