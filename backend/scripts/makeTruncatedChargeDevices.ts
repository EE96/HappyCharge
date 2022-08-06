import * as fs from 'fs';

import { ChargeDevice, ChargeDeviceMarkerInfo } from "../types/ChargeDevice";

const data: ChargeDevice[] = JSON.parse(fs.readFileSync('./json/lowerCaseChargeDevice.json', 'utf8'));

const truncatedData = data.map(({chargeDeviceId, chargeDeviceCoordinates}): ChargeDeviceMarkerInfo => ({
    chargeDeviceId,
    chargeDeviceCoordinates
}));

fs.writeFile('./json/lowerCaseTruncatedChargeDevice.json', JSON.stringify(truncatedData, null, 2),  err => {
    console.log(err)
});