import { PlusCircle } from "phosphor-react";
import { useRef } from "react";

import * as Dialog from '@radix-ui/react-dialog';
import { NewTaskModal } from "./Modal/NewTaskModal";

export function Button() {

    // const  refTitleTask = useRef<HTMLInputElement | null>(null)

    // const handleTitleTask = () => {
    //     if (refNewTask?.current?.value == '') {
    //         alert('Preencha o campo para adicionar uma tarefa')
    //     }
    //     else { 
    // createTask(refNewTask?.current?.value)
    // console.log(refTitleTask);

    // }
    // }
    return (
        //
        <Dialog.Root>
            <Dialog.Trigger className="disabled:cursor-not-allowed disabled:opacity-80 text-gray-100 bg-green-800 p-2 rounded-xl
                flex gap-2 items-center text-lg font-bold>
                {/* <button type='button' ">
                Criar
                <PlusCircle size={32} weight='bold' />
                {/* </button> */}
            </Dialog.Trigger>
            <NewTaskModal />
        </Dialog.Root >

    )
}