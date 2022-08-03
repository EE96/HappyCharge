export type Report = {
    ReportId: string
    ChargeDeviceId: string
    ConnectorId: number
    UserId: string
    Timestamp: string
    Content: string
    Status: "accepted" | "rejected" | "pending"
}