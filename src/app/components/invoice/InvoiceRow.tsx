import type { Invoice } from "@prisma/client";

export interface InvoiceRowProps {
    invoice: Invoice;
}

export default function InvoiceRow(props: InvoiceRowProps) {
    const { invoice } = props;
    return (
        <div className="grid grid-cols-6 p-4 items-center gap-4 rounded-md bg-gray-100">
            <span>#{invoice.id}</span>
            <span>{invoice.description}</span>
            <span>{invoice.price.toString()}</span>
            <span>{invoice.quantity}</span>
            <span>{invoice.total.toString()}</span>
            <span>{invoice.createdAt.toLocaleDateString('pt-BR')}</span>
        </div>
    )
};