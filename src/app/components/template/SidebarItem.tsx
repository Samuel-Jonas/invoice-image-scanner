import { ElementType } from "react"
import Link from "next/link"

export interface SidebarItemProps {
    icon: ElementType
    title: string
    url: string
}

export default function SidebarItem(props: SidebarItemProps) {
    return <Link href={props.url} className="flex gap-2 px-8 py-2 hover:bg-black">
        <props.icon className="text-zinc-200" size={24}/>
        <span className="text-zinc-200">{props.title}</span>
    </Link>
}