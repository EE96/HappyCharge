import { ChargeDevice } from "../types/ChargeDevice";
import ChargeDeviceStore from "../dynamo/ChargeDeviceStore";
import * as fs from 'fs';

const data: ChargeDevice[] = JSON.parse(fs.readFileSync('./json/fullChargeDevice.json', 'utf8'));

const REQUESTS_PER_BATCH = 20;

export default async function populateDatabase() {
        while (data.length > 0) {
            let batchOfRequests: ChargeDevice[] = [];
            for (let i = 0; i < REQUESTS_PER_BATCH && data.length > 0; i++) {

                batchOfRequests.push(data.shift()!);
            }
            
            const timer = new Promise(resolve => setTimeout(resolve, 1050))
            await Promise.all([...batchOfRequests.map(requestItem => ChargeDeviceStore.put(requestItem)), timer]);
        }
    }

populateDatabase();