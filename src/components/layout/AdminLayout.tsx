import Sidebar from "../sidebar";
import TopAppBar from "../sidebar/TopAppBar";
import React from 'react'

interface Props {
    children?: React.ReactNode,
    pageName?: string
}

const AdminLayout = ({
    children,
    pageName
} : Props) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

    return ( 
        <div className="font-poppins dark:bg-slate-700">
            <Sidebar 
            isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen}/>
            <TopAppBar 
            isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen}/>
            <div className="md:pl-[270px] px-5 pt-24">
                <div className="mb-5">
                    <h2 className="font-bold text-2xl dark:text-slate-300">{pageName || "Home"}</h2>
                    <p className="font-semibold dark:text-slate-300">Hello, welcome back</p>
                </div>
                <div className="min-h-screen">
                    {children}
                </div>
            </div>
        </div>
     );
}
 
export default AdminLayout;