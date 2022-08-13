import { DynamoClient } from "./DynamoClient";
import { User } from "../types/User";

export default {
    put: async (Item: User) => {
         await DynamoClient.put({
            TableName: "Users",
            Item,
            ConditionExpression: "attribute_not_exists(userId)",
        });
        return Item
    },

    fetch: async (userId: string) => {
        const data = await DynamoClient.get({
            TableName: "Users",
            Key: { userId } 
        });
        if (!data?.Item) {
            return null;
        }
        return data.Item as User;
    }
}