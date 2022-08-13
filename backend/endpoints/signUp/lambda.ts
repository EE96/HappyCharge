import { APIGatewayProxyHandler } from "aws-lambda";

import {
    successResponse,
    badRequestResponse,
    serverErrorResponse,
    unauthorisedResponse
} from "../../helpers/responses";
import { auth } from "../../helpers/firebase"
import UserClient from "../../dynamo/UserClient";

export const handler: APIGatewayProxyHandler = async ({ body, headers }) => {

    if (!body) {
        return badRequestResponse("No body")
    }

    if (!headers["access-token"]) {
        return unauthorisedResponse()
    }

    const userDetails: { email: string } = JSON.parse(body)

    if (typeof userDetails.email !== 'string') {
        return badRequestResponse(`Invalid body field: email was a ${typeof userDetails.email}, must be string`)
    }

    const accessToken = headers["access-token"]

    try {
        const decodedToken = await auth.verifyIdToken(accessToken)        
        const { uid } = decodedToken;

        try {
            const user = await UserClient.put({ userId: uid, email: userDetails.email })
            return successResponse(user)
        } catch (err) {
            console.log(err)
            return serverErrorResponse()
        }
    } catch {
        return unauthorisedResponse()
    }
}