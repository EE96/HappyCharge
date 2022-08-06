import * as fs from 'fs';

import { ChargeDevice } from "../types/ChargeDevice";
import ChargeDeviceClient from "../dynamo/ChargeDeviceClient";

const data: ChargeDevice[] = JSON.parse(fs.readFileSync('./json/lowerCaseChargeDevice.json', 'utf8'));

const REQUESTS_PER_BATCH = 20;

export default async function populateDatabase() {
        while (data.length > 0) {
            let batchOfRequests: ChargeDevice[] = [];
            for (let i = 0; i < REQUESTS_PER_BATCH && data.length > 0; i++) {

                batchOfRequests.push(data.shift()!);
            }
            
            const timer = new Promise(resolve => setTimeout(resolve, 1050))
            await Promise.all([...batchOfRequests.map(requestItem => ChargeDeviceClient.put(requestItem)), timer]);
        }
    }

populateDatabase();