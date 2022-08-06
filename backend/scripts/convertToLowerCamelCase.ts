import * as fs from 'fs';

import { ChargeDevice } from "../types/ChargeDevice";

const data: ChargeDevice[] = JSON.parse(fs.readFileSync('./json/fullChargeDevice.json', 'utf8'));

const renameKeys = (object: any): any => {
    if (Array.isArray(object)) {
        return object.map((obj: any) => renameKeys(obj));
      } else if (typeof object === "object" && object !== null) {
        return Object.entries(object).reduce(
          (acc, [key, value]) => ({ ...acc, [uncapitalise(key)]: renameKeys(value) }),
          {}
        );
      } else {
        return object;
      }
}

const uncapitalise = (string: string) => string[0].toLowerCase() + string.slice(1);

const updatedData = renameKeys(data);

console.log(updatedData[0]);

fs.writeFile('./json/lowerCaseChargeDevice.json', JSON.stringify(updatedData, null, 2),  err => {
    console.log(err)
});
