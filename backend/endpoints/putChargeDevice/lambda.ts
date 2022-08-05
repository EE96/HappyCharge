import { APIGatewayProxyHandler } from "aws-lambda";

import ChargeDeviceClient from "../../dynamo/ChargeDeviceClient";
import { ChargeDevice } from "../../types/ChargeDevice";

export const handler: APIGatewayProxyHandler = async ({ body }) => {
  if (!body) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: "Missing Request Body",
        },
        null,
        2
      ),
    };
  }

  const chargeDevice: ChargeDevice = JSON.parse(body)

  if (!(typeof chargeDevice.ChargeDeviceId === 'string')) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: `Invalid body field: chargeDeviceId was a ${typeof chargeDevice.ChargeDeviceId}, must be string`,
        },
        null,
        2
      ),
    };
  }

  try {
    await ChargeDeviceClient.put(chargeDevice)

    return {
      statusCode: 200,
      body: JSON.stringify(
        chargeDevice,
        null,
        2
      ),
    };

  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }, null, 2)
    }
  }
};