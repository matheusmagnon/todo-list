import * as Dialog from '@radix-ui/react-dialog';
import { DetailsTaskModal } from './Modal/DetailsTaskModal';
import { Plus } from 'phosphor-react';
import { task } from '../context/TodoListContext';

interface SeeMoreProps {
    task: task;
}
export function SeeMoreButton({ task }: SeeMoreProps) {

    return (
        <Dialog.Root>
            <Dialog.Trigger type='button' className=" text-gray-100 
        flex gap-1 items-center text-base" >
                <Plus size={20} />
                <span className='whitespace-nowrap'>Ver mais</span>
            </Dialog.Trigger>
            <DetailsTaskModal task={task} />
        </Dialog.Root >
    )
}