import type { Account } from "@prisma/client";
import prisma from "../../lib/prisma"

export default async function fetchAccountByIdToken(tokenId: string): Promise<Account | null> {

    const account = await prisma.account.findFirst({
        where: {
            id_token: tokenId
        }
    });

    const newAccount = await prisma.account.findMany({
    });

    console.log(newAccount);

    return account;
}