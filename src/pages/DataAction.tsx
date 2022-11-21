import React, { SetStateAction } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import AdminLayout from "../components/layout/AdminLayout";

const DataAction = () => {
    let { id } = useParams();
    console.log(id)
    const [data, setData] = React.useState<SetStateAction<any>>({});

    const fetchingData = () => {
        axios.get(`http://34.101.172.140:3005/api/propinsi/viewedit/?id_prov=${id}`)
            .then((res) => {
                setData(res.data.data[0])
                // console.log(res.data.data[0]);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    React.useEffect(() => {
        fetchingData();
    }, [])


    return (
        <AdminLayout>
            <form>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input defaultValue={data.id} type="email" id="email" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input defaultValue={data.name} type='text' className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </AdminLayout>
    );
}

export default DataAction;