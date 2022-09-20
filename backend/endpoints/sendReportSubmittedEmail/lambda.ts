import { SQSEvent, SQSHandler } from "aws-lambda";

export const handler: SQSHandler = async (event: SQSEvent) => {

    try{
        console.log("email gets sent here")
    }
    catch{
        console.log("email doesn't get sent here")
    }
}