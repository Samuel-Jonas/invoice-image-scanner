import type { User } from "@prisma/client";
import prisma from "../../lib/prisma"

export default async function fetchUserByEmail(email: string): Promise<User | null>{
    const user = await prisma.user.findFirst({
        where: {
            email
        }
    });

    return user;
}