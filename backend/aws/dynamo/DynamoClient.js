"use strict";
exports.__esModule = true;
exports.DynamoClient = void 0;
var client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
var lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
var REGION = "eu-west-2"; //e.g. "us-east-1"
exports.DynamoClient = lib_dynamodb_1.DynamoDBDocument.from(new client_dynamodb_1.DynamoDB({ region: REGION }));
