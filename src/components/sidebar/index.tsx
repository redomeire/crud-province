import { useNavigate } from 'react-router-dom'
import React from 'react';

interface Props {
    isSidebarOpen: boolean,
    setIsSidebarOpen: Function
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {
    const navigate = useNavigate();

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
            name: 'Data Action',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>,
            action: () => navigate('/province'),
            href: '/province'
        },
        {
            name: 'Logout',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>,
            action: () => {
                localStorage.removeItem('auth')
                window.location.reload();
            }
        },
    ]

    return (
        <div className={`z-50 fixed top-0 min-h-screen bg-white p-3 md:min-w-[250px] shadow-lg transition duration-200 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0 min-w-full' : 'translate-x-[-800px]'}`}>
            <div className='flex items-center justify-between'>
                <h1 className="text-2xl font-bold">CRUD Province</h1>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <ul className='mt-10'>
                {
                    sidebarData.map((data, index) => {
                        return (
                            <li onClick={data.action} key={index} className={`${window.location.pathname === data.href ? 'bg-purple-400 text-white' : ''} flex items-center justify-start p-3 rounded-xl my-4 cursor-pointer hover:bg-purple-300 hover:text-white transition duration-500`}>
                                {data.icon}
                                <p className='ml-5'>{data.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Sidebar;