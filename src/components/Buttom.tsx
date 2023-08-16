import { PlusCircle } from "phosphor-react";
import { ReactNode, useContext } from "react";
import { TodoListContext } from "../context/TodoListContext";


export function Buttom() {
    const { refNewTask, isDisabled, createTask } = useContext(TodoListContext)

    const handleAddTask = () => {
        refNewTask?.current?.value && createTask(refNewTask.current.value)
    }
    return (
        <button type='button' disabled={isDisabled} onClick={() => handleAddTask()}
            className="disabled:cursor-not-allowed disabled:opacity-80 text-gray-100 bg-green-800 p-2 rounded-xl flex gap-2 items-center text-lg font-bold">
            Criar
            <PlusCircle size={32} weight='bold' />
        </button>
    )
}