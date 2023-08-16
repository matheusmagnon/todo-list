import logo from '../../src/assets/logo.png'

export function Header() {
    return (
        <div className="w-full flex flex-col py-10 items-center bg-indigo-100">
            <img src={logo} className='w-72'>
            </img>
        </div>
    )
}