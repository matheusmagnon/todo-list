import {
    ReactNode,
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
        const { data } = await api.get(`/tasks`);
        setTasks(data.reverse());
    };

    const createTask = () => {
        api.post('/tasks', {
            title: titleTask,
            description: describeTask
        })

        setTitleTask('')
        getTasks()
    }

    const changeStatusTask = (taskTochange: task) => {
        // const newTask = tasks.map(task => {
        //     if (task.id === taskTochange.id) {
        //         return { ...task, isCompleted: !task.isCompleted };
        //     }
        //     return task;
        // });
        // setTasks(newTask);
    }


    const deleteTask = (taskToDelete: task) => {

        api.delete(`/tasks/${taskToDelete.id}`)
        // getTasks()
        // const tasksWithoutDeleteOne = tasks.filter((task) => {
        //     return task !== taskToDelete;
        // });
        // setTasks(tasksWithoutDeleteOne);
    }
    return (
        <TodoListContext.Provider value={{
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