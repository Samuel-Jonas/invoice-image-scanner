import type { User } from "@prisma/client";
import prisma from "../../lib/prisma"

export default async function fetchUserById(id: string): Promise<User | null>{
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });

    return user;
}