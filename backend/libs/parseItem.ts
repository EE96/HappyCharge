// Import required AWS SDK clients and commands for Node.js
import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { ChargeDevice, Connector } from "../check";
import { ddbClient } from "./ddbClient";
import { DynamoChargeDevice, DynamoConnector } from "./ddb_putitem";

export default function parseChargeItem(chargeDevice: ChargeDevice): DynamoChargeDevice {
  const dynamoDevice: DynamoChargeDevice = {
    ChargeDeviceId: { S: chargeDevice.ChargeDeviceId },
    ChargeDeviceName: { S: chargeDevice.ChargeDeviceName },

    ChargeDeviceCoordinates: {
      M:
      {
        Latitude: { N: chargeDevice.ChargeDeviceCoordinates.Latitude.toString() },
        Longitude: { N: chargeDevice.ChargeDeviceCoordinates.Longitude.toString() }
      }
    },
    Connectors: {
      L: chargeDevice.Connectors.map(parseConnector)
    },
    Charges: { N: "0"}
  };

  if (chargeDevice.ChargeDeviceShortDescription) {
    dynamoDevice.ChargeDeviceShortDescription = { S: chargeDevice.ChargeDeviceShortDescription };
  }
  
  return dynamoDevice;
}


function parseConnector(connector: Connector): DynamoConnector {
  return {
    M: {
      ConnectorId: { S: `${connector.ConnectorId}` },
      RatedOutputkW: { N: connector.RatedOutputkW.toString() },
      ChargePointStatus: { S: connector.ChargePointStatus }
    }
  }
}





