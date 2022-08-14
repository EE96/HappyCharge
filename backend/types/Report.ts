export type Report = {
    reportId: string
    chargeDeviceId: string
    connectorId: string
    userId: string
    timestamp: string
    content: string
    status: "accepted" | "rejected" | "pending"
}