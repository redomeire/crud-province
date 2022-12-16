import React from 'react';

interface Props {
    isSidebarOpen: boolean,
    setIsSidebarOpen: Function
}

const TopAppBar = ({isSidebarOpen, setIsSidebarOpen}: Props) => {

    return (
        <div className="fixed top-0 w-full flex items-center p-5 justify-between bg- dark:bg-slate-800 shadow-lg z-40">
            <p className='text-2xl font-bold'>CRUD Province</p>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='md:hidden block'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    );
}

export default TopAppBar;