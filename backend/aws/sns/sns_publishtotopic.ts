import { PublishCommand } from "@aws-sdk/client-sns";

import { snsClient } from "./SNSClient"

const params = {
    Message: "Message_Text",
    TopicArn: "Topic_arn"
}

const run = async() => {

    try{
        const data = await snsClient.send(new PublishCommand(params))
        console.log("Success.", data);
        return data;
    }catch (err: any){
        console.log("Error", err.stack);
    }
}
run();