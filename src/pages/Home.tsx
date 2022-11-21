import axios from "axios";
import React from "react";
import AdminLayout from "../components/layout/AdminLayout";
import DashboardImage from "../images/dashboard.svg";

const Home = () => {
    const [datas, setDatas] = React.useState([]);

    const fetchingData = () => {
        axios.get('http://34.101.172.140:3005/api/propinsi/list')
            .then((res) => {
                setDatas(res.data.data)
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    React.useEffect(() => {
        fetchingData()
    }, [])

    return (
        <AdminLayout>
            <div className="">
                <div className="flex md:flex-row flex-col items-center justify-around rounded-xl bg-purple-300 w-full min-h-[300px]">
                    <div>
                        <h1 className="text-2xl font-bold">Hello admin</h1>
                        <p>Welcome back, your dashboard is ready!</p>
                    </div>
                    <img src={DashboardImage} className="w-[300px]" alt="" />
                </div>
                <div>
                    <p className="font-bold mt-10">Daftar Provinsi</p>
                    {
                        datas.length !== 0 &&
                        datas.map((data: { id:string, name: string }, index) => {
                            return (
                                <a href={`/province/${data.id}`}>
                                    <div className="bg-white rounded-lg shadow p-4 my-2" key={index}>
                                        <p className="uppercase font-semibold mb-1 text-lg">{data.name}</p>
                                        <p className="text-md text-gray-500">click item to view details</p>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </AdminLayout>
    );
}

export default Home;