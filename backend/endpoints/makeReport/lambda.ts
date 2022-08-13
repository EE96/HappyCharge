import { APIGatewayProxyHandler } from "aws-lambda";
import ReportClient from "../../dynamo/ReportClient";

import {
    successResponse,
    badRequestResponse,
    serverErrorResponse,
} from "../../helpers/responses";
import { Report } from '../../types/Report'

export const handler: APIGatewayProxyHandler = async ({ body }) => {
    if (!body) {
      return badRequestResponse("No body")
    }
  
    const report: Report = JSON.parse(body)
  
    if (typeof report.reportId !== 'string') {
      return badRequestResponse(`Invalid body field: reportId was a ${typeof report.reportId}, must be string`)
    }
  
    try {
      const newReport = await ReportClient.put(report)
      return successResponse(newReport)
    } catch (err) {
      console.log(err)
      return serverErrorResponse()
    }
  }