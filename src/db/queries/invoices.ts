import type { Invoice } from "@prisma/client";
import prisma from "../../lib/prisma"

export default async function fetchInvoicesByUserId(userEmail: string): Promise<Invoice[] | null> {

    const user = await prisma.user.findUnique({
        where: {
            email: userEmail
        }
    });

    if (!user) {
        return null;
    }

    const invoices = await prisma.invoice.findMany({
        where: {
            userId: user.id
        },
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });

    return invoices;
}