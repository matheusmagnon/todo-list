import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState
} from "react";
import { api } from '../lib/axios'

interface CreateTaskType {
    title?: string;
    describe?: string,
}
export interface task {
    title?: string;
    description?: string | undefined,
    id?: string
    isCompleted?: boolean,
}

interface TodoListContextType {
    getTasks: () => void
    createCurrentTitleTask: (title: string) => void;
    createCurrentDescribeTask: (title: string) => void;
    describeTask: string
    titleTask: string
    tasks: task[];
    createTask: () => void;
    changeStatusTask: (task: task) => void;
    deleteTask: (taskToDelete: task) => void;
    setTasks: Dispatch<SetStateAction<task[]>>

}
interface TodoListProviderProps {
    children: ReactNode;
}

export const TodoListContext = createContext({} as TodoListContextType);

export function TodoListProvider({ children }: TodoListProviderProps) {
    const [tasks, setTasks] = useState<task[]>([])
    const [titleTask, setTitleTask] = useState<string>('')
    const [describeTask, setDescribeTask] = useState<string>('')
    const createCurrentTitleTask = (title: string) => setTitleTask(title)
    const createCurrentDescribeTask = (title: string) => setDescribeTask(title)

    const getTasks = async () => {
        api.get<task[]>(`/tasks`).then((tasks) => {
            setTasks(tasks.data.reverse())
        })
            .catch(error => console.log(error));
    };

    const createTask = () => {
        api.post('/tasks', {
            title: titleTask,
            description: describeTask
        }).then(() => { getTasks() })
            .catch(error => console.log(error)
            )
        setTitleTask('')
        setDescribeTask('')
    }

    const changeStatusTask = (taskTochange: task) => {
        const { title, description, isCompleted } = taskTochange

        api.patch<task[]>(`/tasks/${taskTochange.id}`, {
            title,
            description,
            isCompleted: !isCompleted
        }).then(() => getTasks())
            .catch(error => console.log(error)
            )
    }

    const deleteTask = (taskToDelete: task) => {
        api.delete<task[]>(`/tasks/${taskToDelete.id}`)
            .then(() => getTasks()
                .catch(error => console.log(error))
            );
    }
    return (
        <TodoListContext.Provider value={{
            setTasks,
            getTasks,
            titleTask,
            createCurrentTitleTask,
            describeTask,
            createCurrentDescribeTask,
            tasks,
            createTask,
            changeStatusTask,
            deleteTask
        }}>
            {children}
        </TodoListContext.Provider>
    )
}