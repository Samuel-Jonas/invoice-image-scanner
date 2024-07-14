import InvoiceRow from "./InvoiceRow";
import invoices from "../../data/constants/invoices";
import { cookies } from 'next/headers'
import fetchAccountByIdToken from "@/src/db/queries/account"
import fetchInvoicesByUserId from "@/src/db/queries/invoices"

export default async function InvoiceList() {

    const cookieStore = cookies()
    let sessionTokenCookie = cookieStore.get('authjs.session-token')
    let sessionToken = sessionTokenCookie?.value;

    const account = await fetchAccountByIdToken(sessionToken??"");

    const invoices = await fetchInvoicesByUserId(account?.userId??"");

    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-6 p-4 items-center gap-4 rounded-md bg-gray-100">
                <span>Id</span>
                <span>Descrição</span>
                <span>Valor</span>
                <span>Quantidade</span>
                <span>Total</span>
                <span>Data</span>
            </div>
            {
                invoices != null ? (
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
};