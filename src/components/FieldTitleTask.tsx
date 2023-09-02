import { ReactNode, useContext } from "react";
import { TodoListContext } from "../context/TodoListContext";

export function FieldTitleTask() {
    const { titleTask, createCurrentTitleTask } = useContext(TodoListContext)

    const handleRefNewTask = (titleTask: string) => {
        createCurrentTitleTask(titleTask)
    }

    return (
        <input type="text" value={titleTask} placeholder="Adicione uma nova tarefa"
            onChange={(e) => { handleRefNewTask(e.target.value) }}
            className="rounded-lg w-11/12 p-4 font-bold border-2 text-indigo-900 placeholder:text-indigo-500"
        />
    )
}