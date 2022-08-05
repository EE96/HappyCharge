import { UpdateCommandInput } from "@aws-sdk/lib-dynamodb";
import { ChargeDevice } from "../types/ChargeDevice";
import { DynamoClient } from "./DynamoClient";

export default {
    put: async (Item: ChargeDevice) => {
        return await DynamoClient.put({
            TableName: "ChargeDevices",
            Item
        });
    },

    fetch: async (ChargeDeviceId: string) => {
        const data = await DynamoClient.get({
            TableName: "ChargeDevices",
            Key: { ChargeDeviceId } 
        });
        if (!data?.Item) {
            return null;
        }
        return data.Item as ChargeDevice;
    },

    incrementCharges: async (ChargeDeviceId: string) => {
        try {
            return await DynamoClient.update({
                TableName: "ChargeDevices",
                Key: { ChargeDeviceId },
                UpdateExpression: `ADD Charges :n`,
                ConditionExpression: "ChargeDeviceId = :id",
                ExpressionAttributeValues: { ":n": 1, ":id": ChargeDeviceId },
            })
        } catch (error) {
            return null;
        }
    }


}