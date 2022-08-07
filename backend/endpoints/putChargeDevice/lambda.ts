import { APIGatewayProxyHandler } from "aws-lambda";

import ChargeDeviceClient from "../../dynamo/ChargeDeviceClient";
import { ChargeDevice } from "../../types/ChargeDevice";
import {
  successResponse,
  badRequestResponse,
  serverErrorResponse,
} from "../../helpers/responses";

export const handler: APIGatewayProxyHandler = async ({ body }) => {
  if (!body) {
    return badRequestResponse("No body")
  }

  const chargeDevice: ChargeDevice = JSON.parse(body)

  if (typeof chargeDevice.chargeDeviceId !== 'string') {
    return badRequestResponse(`Invalid body field: chargeDeviceId was a ${typeof chargeDevice.chargeDeviceId}, must be string`)
  }

  try {
    await ChargeDeviceClient.put(chargeDevice)
    return successResponse()
  } catch (err) {
    console.log(err)
    return serverErrorResponse()
  }
}