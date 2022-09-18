const axios = require ('axios')

async function test() {
    const response = await axios.put(
        "http://localhost:3100/api/chargeDevices",
        {
            "chargeDeviceId": "9c8661befae6dbcd08304dbf4dcaf0db",
            "chargeDeviceName": "Little Victoria St Car Park - Socket 2",
            "chargeDeviceCoordinates": {
                "latitude": 54.592703,
                "longitude": -5.93343
            },
            "chargeDeviceShortDescription": "Little Victoria Street DRD Car Park",
            "connectors": [
                {
                    "connectorId": "LBBD06001087",
                    "ratedOutputkW": 22,
                    "chargePointStatus": "In service"
                },
                {
                    "connectorId": "LBBD06001083",
                    "ratedOutputkW": 22,
                    "chargePointStatus": "In service"
                }
            ],
            "charges": 0
        }
    );
    console.log(response)
}
test();