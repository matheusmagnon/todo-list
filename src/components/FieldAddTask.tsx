import { ReactNode, useContext } from "react";
import { TodoListContext } from "../context/TodoListContext";

export function FieldAddTask() {
    const { content, refNewTask, setContent, setIsDisabled } = useContext(TodoListContext)

    const handleRefNewTask = (contentTask: string) => {
        setContent(contentTask)
        contentTask.length > 0
            ? setIsDisabled(false)
            : setIsDisabled(true)
    }

    return (
        <input type="text" value={content} placeholder="Adicione uma nova tarefa"
            ref={refNewTask} onChange={(e) => { handleRefNewTask(e.target.value) }}
            className="rounded-lg w-11/12 p-4 font-bold border-2 text-indigo-900 placeholder:text-indigo-500" />
    )
}