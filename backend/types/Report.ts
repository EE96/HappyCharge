export type Report = {
    reportId: string
    chargeDeviceId: string
    connectorId: number
    userId: string
    timestamp: string
    content: string
    status: "accepted" | "rejected" | "pending"
}