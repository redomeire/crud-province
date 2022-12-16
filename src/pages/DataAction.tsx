import React, { SetStateAction } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import AdminLayout from "../components/layout/AdminLayout";
import Swal from "sweetalert2";
import Input from "../components/input";
import Button from "../components/button";

const DataAction = () => {
    let { id } = useParams();
    const [data, setData] = React.useState<SetStateAction<any>>({});
    const [name, setName] = React.useState('');
    const navigate = useNavigate();

    const fetchingData = () => {
        axios.get(`http://34.101.172.140:3005/api/propinsi/viewedit/?id_prov=${id}`)
            .then((res) => {
                setData(res.data.data[0])
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const editData = () => {
        axios.post(`http://34.101.172.140:3005/api/propinsi/update?id_prov=${id}`, {
            name: name
        })
            .then((res) => {
                console.log(res);

                Swal.fire({
                    title: 'success edit',
                    icon: 'success'
                })

                setTimeout(() => {
                    navigate('/')
                }, 1500);
            })
            .catch((err) => {
                console.log(err);

                Swal.fire({
                    title: 'error edit : ' + err,
                    icon: 'error'
                })
            })
    }

    const deleteData = () => {
        axios({
            method: 'POST',
            url: 'http://34.101.172.140:3005/api/propinsi/delete',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': '*/*'
            },
            data: {
                "id_prov": id, // This is the body part
            }
        })
            .then((res) => {
                Swal.fire({
                    title: 'success delete',
                    icon: 'success'
                })

                setTimeout(() => {
                    navigate('/')
                }, 1500);
            })
            .catch((err) => {
                Swal.fire({
                    title: 'error delete : ' + err,
                    icon: 'error'
                })
            })
    }

    React.useEffect(() => {
        fetchingData();
    }, [])


    return (
        <AdminLayout pageName="Edit Province">
            <form>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-300">ID</label>
                    <Input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        defaultValue={data.id}
                        required
                        className="w-full"
                        disabled
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-300 ">Province name</label>
                    <Input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        defaultValue={data.name}
                        className="w-full"
                    />
                </div>
                <div className="flex items-center md:flex-row flex-col w-full">
                    <Button
                        type="button"
                        onClick={editData}
                        className="bg-purple-400 text-white px-5 md:w-fit w-full"
                    >Edit</Button>
                    <Button
                        type="button"
                        onClick={deleteData}
                        className="bg-purple-400 text-white md:ml-2 px-5 md:w-fit w-full md:mt-0 mt-5"
                    >Delete</Button>
                </div>
            </form>
        </AdminLayout>
    );
}

export default DataAction;