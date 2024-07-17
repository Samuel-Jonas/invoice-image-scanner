"use server";

import { auth } from "@/src/lib/auth/authConfig";
import { cookies } from 'next/headers'
import fetchAccountByIdToken from "@/src/db/queries/account";

export const checkIsAuthenticated = async () => {
    const session = await auth();

    if(session) {

        const cookieStore = cookies();
        let sessionTokenCookie = cookieStore.get('authjs.session-token');
        let sessionToken = sessionTokenCookie?.value;
        console.log("SessionToken: ", sessionToken);
        const account = await fetchAccountByIdToken(sessionToken??"");
        console.log("Account: ", account);
        cookies().set("userId", account?.userId??"");

        return true;
    }

    return false;
};