import { APIGatewayProxyHandler } from "aws-lambda";

import {
    successResponse,
    badRequestResponse,
    serverErrorResponse,
    unauthorisedResponse
} from "../../helpers/responses";
import { auth } from "../../helpers/firebase"
import { DecodedIdToken } from "firebase-admin/auth";
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
        console.log(`
        
        TESTING 1
        
        
        `)
        // const firebase = auth();
        // console.log({auth})
        const decodedToken = await auth.verifyIdToken(accessToken)
        console.log(`
        
        TESTING 2
        
        
        `)
        const { uid } = decodedToken;
        console.log(`
        
        TESTING 3
        
        
        `)
        
        try {
            const user = await UserClient.put({ userId: uid, email: userDetails.email })
            console.log(`
            
            TESTING 4
            
            
            `)
            return successResponse(user)
            // return successResponse()
        } catch (err) {
            console.log(err)
            return serverErrorResponse()
        }
    } catch {
        return unauthorisedResponse()
    }
}