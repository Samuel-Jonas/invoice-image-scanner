import { ElementType } from "react";

export interface TitlePros {
    icon: ElementType
    mainTitle: string
    underTitle: string
}

export default function PageTitle(props: TitlePros){
    return (
        <div className="flex gap-5">
            <props.icon size={58} stroke={1}/>
            <div className="flex flex-col">
                <h1 className="text-2xl font-black">{props.mainTitle}</h1>
                <h2 className="text-zinc-400">{props.underTitle}</h2>
            </div>
        </div>
    )
}