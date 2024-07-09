import { signOut } from "next-auth/react";
import SidebarItem from "./SidebarItem";
import { IconHome, IconInvoice, IconPower, IconScan, IconUpload, IconUser } from '@tabler/icons-react';

export default function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-900 h-screen">
            <nav className="flex flex-col gap-2 py-7">
                <SidebarItem icon={IconHome} title="Início" url="/"/>
                <SidebarItem icon={IconUser} title="Conta" url="account"/>
                <SidebarItem icon={IconInvoice} title="Extratos" url="invoices"/>
                <SidebarItem icon={IconUpload} title="Carregar" url="send-invoice" />
            </nav>
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block">
                <form 
                    action={async () => {
                        'use server';
                        await signOut();
                    }}
                >
                    <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <IconPower className="w-6"/>
                        <div className="hidden md:block">Sair</div>
                    </button>
                </form>
            </div>
        </aside>
    );
}