import { Report } from "../types/Report";
import { DynamoClient } from "./DynamoClient";

export default {
    put: async (Item: Report) => {
        await DynamoClient.put({
            TableName: "Reports",
            Item
        });
        return Item;
    },

    fetch: async (reportId: string) => {
        const data = await DynamoClient.get({
            TableName: "Reports",
            Key: { reportId } 
        });
        if (!data?.Item) {
            return null;
        }
        return data.Item as Report;
    },

    delete: async (reportId: string) => {
        await DynamoClient.delete({
            TableName: "Reports",
            Key: { reportId }
        });
    },

}