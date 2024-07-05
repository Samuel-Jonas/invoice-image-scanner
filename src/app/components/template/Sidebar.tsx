import SidebarItem from "./SidebarItem";
import { IconHome, IconInvoice, IconScan, IconUpload, IconUser } from '@tabler/icons-react';

export default function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-900 h-screen">
            <nav className="flex flex-col gap-2 py-7">
                <SidebarItem icon={IconHome} title="Início" url="/"/>
                <SidebarItem icon={IconUser} title="Conta" url="account"/>
                <SidebarItem icon={IconInvoice} title="Extratos" url="invoices"/>
                <SidebarItem icon={IconUpload} title="Carregar" url="send-invoice" />
            </nav>
        </aside>
    )
}