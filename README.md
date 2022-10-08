# HappyCharge (masters project)

HappyCharge is a proof-of-concept project for EV owners to traverse a map showing all NCR-registered charging stations in the UK. This project serves as a sandbox to test and learn new AWS services, with periodic refactoring and building out of new features. 

Users are able to select these markers to see relevant information about the corresponding charging station, including the speed of the connectors and whether they are in service or not. Users are able to submit fault reports relating to these connectors, or register a charge at the station. 
    
HC uses a React frontend that displays a GoogleMap with markers populated by coordinates. Frontend authentication is provided by Firebase. The backend is serverless and relies on AWS services, with multiple DynamoDB tables (for charge devices, reports, and users), alongside a variety of Lambda functions that interact with or manipulate data on these tables. The AWS CloudFormation stack is deployed via the Serverless framework. 

Automated acceptance tests have been implemented alongside each Lambda function using Mocha and Chai. 

