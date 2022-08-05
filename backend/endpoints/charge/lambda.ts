import { APIGatewayProxyHandler } from "aws-lambda/trigger/api-gateway-proxy";

import ChargeDeviceClient from "../../dynamo/ChargeDeviceClient";

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  if (!pathParameters?.chargeDeviceId) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(
        {
          message: "Path param 'chargeDeviceId' missing",
        },
        null,
        2
      ),
    };
  }
  const chargeDeviceId = decodeURIComponent(pathParameters.chargeDeviceId!);

  try {
    const data = await ChargeDeviceClient.incrementCharges(chargeDeviceId)

    if (!data) {
      return {
        statusCode: 404,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(
          {
            message: `ChargeDevice with ChargeDeviceId ${chargeDeviceId} not found`,
          },
          null,
          2
        ),
      }
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: `Charge registered for ChargeDevice ${chargeDeviceId}`
    };

  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({ message: "Internal server error" }, null, 2)
    }
  }
};
