import InvoiceList from "@/src/app/components/invoice/InvoiceList";
import Page from "@/src/app/components/template/Page";
import PageTitle from "@/src/app/components/template/PageTitle";
import { IconFileInvoice } from "@tabler/icons-react";

export default function InvoicePage() {
    return (
        <Page className="flex flex-col gap-10">
            <PageTitle icon={IconFileInvoice} mainTitle="Minhas Faturas" underTitle="Visualize todos as linhas escaneadas"/>
            <InvoiceList />
        </Page>
    )
}