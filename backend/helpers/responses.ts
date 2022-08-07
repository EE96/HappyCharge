export const successResponse = (bodyObject: any = "") => ({
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
        bodyObject,
        null,
        2
    ),
})


export const badRequestResponse = (message: string = "Bad Request") => ({
    statusCode: 400,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
        {
            message
        },
        null,
        2
    ),
})

export const serverErrorResponse = (message: string = "Internal Server Error") => ({
    statusCode: 500,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
        {
            message
        },
        null,
        2
    ),
})

export const notFoundResponse = (message: string = "Not Found") => ({
    statusCode: 404,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
        {
            message
        },
        null,
        2
    ),
})