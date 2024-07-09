import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod';
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import User from '@/common/model/User'

async function getUser(email: string): Promise<User | null> {
    const prisma = new PrismaClient();

    try {
        await prisma.$connect();
        const user = await prisma.user.findUnique({where: {email}});
        return user === null 
            ? null 
            : {
                id: user.id.toString(), 
                email: user.email,
                name: user.name,
                password: user.password,
                isActive:  user.isActive,
                createdAt: user.createdAt
            };
    } catch (err) {
        console.log(err);
        throw new Error("Falha ao encontrar o usuário");
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                .object({email: z.string().email(), password: z.string().min(6)})
                .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);

                    if (!user) return null;

                    const passMatch = await bcrypt.compare(password, user.password);

                    if (passMatch) return user;
                }

                console.log("Credenciais inválidas");
                return null;
            },
        }),
    ],
});