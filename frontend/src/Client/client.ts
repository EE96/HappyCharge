import axios from 'axios';

import { ChargeDevice } from './types';

export default class Client {
   baseUrl: string

   constructor(offline: boolean = false) {
      this.baseUrl = offline ? 'http://localhost:3100/' : 'https://fl01ihyxcb.execute-api.eu-west-2.amazonaws.com/'
   }

   async fetchChargeDevice(chargeDeviceId: string) {
      const response = await axios.get(`${this.baseUrl}api/chargeDevices/${chargeDeviceId}`);
      if (response.status !== 200) {
         throw Error(response.statusText);
      }
      return response.data as ChargeDevice;
   }

   async putChargeDevice(chargeDevice: ChargeDevice) {
      const response = await axios.put(`${this.baseUrl}api/chargeDevices`, chargeDevice);
      if (response.status !== 200) {
         throw Error(response.statusText);
      }
      return response.data as ChargeDevice;
   }

   async chargeAtDevice(chargeDeviceId: string) {
      const response = await axios.patch(`${this.baseUrl}api/chargeDevices/${chargeDeviceId}/charge`);
      if (response.status !== 200) {
         throw Error(response.statusText)
      }
   }
}