import axios from 'axios'
import { expect } from 'chai'
import { v4 as uuid } from "uuid";


import { ChargeDevice } from '../../types/ChargeDevice';
import ChargeDeviceClient from '../../aws/dynamo/ChargeDeviceClient';

describe('fetchChargeDevice', function () {
    it('should retrieve the correct chargeDevice in the database', async function () {
        const chargeDeviceId = uuid();

        const chargeDevice: ChargeDevice = {
            chargeDeviceId,
            chargeDeviceName: "Your house",
            chargeDeviceCoordinates: {
                latitude: 50.592703,
                longitude: -6.93343
            },
            chargeDeviceShortDescription: "Right outside your house",
            connectors: [
                {
                    connectorId: "connectorId-1",
                    ratedOutputkW: 22,
                    chargePointStatus: "In service"
                },
                {
                    connectorId: "connectorId-2",
                    ratedOutputkW: 22,
                    chargePointStatus: "In service"
                }
            ],
            charges: 0
        };

        await ChargeDeviceClient.put(chargeDevice)

        
        const response = await axios.get(
            `http://localhost:3100/api/chargeDevices/${chargeDeviceId}`
        );

        expect(response.data).deep.equal(chargeDevice);

        await ChargeDeviceClient.delete(chargeDevice.chargeDeviceId);
    });
});