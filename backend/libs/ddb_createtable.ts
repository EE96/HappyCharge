// Import required AWS SDK clients and commands for Node.js
import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

// Set the parameters
export const params = {
  AttributeDefinitions: [
    {
      AttributeName: "ChargeDeviceId", //ATTRIBUTE_NAME_1
      AttributeType: "S", //ATTRIBUTE_TYPE
    }
  ],
  KeySchema: [
    {
      AttributeName: "ChargeDeviceId", //ATTRIBUTE_NAME_1
      KeyType: "HASH",
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "ChargeDevices", //TABLE_NAME
  StreamSpecification: {
    StreamEnabled: false,
  },
};

export const run = async () => {
  try {
    const data = await ddbClient.send(new CreateTableCommand(params));
    console.log("Table Created", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();