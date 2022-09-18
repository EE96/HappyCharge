import { v4 as uuid } from "uuid";
import { expect } from 'chai'
import axios from "axios";

import { authFrontend, firebaseSignUp } from "../../helpers/firebaseFrontend";
import UserClient from "../../dynamo/UserClient";
import { User } from "../../types/User";
import { auth } from "../../helpers/firebase";

describe('signUp', function () {
    let userId: string;
    let email: string;
    let token: string;
    
    beforeEach(async function () {
        email = `test${uuid()}@testing.com`;
        await firebaseSignUp(email, "pppppp");
        token = await authFrontend.currentUser?.getIdToken()!;
        const decodedToken = await auth.verifyIdToken(token);
        const { uid } = decodedToken;
        userId = uid;
    })

    afterEach(async function () {
        await auth.deleteUser(userId)
    })

    it('should create a user with firebase before adding them to aws database', async function () {
        const response = await axios.post(
            "http://localhost:3100/api/sign-up",
            { email },
            {
                headers: token ? {
                    'access-token': token
                } : undefined,
            }
        );

        const user: User = response.data

        const check = await UserClient.fetch(user.userId)

        expect(user).deep.equal(check)
    });
});