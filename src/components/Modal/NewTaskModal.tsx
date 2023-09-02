import * as Dialog from '@radix-ui/react-dialog';
import { XCircle } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react'
import { TodoListContext } from '../../context/TodoListContext';

export function NewTaskModal() {
    const { createCurrentTitleTask, createCurrentDescribeTask, createTask, titleTask, describeTask } = useContext(TodoListContext)
    const [isDisabled, setIsDisabled] = useState(true)

    const handleCreateTask = () => createTask()

    useEffect(() => {
        console.log(titleTask.length);
        console.log(describeTask.length);

        if (titleTask.length == 0 || describeTask.length == 0) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }

    }, [titleTask, describeTask])

    return (
        <Dialog.Portal className="align-middle">
            <Dialog.Overlay className="fixed inset-0 bg-black/40" />
            <Dialog.Content className="fixed  w-80 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-md bg-indigo-100 p-4 shadow border-solid border-2 border-indigo-400">
                <div className='flex justify-between items-center pb-4'>
                    <Dialog.Title className="text-xl text-indigo-950 font-bold">Cadastro de tarefa</Dialog.Title>
                    <Dialog.Close>
                        <XCircle size={28} weight="fill" className='text-red-800 font-bold' />
                    </Dialog.Close>
                </div>
                <form className='flex flex-col'>
                    <div className=' flex flex-col space-y-2 '>
                        <input className='placeholder:text-indigo-950 bg-indigo-50 p-1 rounded-md'
                            type="text"
                            placeholder="Titulo da tarefa"
                            required
                            value={titleTask}
                            onChange={(e) => { createCurrentTitleTask(e.target.value) }}
                        />

                        <input className='placeholder:text-indigo-950 bg-indigo-50 p-1 rounded-md'
                            type="text"
                            placeholder="Descrição da tarefa"
                            required
                            value={describeTask}
                            onChange={(e) => { createCurrentDescribeTask(e.target.value) }}
                        />
                    </div>
                    {/* <Dialog.Root> */}
                    <button type="button" onClick={() => handleCreateTask()} disabled={isDisabled} className='disabled:cursor-not-allowed disabled:opacity-60 mt-4 text-gray-100 bg-green-800 rounded-lg w-24 p-2'>
                        {/* disabled={isSubmitting} */}
                        Cadastrar
                    </button>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}