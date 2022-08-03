import { APIGatewayProxyHandler } from "aws-lambda/trigger/api-gateway-proxy";
import ChargeDeviceStore, { dynamoToChargeDevice } from "../../dynamo/ChargeDeviceStore";
import { DynamoChargeDevice } from "../../types/ChargeDevice";

export const handler: APIGatewayProxyHandler = async (event) => {
    if (!event.pathParameters?.chargeDeviceId) {
        return {
            statusCode: 400,
            body: JSON.stringify(
              {
                message: "Path param 'chargeDeviceId' missing",
              },
              null,
              2
            ),
          };
    }
    const params = event.pathParameters;
    const chargeDeviceId = decodeURIComponent(params.chargeDeviceId!);

    const response = await ChargeDeviceStore.fetch(chargeDeviceId);

    if (!response?.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify(
          {
            message: `ChargeDevice with ChargeDeviceId ${chargeDeviceId} not found`,
          },
          null,
          2
        ),
      };
    }

    const chargeDevice = dynamoToChargeDevice(response.Item as DynamoChargeDevice)

    return {
    statusCode: 200,
    body: JSON.stringify(
      chargeDevice,
      null,
      2
    ),
  };
};
