import React from "react";

interface Props {
    data: { 
        id: string,
        name: string
    },
}

const CardProvince = ({
    data,
}: Props) => {
    const [onHover, setOnHover] = React.useState(false);

    return (
        <a href={`/province/${data.id}`} className="">
            <div onMouseOut={() => setOnHover(false)} onMouseOver={() => setOnHover(true)} className="bg-white rounded-lg border p-4 my-2 transition duration-300 hover:shadow-lg hover:bg-purple-400 hover:text-white">
                <p className="uppercase font-semibold mb-1 text-lg">{data.name}</p>
                <p className={`${onHover ? 'text-white' : 'text-gray-500'} transition duration-200 text-md `}>click item to view details</p>
            </div>
        </a>
    );
}

export default CardProvince;