import admin from "firebase-admin"
import type {  ServiceAccount } from "firebase-admin/lib/credential";

import firebaseAccount from "../json/firebaseAccountKey.json";

const app = admin.initializeApp({
  credential: admin.credential.cert(firebaseAccount as ServiceAccount)
})

export const auth = admin.auth(app)


