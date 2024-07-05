import InvoiceList from "@/app/components/invoice/InvoiceList";
import Page from "@/app/components/template/Page";
import PageTitle from "@/app/components/template/PageTitle";
import { IconFileInvoice } from "@tabler/icons-react";

export default function InvoicePage() {
    return (
        <Page className="flex flex-col gap-10">
            <PageTitle icon={IconFileInvoice} mainTitle="Meus Extratos" underTitle="Visualize todos os extratos por arquivo escaneado"/>
            <InvoiceList />
        </Page>
    )
}