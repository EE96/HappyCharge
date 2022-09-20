import { SNSClient } from "@aws-sdk/client-sns"

const REGION = "eu-west-2" //us-east-1 for serverless, or uk?

export const snsClient = new SNSClient({ region: REGION })