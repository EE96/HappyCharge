import { v4 as uuid } from "uuid";
import { expect } from 'chai'

import { authFrontend, logInWithEmailAndPassword, logout } from "../../helpers/firebaseFrontend";
import ReportClient from "../../dynamo/ReportClient";
import { PartialReport } from './lambda'
import axios from "axios";
import { Report } from "../../types/Report";

describe('makeReport', function () {
    it('should create a report and add it to the database', async function () {

        await logInWithEmailAndPassword("test@test.com", "pppppp");
        const token = await authFrontend.currentUser?.getIdToken();

        const partReport: PartialReport = {
            chargeDeviceId: "test ChargeDevice",
            connectorId: "test Connector",
            content: "this ChargeDevice is broken",
        }

        const response = await axios.post(
            "http://localhost:3100/api/report",
            partReport,
            {
                headers: token ? {
                    'access-token': token
                } : undefined,
            }
        );

        const check = await ReportClient.fetch(response.data.reportId) as Report
        const partCheck: PartialReport = {
            content: check.content, 
            chargeDeviceId: check.chargeDeviceId,
            connectorId: check.connectorId
        }
        
        expect(partCheck).deep.equal(partReport);

        await ReportClient.delete(response.data.reportId)
        await logout()
    });
});