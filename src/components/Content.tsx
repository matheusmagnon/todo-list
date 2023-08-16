import { ReactNode } from "react";

interface ContentProps {
    children: ReactNode;
}

export function Content({ children }: ContentProps) {
    return (
        <div className="flex flex-col lg:w-7/12 lg:p-0 p-2 ">
            {children}
        </div>

    )
}