import * as mongoose from 'mongoose';
export declare const DataBse: {
    provide: string;
    useFactory: () => Promise<typeof mongoose>;
}[];
