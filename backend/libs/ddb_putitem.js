"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.putItem = exports.params = void 0;
// Import required AWS SDK clients and commands for Node.js
var client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
var ddbClient_js_1 = require("./ddbClient.js");
var parseItem_js_1 = require("./parseItem.js");
// Set the parameters
exports.params = {
    TableName: "ChargeDevices",
    Item: {
        ChargeDeviceId: { S: "9c8661befae6dbcd08304dbf4dcaf0db" },
        ChargeDeviceName: { S: "Little Victoria St Car Park - Socket 2" },
        ChargeDeviceCoordinates: {
            M: {
                Latitude: { N: '54.592703' },
                Longitude: { N: '-5.93343' }
            }
        },
        ChargeDeviceShortDescription: { S: "Little Victoria Street DRD Car Park" },
        Connectors: {
            L: [
                {
                    M: {
                        ConnectorId: { S: "LBBD06001087" },
                        RatedOutputkW: { N: "22" },
                        ChargePointStatus: { S: "In service" }
                    }
                },
                {
                    M: {
                        ConnectorId: { S: "LBBD06001083" },
                        RatedOutputkW: { N: "22" },
                        ChargePointStatus: { S: "In service" }
                    }
                }
            ]
        }
    }
};
var putItem = function (item) { return __awaiter(void 0, void 0, void 0, function () {
    var params, data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    TableName: "ChargeDevices",
                    Item: (0, parseItem_js_1["default"])(item)
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ddbClient_js_1.ddbClient.send(new client_dynamodb_1.PutItemCommand(params))];
            case 2:
                data = _a.sent();
                console.log(data);
                return [2 /*return*/, data];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.putItem = putItem;
