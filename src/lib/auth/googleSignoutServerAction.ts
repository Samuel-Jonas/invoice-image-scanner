"use server";

import { signOut } from "../auth/authConfig";

export const handleGoogleSignOut = async () => {
    try {
        await signOut()     
    } catch (err) {
        throw err;
    }
};