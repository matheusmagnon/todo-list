import * as Dialog from '@radix-ui/react-dialog';
import { XCircle } from 'phosphor-react';
import { useContext } from 'react'
import { task, TodoListContext } from '../../context/TodoListContext';

export function DetailsTaskModal(task: task) {
    console.log(task);

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
                <form className='flex flex-col'>
                    <div className=' flex flex-col space-y-2 '>
                        <h3>Titulo da tarefa:</h3>
                        <p>{task.title}</p>
                        {/* <input className='placeholder:text-indigo-950 bg-indigo-50 p-1 rounded-md'
                            type="text"
                            placeholder="Titulo da tarefa"
                            required
                            value={titleTask}
                            onChange={(e) => { createCurrentTitleTask(e.target.value) }}
                        /> */}

                        {/* <input className='placeholder:text-indigo-950 bg-indigo-50 p-1 rounded-md'
                            type="text"
                            placeholder="Descrição da tarefa"
                            required
                            onChange={(e) => { createCurrentDescribeTask(e.target.value) }}
                        /> */}
                    </div>
                    {/* <Dialog.Root> */}
                    <Dialog.Close >
                        {/* <button onClick={handleCreateTask} className='mt-4 text-gray-100 bg-green-800 rounded-lg p-2'>
                            Cadastrar tarefa
                        </button> */}
                    </Dialog.Close>
                    {/* </Dialog.Root> */}
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}