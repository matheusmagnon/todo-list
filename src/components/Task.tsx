import { Trash } from "phosphor-react";
import { TodoListContext, task } from "../context/TodoListContext";
import { useContext, useRef } from "react";

import { SeeMoreButton } from "./SeeMoreButton";

interface TaskProps {
    task: task;
}

export function Task({ task }: TaskProps) {

    const { changeStatusTask, deleteTask } = useContext(TodoListContext)

    const unCheckedTask = 'appearance-none cursor-pointer w-4 h-4 p-2 rounded-full border-2 border-indigo-300 hover:border-indigo-500'

    const checkedTask = 'appearance-none cursor-pointer w-4 h-4 p-2  rounded-full border-2 border-indigo-500 bg-checked hover:bg-checkedHover bg-center bg-no-repeat'

    const handleStatusTask = (task: task) => {
        changeStatusTask(task)
    }

    return (
        <div className='flex items-center justify-between w-full text-indigo-50 rounded-lg p-3 
        bg-indigo-950 break-words'>
            <div className="flex items-center overflow-x-auto  w-11/12">
                <input
                    className={task.isCompleted ? checkedTask : unCheckedTask}
                    type="checkbox"
                    onChange={() => handleStatusTask(task)
                    }
                />
                <p className={task.isCompleted ? ' pl-4 line-through text-gray-400' : 'pl-4'}>
                    {task.title}
                </p>
            </div>
            <SeeMoreButton task={task} />
            <div>
                <Trash onClick={() => deleteTask(task)} size={25} className='hover:text-red-500 cursor-pointer ml-6' />
            </div>
        </div>
    )
}