import type { Invoice } from "@prisma/client";
import prisma from "../../lib/prisma"

export async function fetchInvoicesByUserId(userId: string): Promise<Invoice[] | null> {

    const invoices = await prisma.invoice.findMany({
        where: {
            userId
        },
        orderBy: [
            {
                createdAt: "asc",
            }
        ]
    });

    return invoices;
}

export async function fetchInvoices(): Promise<Invoice[] | null> {
    return await prisma.invoice.findMany({orderBy: [{createdAt: "asc"}]});
}