import axios from 'axios';
import { ChargeDevice } from './types/ChargeDevice';

export default class Client {
     baseUrl: string

     constructor(host: string = 'localhost:3100') {
        this.baseUrl = `http://${host}`
     }

     async fetchChargeDevice(chargeDeviceId: string) {
        const response = await axios.get(`${this.baseUrl}/api/chargeDevices/${chargeDeviceId}`);
        if (response.status !== 200) {
            throw Error(response.statusText);
        }
        return response.data as ChargeDevice;
     }

     async putChargeDevice(chargeDevice: ChargeDevice) {
        const response = await axios.put(`${this.baseUrl}/api/chargeDevices`, chargeDevice);
        if (response.status !== 200) {
            throw Error(response.statusText);
        }
        return response.data as ChargeDevice;
     }
}