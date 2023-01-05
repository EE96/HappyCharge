# HappyCharge (masters project)

HappyCharge is a proof-of-concept project for EV owners to traverse a map showing all NCR-registered charging stations in the UK. This project was submitted for completion of my Software Development Masters, and now serves as a sandbox to test and learn new AWS services, with periodic refactoring and building out of new features. 

HC uses a React frontend that displays a GoogleMap with markers populated by coordinates. Authentication is provided by Firebase. The backend is entirely serverless and relies on AWS services, with multiple DynamoDB tables (for charge devices, reports, and users), alongside a variety of Lambda functions that interact with or manipulate data on these tables. The AWS CloudFormation stack is deployed via the Serverless framework and its structure is fully defined in the yml file in the backend directory. The endpoints directory contains all Lambda functions and corresponding tests, with the helper directory containing reusable HTTP responses that are pulled into relevant Lambda functions and returned as appropriate. The AWS directory contains a series of 'clients' that build from the DDBClient and are each responsible for managing interactions with a distinct DDB Table, ensuring separation of concerns and safety - these clients are pulled into relevant Lambda functions as required. 

The system architecture can be seen here: 

![image](https://user-images.githubusercontent.com/64355134/210754242-31ae0d44-f061-429c-95a2-597cf0051fd9.png)

Users are able to select  markers to see relevant information about the corresponding charging station, including the speed of the connectors and whether they are in service or not. Users are able to submit fault reports relating to these connectors, or register a charge at the station. The project is not currently deployed, however the frontend can be viewed below:

![image](https://user-images.githubusercontent.com/64355134/210754717-1cba678f-ff0a-42aa-a5aa-25ac365ceb32.png)

Automated acceptance tests have been implemented alongside each Lambda function using Mocha and Chai. 

