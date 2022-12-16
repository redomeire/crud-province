import { useNavigate } from 'react-router-dom'
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { ThemeContext } from '../../App';

interface Props {
    isSidebarOpen: boolean,
    setIsSidebarOpen: Function
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {
    const navigate = useNavigate();
    const { isDark, setIsDark } = useContext(ThemeContext);

    const handleLogout = () => {
        localStorage.removeItem('authorization')

        Swal.fire({
            title: 'Success logout',
            icon: 'success'
        })

        setTimeout(() => {
            navigate('/login')
        }, 1500);
    }

    const sidebarData = [
        {
            name: 'Home',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>,
            action: () => navigate('/'),
            href: '/'
        },
        {
            name: 'Toggle dark mode',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>,
            action: () => { setIsDark(!isDark) }
        },
        {
            name: 'Logout',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>,
            action: handleLogout
        },
    ]

    return (
        <>
        <div className={`font-poppins z-50 fixed top-0 min-h-screen bg-white dark:bg-slate-800 p-4 md:min-w-[250px] shadow-lg transition duration-200 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0 min-w-full' : 'translate-x-[-800px]'}`}>
            <div className='flex items-center justify-between'>
                <a href='/'><h1 className="text-2xl font-bold dark:text-white">CRUD Province</h1></a>
                <button className='md:hidden' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <ul className='mt-10'>
                {
                    sidebarData.map((data, index) => {
                        return (
                            <li onClick={data.action} key={index} className={`${window.location.pathname === data.href ? 'bg-purple-400 dark:bg-slate-100 dark:text-black text-white' : 'dark:text-white dark:hover:bg-slate-100 dark:hover:text-slate-800'} flex items-center justify-start p-3 rounded-xl my-4 cursor-pointer hover:bg-purple-300 hover:text-white transition duration-500`}>
                                {data.icon}
                                <p className='ml-5'>{data.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    );
}

export default Sidebar;