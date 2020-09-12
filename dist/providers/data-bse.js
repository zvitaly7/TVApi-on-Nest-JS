"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBse = void 0;
const mongoose = require("mongoose");
exports.DataBse = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb://localhost/nest'),
    },
];
//# sourceMappingURL=data-bse.js.map