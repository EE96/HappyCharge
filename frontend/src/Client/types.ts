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

export type PartialReport = {
    content: string,
    chargeDeviceId: string,
    connectorId: string
  }

export type Report = {
    reportId: string
    chargeDeviceId: string
    connectorId: number
    userId: string
    timestamp: string
    content: string
    status: "accepted" | "rejected" | "pending"
}

export type User = {
    userId: string,
    email: string
}
