"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mysql, { createConnection } from 'promise-mysql';
const promise_1 = __importDefault(require("mysql2/promise"));
const data_1 = __importDefault(require("./data"));
const pool = promise_1.default.createPool(data_1.default.database);
pool.getConnection().then((connection) => {
    pool.releaseConnection(connection);
    console.log("Conexion Exitosa");
});
exports.default = pool;
