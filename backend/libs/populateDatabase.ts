import { CreateTableCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { ChargeDevice, Connector } from "../check";
import { ddbClient } from "./ddbClient";
import { DynamoChargeDevice, DynamoConnector, putItem } from "./ddb_putitem";
import * as fs from 'fs';
import { batchPutItems } from "./ddb_batchWriteItem";


const data: ChargeDevice[] = JSON.parse(fs.readFileSync('../output.json', 'utf8'));

const ITEMS_PER_REQUEST = 25;
const REQUESTS_PER_BATCH = 10;

export default async function populateDatabase() {
    while (data.length > 0) {
        // let batchOfRequests: ChargeDevice[][] = [];
        // for (let i = 0; i < REQUESTS_PER_BATCH && data.length > 0; i++) {
            // let requestItems: ChargeDevice[] = [];
            // for (let j = 0; j < ITEMS_PER_REQUEST && data.length > 0; j++) {
            //     requestItems.push(data.shift()!);
            // }
            // console.log(requestItems);
            // await putItem(data[0]);
            await putItem(data.shift()!);
            // await batchPutItems(requestItems);
            // batchOfRequests.push(requestItems);
        // }
        
        // await Promise.all(batchOfRequests.map(requestItems => batchPutItems(requestItems)))
    }
}


populateDatabase();