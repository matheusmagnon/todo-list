import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export function Container({ children }: ContainerProps) {
    return (
        <div className="w-full flex flex-col items-center bg-indigo-800 min-h-screen ">
            {children}
        </div>
    )
}