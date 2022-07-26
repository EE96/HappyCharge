import { BatchWriteCommand, BatchWriteCommandInput } from "@aws-sdk/lib-dynamodb";
import { ChargeDevice } from "../check";
import { ddbClient } from "./ddbClient";
import { DynamoChargeDevice } from "./ddb_putitem";
import parseChargeItem from "./parseItem";

export type ChargeDevicePutRequest = {
    PutRequest: {
        Item: DynamoChargeDevice
    }
}

// Set the parameters
export const params: BatchWriteCommandInput = {
    RequestItems: {
        ChargeDevices: [
            {
                PutRequest: {
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
                }
            }
        ]
    }
};

export const batchPutItems = async (items: ChargeDevice[]) => {
    const dynamoItems = items.map(item => parseChargeItem(item))
    console.log(dynamoItems[0]);
    const wrappedItems = dynamoItems.map(item => wrapPutRequest(item));
    const params: BatchWriteCommandInput = {
        RequestItems: {
            ChargeDevices: wrappedItems
        }
    }
    // console.log(params)
    // console.log(params.RequestItems!.ChargeDevices)
    try {
        const data = await ddbClient.send(new BatchWriteCommand(params));
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
};

const wrapPutRequest = (item: DynamoChargeDevice): ChargeDevicePutRequest => {
    return {
        PutRequest: {
            Item: item
        }
    }
}