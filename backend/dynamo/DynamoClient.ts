import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const REGION = "eu-west-2"; //e.g. "us-east-1"

export const DynamoClient = new DynamoDBClient({ region: REGION });