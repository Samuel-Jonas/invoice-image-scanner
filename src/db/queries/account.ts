import type { Account } from "@prisma/client";
import prisma from "../../lib/prisma"

export default async function fetchAccountByIdToken(id_token: string): Promise<Account | null> {

    const account = await prisma.account.findFirst({
        where: {
            id_token
        }
    });

    return account;
}