import { APIGatewayProxyHandler } from "aws-lambda/trigger/api-gateway-proxy";

import ChargeDeviceClient from "../../dynamo/ChargeDeviceClient";
import {
  successResponse,
  badRequestResponse,
  serverErrorResponse,
  notFoundResponse
} from "../../helpers/responses";

export const handler: APIGatewayProxyHandler = async ({ pathParameters }) => {
  if (!pathParameters?.chargeDeviceId) {
    return badRequestResponse("Path param 'chargeDeviceId' missing")
  }

  const chargeDeviceId = decodeURIComponent(pathParameters.chargeDeviceId!);

  try {
    const chargeDevice = await ChargeDeviceClient.fetch(chargeDeviceId)
    if (!chargeDevice) {
      return notFoundResponse(`ChargeDevice with ChargeDeviceId ${chargeDeviceId} not found`)
    }
    return successResponse(chargeDevice);
  } catch (err) {
    console.log(err)
    return serverErrorResponse()
  }
};

// type validation = {
//   pathParams?: Record<string, ParamTypes>,
//   queryParams?: Record<string, ParamTypes>,
//   bodyFields?: Record<string, ParamTypes>,
// }

// type ParamTypes = 'string' | 'number' | 'boolean' | 'nonEmptyString' | 'uuid'

// const test: validation = {
//   pathParams: {
//     chargeDeviceId: 'string'
//   }
// }