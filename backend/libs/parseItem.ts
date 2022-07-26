// Import required AWS SDK clients and commands for Node.js
import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { ChargeDevice, Connector } from "../check";
import { ddbClient } from "./ddbClient";
import { DynamoChargeDevice, DynamoConnector } from "./ddb_putitem";

export default function parseChargeItem(chargeDevice: ChargeDevice): DynamoChargeDevice {
  return {
    ChargeDeviceId: { S: chargeDevice.ChargeDeviceId },
    ChargeDeviceName: { S: chargeDevice.ChargeDeviceName },

    ChargeDeviceCoordinates: {
      M:
      {
        Latitude: { N: chargeDevice.ChargeDeviceCoordinates.Latitude.toString() },
        Longitude: { N: chargeDevice.ChargeDeviceCoordinates.Longitude.toString() }
      }
    },
    ChargeDeviceShortDescription: { S: chargeDevice.ChargeDeviceShortDescription },

    Connectors: {
      L: chargeDevice.Connectors.map(parseConnector)
    },
    // Charges: { N: "0"}
  }
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





