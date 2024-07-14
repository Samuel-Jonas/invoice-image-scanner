"use client";

import { signOut } from "next-auth/react";
import { IconPower } from "@tabler/icons-react";
import { handleGoogleSignOut } from "@/src/lib/auth/googleSignoutServerAction";

export default function SignOutButton() {
    return (
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block items-center">
                <button
                    className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                    onClick={() => handleGoogleSignOut()}
                    >
                    <IconPower className="w-6"/>
                    <div className="hidden md:block">Sair</div>
                </button>
        </div>
    );
}