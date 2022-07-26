// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";
import { ChargeDevice } from "../check.js";
import { ddbClient } from "./ddbClient.js";
import parseChargeItem from "./parseItem.js";


export type DynamoChargeDevice = {
    ChargeDeviceId: { S: string },
    ChargeDeviceName: { S: string },
    ChargeDeviceCoordinates: {
        M:
        {
            Latitude: { N: string },
            Longitude: { N: string }
        }
    },
    ChargeDeviceShortDescription: { S: string },
    Connectors: {
        L: DynamoConnector[]
    }
    Charges?: { N: string }
}

export type DynamoConnector = {
    M: {
        ConnectorId: { S: string },
        RatedOutputkW: { N: string },
        ChargePointStatus: { S: string }
    }
}



// Set the parameters
export const params: PutItemCommandInput = {
    TableName: "ChargeDevices",
    Item: {
        ChargeDeviceId: { S: "9c8661befae6dbcd08304dbf4dcaf0db" },
        ChargeDeviceName: { S: "Little Victoria St Car Park - Socket 2" },

        ChargeDeviceCoordinates: {
            M:
            {
                Latitude: { N: '54.592703' },
                Longitude: { N: '-5.93343' }
            }
        },
        ChargeDeviceShortDescription: { S: "Little Victoria Street DRD Car Park" },
        Connectors: {
            L: [
                {
                    M:
                    {
                        ConnectorId: { S: "LBBD06001087" },
                        RatedOutputkW: { N: "22" },
                        ChargePointStatus: { S: "In service" }
                    }
                },
                {
                    M:
                    {
                        ConnectorId: { S: "LBBD06001083" },
                        RatedOutputkW: { N: "22" },
                        ChargePointStatus: { S: "In service" },
                    }
                }
            ]
        }
    }
};

export const putItem = async (item: ChargeDevice) => {
    const params: PutItemCommandInput = {
        TableName: "ChargeDevices",
        Item: parseChargeItem(item)
    };
    try {
        const data = await ddbClient.send(new PutItemCommand(params));
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
};
