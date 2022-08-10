import axios from 'axios';

import { auth } from '../firebaseAuth';
import { ChargeDevice } from './types';

type RequestArgs = {
   url: string
   method: 'get' | 'post' | 'put' | 'patch'
   data?: Record<string, any>
}

export default class Client {
   baseUrl: string

   constructor(offline: boolean = false) {
      this.baseUrl = offline ? 'http://localhost:3100/' : 'https://fl01ihyxcb.execute-api.eu-west-2.amazonaws.com/'
   }

   async fetchChargeDevice(chargeDeviceId: string) {
      const response = await this.makeRequest({
         url: `${this.baseUrl}api/chargeDevices/${chargeDeviceId}`,
         method: 'get'
      });
      if (response.status !== 200) {
         throw Error(response.statusText);
      }
      return response.data as ChargeDevice;
   }

   async putChargeDevice(chargeDevice: ChargeDevice) {
      const response = await this.makeRequest({ 
         url: `${this.baseUrl}api/chargeDevices`, 
         method: 'put', 
         data: chargeDevice
      });
      if (response.status !== 200) {
         throw Error(response.statusText);
      }
      return response.data as ChargeDevice;
   }

   async chargeAtDevice(chargeDeviceId: string) {
      const response = await this.makeRequest({
         url: `${this.baseUrl}api/chargeDevices/${chargeDeviceId}/charge`,
         method: 'patch'
      });
      if (response.status !== 200) {
         throw Error(response.statusText)
      }
   }

   /* 
   Can access object parameters like this:
      object.param
   but also like this:
      object['param'] >>  axios['post'] is equivalent to axios.post

   Then once reference to function, call with ():
      axios[method](...args)
      async makeRequest({url, method, body }: RequestArgs) {
         return axios[method](url, body);
      }
      */

   async makeRequest({ url, method, data }: RequestArgs) {
      const token = await auth.currentUser?.getIdToken();

      return axios({
         method,
         url,
         headers: token ? {
            'access-token': token
         } : {},
         data
      });
   }

}