import { Dispatch, LegacyRef, ReactNode, SetStateAction, createContext, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

export interface task {
    id?: string;
    content: string | undefined,
    isCompleted: boolean,
}

// interface RefType extends HTMLInputElement {
//     refNewTask: { current: { value: string } }
// }

interface TodoListContextType {
    tasks: task[];
    createTask: (task: string) => void;
    isDisabled: boolean;
    setIsDisabled: Dispatch<SetStateAction<boolean>>;
    content: string | undefined;
    setContent: Dispatch<SetStateAction<string>>;
    refNewTask: LegacyRef<HTMLInputElement> | undefined
    changeStatusTask: (task: task) => void;
    deleteTask: (taskToDelete: task) => void;

}
interface TodoListProviderProps {
    children: ReactNode;
}

export const TodoListContext = createContext({} as TodoListContextType);

export function TodoListProvider({ children }: TodoListProviderProps) {
    const [tasks, setTasks] = useState<task[]>([])
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [content, setContent] = useState<string>('')
    const refNewTask = useRef<HTMLInputElement | null>(null)
    const createTask = (contentTask: string) => {
        const newTask: task = {
            content: contentTask,
            id: uuidv4(),
            isCompleted: false
        }

        setTasks([...tasks, newTask])
        setContent('')
        setIsDisabled(true)
    }

    const changeStatusTask = (taskTochange: task) => {
        const newTask = tasks.map(task => {
            if (task.id === taskTochange.id) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        });
        setTasks(newTask);
    }


    const deleteTask = (taskToDelete: task) => {
        const tasksWithoutDeleteOne = tasks.filter((task) => {
            return task !== taskToDelete;
        });
        setTasks(tasksWithoutDeleteOne);
    }
    return (
        <TodoListContext.Provider value={{
            tasks,
            createTask,
            isDisabled,
            setIsDisabled,
            content,
            setContent,
            refNewTask,
            changeStatusTask,
            deleteTask
        }}>
            {children}
        </TodoListContext.Provider>
    )
}