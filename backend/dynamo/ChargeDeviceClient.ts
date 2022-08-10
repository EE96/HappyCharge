import { ChargeDevice } from "../types/ChargeDevice";
import { DynamoClient } from "./DynamoClient";

export default {
    put: async (Item: ChargeDevice) => {
        return await DynamoClient.put({
            TableName: "ChargeDevices",
            Item
        });
    },

    fetch: async (chargeDeviceId: string) => {
        const data = await DynamoClient.get({
            TableName: "ChargeDevices",
            Key: { chargeDeviceId } 
        });
        if (!data?.Item) {
            return null;
        }
        return data.Item as ChargeDevice;
    },

    incrementCharges: async (chargeDeviceId: string) => {
        try {
            return await DynamoClient.update({
                TableName: "ChargeDevices",
                Key: { chargeDeviceId },
                UpdateExpression: `ADD charges :n`,
                ConditionExpression: "chargeDeviceId = :id",
                ExpressionAttributeValues: { ":n": 1, ":id": chargeDeviceId },
            })
        } catch (error) {
            return null;
        }
    }


}