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

export type ChargeDeviceMarkerInfo = {
    ChargeDeviceId: string,
    ChargeDeviceCoordinates: {
        Latitude: number,
        Longitude: number
    },
}