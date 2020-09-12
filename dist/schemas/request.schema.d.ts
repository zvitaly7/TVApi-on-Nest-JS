import { Document } from 'mongoose';
export declare class SerialPopularity extends Document {
    Serial: number;
    accessCount: number;
    name: string;
}
export declare const SerialPopularitySchema: import("mongoose").Schema<any>;
