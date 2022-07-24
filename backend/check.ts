import * as fs from 'fs';

const data = JSON.parse(fs.readFileSync('NCR.json', 'utf8'));
// console.log(typeof data)
// console.log(data.ChargeDevice[1000])
// console.log(data.ChargeDevice[500])
// console.log(data.ChargeDevice[3].ChargeDeviceLocation)
// console.log(data.ChargeDevice[5].ChargeDeviceLocation)
// console.log(data.ChargeDevice[7].ChargeDeviceLocation)
// console.log(data.ChargeDevice[11].ChargeDeviceLocation)

type TruncatedData = {
    ChargeDeviceId: string, 
    ChargeDeviceName: string, 
    ChargeDeviceCoordinates: {
        Latitude: number, 
        Longitude: number
    },
    ChargeDeviceShortDescription: string,
    Connectors: TruncatedConnector[],
}

type TruncatedConnector = {
    ConnectorId: number,
    RatedOutputkW: number, 
    ChargePointStatus: string,
}

const parseConnector = (Connector: any) => {
    let connectorData: TruncatedConnector = {
        ConnectorId: Connector.ConnectorId,
        RatedOutputkW: parseInt(Connector.RatedOutputkW),
        ChargePointStatus: Connector.ChargePointStatus
    }
    return connectorData
}

const parseChargeDevice = (ChargeDevice: any) => {
    let data: TruncatedData = {
        ChargeDeviceId: ChargeDevice.ChargeDeviceId,
        ChargeDeviceName: ChargeDevice.ChargeDeviceName,
        ChargeDeviceCoordinates: {
            Latitude: parseFloat(ChargeDevice.ChargeDeviceLocation.Latitude), 
            Longitude: parseFloat(ChargeDevice.ChargeDeviceLocation.Longitude)
        },
        ChargeDeviceShortDescription: ChargeDevice.ChargeDeviceLocation.LocationShortDescription,
        Connectors: ChargeDevice.Connector.map((x: any) => parseConnector(x))
    }
    return data;
}

// console.log(parseChargeDevice(data.ChargeDevice[1]))

const output = (data.ChargeDevice as any[]).map((chargeDevice: any) => parseChargeDevice(chargeDevice))

fs.writeFile('output.json', JSON.stringify(output), function err() {
    if (err) throw err;
}
)
