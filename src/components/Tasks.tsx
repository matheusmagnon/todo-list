import { ReactNode } from "react";

interface TasksProps {
    children: ReactNode;
}

export function Tasks({ children }: TasksProps) {
    return (
        <div className='mt-8 flex flex-col gap-y-2'>
            {children}
        </div>

    )
}