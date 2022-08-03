export type ChargeDevice = {
    ChargeDeviceId: string,
    ChargeDeviceName: string,
    ChargeDeviceCoordinates: {
        Latitude: number,
        Longitude: number
    },
    ChargeDeviceShortDescription: string | null,
    Connectors: Connector[],
    Charges: number
}

export type ConnectorChargeStatus = "In service" | "Out of service" | "Planned";

export type Connector = {
    ConnectorId: string,
    RatedOutputkW: number,
    ChargePointStatus: ConnectorChargeStatus,
}

export type DynamoChargeDevice = {
    ChargeDeviceId: { S: string },
    ChargeDeviceName: { S: string },
    ChargeDeviceCoordinates: {
        M:
        {
            Latitude: { N: string },
            Longitude: { N: string }
        }
    },
    ChargeDeviceShortDescription?: { S: string },
    Connectors: {
        L: DynamoConnector[]
    }
    Charges: { N: string }
}

export type DynamoConnector = {
    M: {
        ConnectorId: { S: string },
        RatedOutputkW: { N: string },
        ChargePointStatus: { S: string }
    }
}

export type ChargeDeviceMarkerInfo = {
    ChargeDeviceId: string,
    ChargeDeviceCoordinates: {
        Latitude: number,
        Longitude: number
    },
}