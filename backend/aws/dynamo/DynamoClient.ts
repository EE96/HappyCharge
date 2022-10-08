import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

const REGION = "eu-west-2"; //e.g. "us-east-1"

export const DynamoClient = DynamoDBDocument.from(new DynamoDB({ region: REGION }));