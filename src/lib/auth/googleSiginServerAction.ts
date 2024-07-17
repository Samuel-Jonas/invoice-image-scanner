"use server";

import { signIn } from "@/src/lib/auth/authConfig";

export const handleGoogleSignIn = async () => {
    try {

        await signIn("google", { redirectTo: "/" })

    } catch (err) {
        throw err;
    }
};