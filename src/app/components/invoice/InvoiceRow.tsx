import Invoice from "@/common/model/Invoice";
import { IconDetails, IconFile, IconFileInfo, IconMenu } from "@tabler/icons-react";

export interface InvoiceRowProps {
    invoice: Invoice;
}

export default function InvoiceRow(props: InvoiceRowProps) {
    const { invoice } = props;
    return (
        <div className="flex p-4 bg-zinc-900 items-center gap-10 rounded-md">
            <span>#{invoice.id}</span>
            <span>{invoice.user.name}</span>
            <span>{invoice.amountDue}</span>
            <span>{invoice.tax}</span>
            <span>{invoice.totalAmount}</span>
            <span>{invoice.createdAt.toLocaleDateString('pt-BR')}</span>
            <IconFileInfo />
        </div>
    )
};