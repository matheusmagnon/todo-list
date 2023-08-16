import { task } from "../context/TodoListContext"

interface StatusTasksProps {
    tasks: task[]
}
export function StatusTasks({ tasks }: StatusTasksProps) {
    const totalTasksCompleted = tasks.filter(task => task.isCompleted == true).length
    const totalTasks = tasks.length

    return (
        <div className='flex flex-wrap justify-between mt-8 font-semibold text-indigo-200 gap-y-6'>
            <div className='flex gap-2'>
                <span>Tarefas criadas</span>
                <div className='bg-indigo-950 rounded-full p-0.5 flex w-6 font-bold justify-center'>
                    {totalTasks}
                </div>
            </div>
            <div className='flex gap-2'>
                <span>Concluídas</span>
                <div className='bg-indigo-950 rounded-full p-0.5 flex w-6 font-bold justify-center'>
                    {totalTasksCompleted}
                </div>
                de
                <div className='bg-indigo-950 rounded-full p-0.5 flex w-6 font-bold justify-center'>
                    {totalTasks}
                </div>
            </div>
        </div>
    )
}