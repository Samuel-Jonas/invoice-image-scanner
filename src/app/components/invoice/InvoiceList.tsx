import InvoiceRow from "./InvoiceRow";
import { fetchInvoices, fetchInvoicesByUserId } from "@/src/db/queries/invoices"
import { Invoice } from "@prisma/client";
import { cookies } from "next/headers";

export default async function InvoiceList() {

    try {

        let userId = cookies().get("userId");

        let invoices: Invoice[] | null = null

        if (userId?.value === undefined){
            invoices = await fetchInvoicesByUserId(userId?.value??"");
        } else {
            invoices = await fetchInvoices();
        }
    
        return (
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-6 p-4 items-center gap-4 rounded-md bg-gray-600">
                    <span>Id</span>
                    <span>Descrição</span>
                    <span>Valor</span>
                    <span>Quantidade</span>
                    <span>Total</span>
                    <span>Data</span>
                </div>
                { 
                    invoices != null || invoices != undefined ? (
                        invoices.map((invoice) => (
                            <InvoiceRow key={invoice.id} invoice={invoice} />
                        ))
                    ) : (
                        <div className="p-4 text-center">
                            Nenhum item encontrado
                        </div>
                    )
                }
            </div>
        );
    } catch (error) {
        console.log(error);
    }
};