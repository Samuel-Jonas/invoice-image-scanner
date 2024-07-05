import invoices from "@/app/data/constants/invoices"
import InvoiceRow from "./InvoiceRow"


export default function  InvoiceList() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex p-4 items-center gap-10 rounded-md">
                <span>Id</span>
                <span>Nome</span>
                <span>Valor devido</span>
                <span>Taxa</span>
                <span>Total</span>
                <span>Data</span>
                <span>Detalhar</span>
            </div>
            {invoices.map((invoice) => {
                return <InvoiceRow key={invoice.id} invoice={invoice} />
            })}
        </div>
    )
}