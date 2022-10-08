// Import required AWS SDK clients and commands for Node.js
import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { DynamoClient } from "../aws/dynamo/DynamoClient.js";

// Set the parameters
export const chargeDeviceParams = {
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
    ReadCapacityUnits: 21,
    WriteCapacityUnits: 21,
  },
  TableName: "ChargeDevices", //TABLE_NAME
  StreamSpecification: {
    StreamEnabled: false,
  },
};

export const reportParams = {
  AttributeDefinitions: [
    {
      AttributeName: "ReportId", //ATTRIBUTE_NAME_1
      AttributeType: "S", //ATTRIBUTE_TYPE
    }
  ],
  KeySchema: [
    {
      AttributeName: "ReportId", //ATTRIBUTE_NAME_1
      KeyType: "HASH",
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 2,
  },
  TableName: "Reports", //TABLE_NAME
  StreamSpecification: {
    StreamEnabled: false,
  },
};

export const userParams = {
  AttributeDefinitions: [
    {
      AttributeName: "UserId", //ATTRIBUTE_NAME_1
      AttributeType: "S", //ATTRIBUTE_TYPE
    }
  ],
  KeySchema: [
    {
      AttributeName: "UserId", //ATTRIBUTE_NAME_1
      KeyType: "HASH",
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 2,
  },
  TableName: "Users", //TABLE_NAME
  StreamSpecification: {
    StreamEnabled: false,
  },
};

export const run = async () => {
  try {
    const chargeDeviceData = await DynamoClient.send(new CreateTableCommand(chargeDeviceParams));
    const reportData = await DynamoClient.send(new CreateTableCommand(reportParams));
    const userData = await DynamoClient.send(new CreateTableCommand(userParams));
    const data = { chargeDeviceData, reportData, userData };
    console.log("Table Created", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();