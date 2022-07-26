import * as fs from 'fs';

const data: ChargeDevice[] = JSON.parse(fs.readFileSync('output.json', 'utf8'));
// console.log(typeof data)
// console.log(data.ChargeDevice[1000])
// console.log(data.ChargeDevice[500])
// console.log(data.ChargeDevice[3].ChargeDeviceLocation)
// console.log(data.ChargeDevice[5].ChargeDeviceLocation)
// console.log(data.ChargeDevice[7].ChargeDeviceLocation)
// console.log(data.ChargeDevice[11].ChargeDeviceLocation)

export type ChargeDeviceMarkerInfo = {
    ChargeDeviceId: string,
    ChargeDeviceCoordinates: {
        Latitude: number,
        Longitude: number
    },
}

export type FullChargeDevice = {
    ChargeDeviceId: string,
    ChargeDeviceName: string,
    ChargeDeviceCoordinates: {
        Latitude: number,
        Longitude: number
    },
    ChargeDeviceShortDescription: string,
    Connectors: Connector[],
    Charges: number
}

export type ChargeDevice = {
    ChargeDeviceId: string,
    ChargeDeviceName: string,
    ChargeDeviceCoordinates: {
        Latitude: number,
        Longitude: number
    },
    ChargeDeviceShortDescription: string,
    Connectors: Connector[],
    Charges: number
}

export type Connector = {
    ConnectorId: number,
    RatedOutputkW: number,
    ChargePointStatus: string,
}

const parseConnector = (Connector: any) => {
    let connectorData: Connector = {
        ConnectorId: Connector.ConnectorId,
        RatedOutputkW: parseInt(Connector.RatedOutputkW),
        ChargePointStatus: Connector.ChargePointStatus
    }
    return connectorData
}

const parseChargeDevice = (c: ChargeDevice) => {
    let data: ChargeDevice = {
        ChargeDeviceId: c.ChargeDeviceId,
        ChargeDeviceName: c.ChargeDeviceName,
        ChargeDeviceCoordinates: {
            Latitude: c.ChargeDeviceCoordinates.Latitude,
            Longitude: c.ChargeDeviceCoordinates.Longitude
        },
        ChargeDeviceShortDescription: c.ChargeDeviceShortDescription,
        Connectors: c.Connectors.map((x: any) => parseConnector(x)),
        Charges: c.Charges
    }
    return data;
}

const makeFullChargeDevice = (c: ChargeDevice) => {
    let data: FullChargeDevice = {
        ChargeDeviceId: c.ChargeDeviceId,
        ChargeDeviceName: c.ChargeDeviceName,
        ChargeDeviceCoordinates: {
            Latitude: c.ChargeDeviceCoordinates.Latitude,
            Longitude: c.ChargeDeviceCoordinates.Longitude
        },
        ChargeDeviceShortDescription: c.ChargeDeviceShortDescription,
        Connectors: c.Connectors.map((x: any) => parseConnector(x)),
        Charges: 0,
    }
    return data;
}

const makeChargeDeviceMarkerInfo = (c: ChargeDevice) => {
    let data: ChargeDeviceMarkerInfo = {
        ChargeDeviceId: c.ChargeDeviceId,
        ChargeDeviceCoordinates: {
            Latitude: c.ChargeDeviceCoordinates.Latitude,
            Longitude: c.ChargeDeviceCoordinates.Longitude
        },
    }
    return data
}

// console.log(parseChargeDevice(data[1]))

// const output = data.map((chargeDevice: ChargeDevice) => parseChargeDevice(chargeDevice)) //normal
// const output = data.map((chargeDevice: ChargeDevice) => makeFullChargeDevice(chargeDevice)) //FullChargeDevices
const output = data.map((chargeDevice: ChargeDevice) => makeChargeDeviceMarkerInfo(chargeDevice)) //FullChargeDevices

// const output = (parseChargeDevice(data[1]))

fs.writeFile('truncated.json', JSON.stringify(output), function err() {
    if (err) throw err;
}
)
