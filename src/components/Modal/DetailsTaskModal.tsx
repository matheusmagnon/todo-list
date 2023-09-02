import * as Dialog from '@radix-ui/react-dialog';
import { XCircle } from 'phosphor-react';
import { useContext } from 'react'
import { task, TodoListContext } from '../../context/TodoListContext';

interface DetailsTaskProps {
    task: task;
}
export function DetailsTaskModal({ task }: DetailsTaskProps) {

    return (
        <Dialog.Portal className="align-middle">
            <Dialog.Overlay className="fixed inset-0 bg-black/40" />
            <Dialog.Content className="fixed  w-80 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-md bg-indigo-100 p-4 shadow border-solid border-2 border-indigo-400">
                <div className='flex justify-between items-center pb-4'>
                    <Dialog.Title className="text-xl text-indigo-950 font-bold">Detalhes da tarefa</Dialog.Title>
                    <Dialog.Close>
                        <XCircle size={28} weight="fill" className='text-red-800 font-bold' />
                    </Dialog.Close>
                </div>
                <div className=' flex flex-col space-y-2 '>
                    <div>
                        <h3>Titulo da tarefa:</h3>
                        <p className='font-bold'>{task.title}</p>
                    </div>
                    <div>
                        <h3>Tarefa detalhada:</h3>
                        <p className='font-bold'>{task.description}</p>
                    </div>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    )
}