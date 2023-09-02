import * as Dialog from '@radix-ui/react-dialog';
import { DetailsTaskModal } from './Modal/DetailsTaskModal';
import { Plus } from 'phosphor-react';
export function SeeMoreButton() {
    return (
        <Dialog.Root>
            <Dialog.Trigger >
                <button type='button' className=" text-gray-100 
        flex gap-1 items-center text-lg font-bold">
                    <Plus size={20} weight='bold' />
                    Ver mais
                </button>
            </Dialog.Trigger>
            <DetailsTaskModal />
        </Dialog.Root >
    )
}