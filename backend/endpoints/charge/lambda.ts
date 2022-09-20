import { APIGatewayProxyHandler } from "aws-lambda/trigger/api-gateway-proxy";

import ChargeDeviceClient from "../../aws/dynamo/ChargeDeviceClient";
import {
  successResponse,
  badRequestResponse,
  serverErrorResponse,
  notFoundResponse
} from "../../helpers/responses";

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  if (!pathParameters?.chargeDeviceId) {
    return badRequestResponse()
  }

  const chargeDeviceId = decodeURIComponent(pathParameters.chargeDeviceId!);

  try {
    const data = await ChargeDeviceClient.incrementCharges(chargeDeviceId)
    if (!data) {
      return notFoundResponse(`ChargeDevice with ChargeDeviceId ${chargeDeviceId} not found`)
    }
    return successResponse(`Charge registered for ChargeDevice ${chargeDeviceId}`)
  } catch (err) {
    console.log(err)
    return serverErrorResponse()
  }
}
