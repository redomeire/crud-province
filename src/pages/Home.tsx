import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import Button from "../components/button";
import CardProvince from "../components/home/CardProvince";
import Input from "../components/input";
import AdminLayout from "../components/layout/AdminLayout";
import Loader from "../components/loader";
import DashboardImage from "../images/dashboard.svg";

const Home = () => {
    const [datas, setDatas] = React.useState([]);
    const [maxId, setMaxId] = React.useState(0);
    const [name, setName] = React.useState('');
    const [searchValue, setSearchValue] = React.useState('');
    const [onHover, setOnHover] = React.useState(false);

    const fetchingData = () => {
        axios.get('http://34.101.172.140:3005/api/propinsi/list')
            .then((res) => {
                setDatas(res.data.data)

                const arrs = res.data.data.map((obj: { id: string }) => {
                    return parseInt(obj.id)
                })

                const max = Math.max(...arrs);
                setMaxId(max);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const addNewProvince = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        axios.post('http://34.101.172.140:3005/api/propinsi/add', {
            id: (maxId + 1).toString(),
            name: name
        })
            .then((res) => {
                Swal.fire({
                    title: 'Success add province',
                    icon: 'success',
                })
            })
            .catch((err) => {
                console.log('error : ' + err)
                Swal.fire({
                    title: err,
                    icon: 'success',
                })
            })
    }

    React.useEffect(() => {
        fetchingData()
    }, [])

    return (
        <AdminLayout>
            <div className="">
                <div className="flex md:flex-row flex-col items-center justify-around rounded-xl bg-purple-300 w-full min-h-[300px] p-3 md:text-left text-center">
                    <div>
                        <h1 className="text-2xl font-bold">Hello admin</h1>
                        <p>Welcome back, your dashboard is ready!</p>
                    </div>
                    <img src={DashboardImage} className="w-[300px]" alt="" />
                </div>
                <div>
                    <form onSubmit={addNewProvince} className="border p-3 rounded-lg my-10">
                        <p className="mb-4 font-bold text-xl">Add province</p>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-900 dark:text-white">Province Name</label>
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="w-full mt-2"
                                endIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>
                                }
                                required
                            />
                        </div>
                        <Button type="submit" className="bg-purple-500 text-white mt-1 text-sm md:w-fit w-full">Submit</Button>
                    </form>
                </div>
                <div className="min-h-[300px]">
                    <p className="mb-5 font-semibold">Cari Provinsi di sini</p>
                    <Input
                        placeholder="search"
                        type="text"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <p className="font-bold mt-10">Daftar Provinsi</p>
                    {
                        datas.length !== 0 ?
                            datas.filter((item: { name: string }) => {
                                if (item.name.toUpperCase().includes(searchValue.toUpperCase()))
                                    return item
                                else if (searchValue === '')
                                    return item
                            }).map((data: { id: string, name: string }, index) => {
                                return (
                                    <CardProvince 
                                    data={data}
                                    key={index}
                                    />
                                )
                            }) : (
                                <>
                                    <Loader />
                                    <Loader />
                                    <Loader />
                                    <Loader />
                                    <Loader />
                                    <Loader />
                                    <Loader />
                                    <Loader />
                                    <Loader />
                                </>
                            )
                    }
                </div>
            </div>
        </AdminLayout>
    );
}

export default Home;