import { PlusCircle, Trash } from 'phosphor-react'
import logo from '../src/assets/logo.png'

function App() {
  return (
    //container
    <div className="w-full flex flex-col items-center bg-indigo-800 h-screen">
      <div className="w-full flex flex-col py-10 items-center bg-indigo-100">
        <img src={logo} className='w-72'>
        </img>
      </div>
      {/* //content */}
      <div className="flex flex-col w-7/12 ">
        <form className="w-full space-x-2 flex justify-between -mt-8 ">
          <input type="text" placeholder="Adicione uma nova tarefa"
            className="rounded-lg w-11/12 p-4 font-bold border-2 placeholder:text-indigo-500" />
          <button type='button'
            className="text-gray-100 bg-green-800 p-2 rounded-xl flex gap-2
             items-center text-lg font-bold">
            Criar
            <PlusCircle size={32} weight='bold' />
          </button>
        </form>
        <div className='flex flex-wrap justify-between mt-8 font-semibold text-indigo-200'>
          <div className='flex gap-2'>
            <span>Tarefas criadas</span>
            <div className='bg-indigo-950 rounded-full p-0.5 flex w-6 font-bold justify-center'>
              9
            </div>
          </div>
          <div className='flex gap-2'>
            <span>Concluídas</span>
            <div className='bg-indigo-950 rounded-full p-0.5 flex w-6 font-bold justify-center'>2</div>
            de
            <div className='bg-indigo-950 rounded-full p-0.5 flex w-6 font-bold justify-center'>10</div>
          </div>
        </div>
        <div className='mt-8 flex flex-col gap-y-2'>
          <div className=' flex items-center justify-between w-full text-indigo-50 rounded-lg p-3 bg-indigo-950'>
            <div>
              <input
                className=" cursor-pointer rounded-full accent-indigo-300 focus:accent-indigo-300"
                type="checkbox"
                id="accept"
              />
              <span className='pl-4'>Fazer algo</span>
            </div>
            <Trash size={25} className='hover:text-red-500 cursor-pointer' />
          </div>
          <div className=' flex items-center justify-between w-full text-indigo-50 rounded-lg p-3 bg-indigo-950'>
            <div>
              <input
                className=" cursor-pointer rounded-full accent-indigo-300 focus:accent-indigo-300"
                type="checkbox"
                id="accept"
              />
              <span className='pl-4'>Fazer algo</span>
            </div>
            <Trash size={25} className='hover:text-red-500 cursor-pointer' />
          </div>
          <div className=' flex items-center justify-between w-full text-indigo-50 rounded-lg p-3 bg-indigo-950'>
            <div>
              <input
                className=" cursor-pointer rounded-full accent-indigo-300 focus:accent-indigo-300"
                type="checkbox"
                id="accept"
              />
              <span className='pl-4'>Fazer algo</span>
            </div>
            <Trash size={25} className='hover:text-red-500 cursor-pointer' />
          </div>
        </div>
        {/* <div className='mt-12 border-t-2 rounded-lg border-indigo-400 '>
          <div>Sem nda</div>
        </div> */}
      </div>
    </div>
  )
}

export default App
