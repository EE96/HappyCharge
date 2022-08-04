const axios = require ('axios')

async function test() {
    const response = await axios.put(
        "http://localhost:3100/api/chargeDevices",
        {
            "ChargeDeviceId": "9c8661befae6dbcd08304dbf4dcaf0db",
            "ChargeDeviceName": "Little Victoria St Car Park - Socket 2",
            "ChargeDeviceCoordinates": {
                "Latitude": 54.592703,
                "Longitude": -5.93343
            },
            "ChargeDeviceShortDescription": "Little Victoria Street DRD Car Park",
            "Connectors": [
                {
                    "ConnectorId": "LBBD06001087",
                    "RatedOutputkW": 22,
                    "ChargePointStatus": "In service"
                },
                {
                    "ConnectorId": "LBBD06001083",
                    "RatedOutputkW": 22,
                    "ChargePointStatus": "In service"
                }
            ],
            "Charges": 0
        }
    );
    console.log(response.data)
}
test();