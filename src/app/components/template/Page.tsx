import Sidebar from "./Sidebar"

export interface PageProps {
    children: any
    className?: string
}

export default function Page(props: PageProps) {
    return (
        <div className="flex">
            <Sidebar/>
            <main className={`flex-1 p-7 ${props.className ?? ''}`}>{props.children}</main>
        </div>
    )
}