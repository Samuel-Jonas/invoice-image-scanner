import Page from "@/app/components/template/Page";
import PageTitle from "@/app/components/template/PageTitle";
import { IconCloudUpload } from "@tabler/icons-react";

export default function AccountPage() {
    return (
        <Page>
            <PageTitle icon={IconCloudUpload} mainTitle="Carregar arquivo" underTitle="Carregue seus extratos para serem"/>
        </Page>
    )
}