"use strict";
exports.__esModule = true;
exports.ddbClient = void 0;
// Create service client module using ES6 syntax.
var client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
// Set the AWS Region.
var REGION = "eu-west-2"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
var ddbClient = new client_dynamodb_1.DynamoDBClient({ region: REGION });
exports.ddbClient = ddbClient;
