export type ChargeDevice = {
    chargeDeviceId: string,
    chargeDeviceName: string,
    chargeDeviceCoordinates: {
        latitude: number,
        longitude: number
    },
    chargeDeviceShortDescription: string | null,
    connectors: Connector[],
    charges: number
}

export type ConnectorChargeStatus = "In service" | "Out of service" | "Planned";

export type Connector = {
    connectorId: string,
    ratedOutputkW: number,
    chargePointStatus: ConnectorChargeStatus,
}

export type ChargeDeviceMarkerInfo = {
    chargeDeviceId: string,
    chargeDeviceCoordinates: {
        latitude: number,
        longitude: number
    },
}