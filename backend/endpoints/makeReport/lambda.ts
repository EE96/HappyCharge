import { APIGatewayProxyHandler } from "aws-lambda";
import { v4 as uuid } from "uuid";

import ReportClient from "../../dynamo/ReportClient";
import {
  successResponse,
  badRequestResponse,
  serverErrorResponse,
  unauthorisedResponse,
} from "../../helpers/responses";
import { Report } from '../../types/Report'
import { auth } from "../../helpers/firebase"

type PartialReport = {
  content: string,
  chargeDeviceId: string,
  connectorId: string
}

export const handler: APIGatewayProxyHandler = async ({ body, headers }) => {
  if (!body) {
    return badRequestResponse("No body")
  }

  if (!headers["access-token"]) {
    return unauthorisedResponse()
  }

  const reportInput: PartialReport = JSON.parse(body)

  const timestamp = new Date().toISOString();
  const reportId = uuid();
  const accessToken = headers["access-token"]

  try {
    const decodedToken = await auth.verifyIdToken(accessToken)
    const { uid } = decodedToken;
    const report: Report = {
      reportId,
      chargeDeviceId: reportInput.chargeDeviceId,
      connectorId: reportInput.connectorId,
      userId: uid,
      timestamp,
      content: reportInput.content,
      status: "pending"
    }

    try {
      const newReport = await ReportClient.put(report)
      return successResponse(newReport)
    } catch (err) {
      console.log(err)
      return serverErrorResponse()
    }
  } catch {
    return unauthorisedResponse()
  }
}