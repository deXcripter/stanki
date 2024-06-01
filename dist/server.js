"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, "../config.env") });
console.log("##### Connecting to the Database #####");
mongoose_1.default
    .connect(process.env.LOCAL_DB)
    .then(() => {
    const server = http_1.default.createServer((req, res) => { });
    server.listen(process.env.PORT || 8000, () => {
        console.log(`Server is currently running on port ${process.env.PORT || 8000}`);
    });
})
    .catch((err) => {
    console.log("An error occured when connecting to the database");
    process.exit(1);
});
