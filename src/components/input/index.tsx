import React, { ChangeEventHandler } from "react";

interface Props {
    className?: string,
    endIcon?: React.ReactNode,
    placeholder?: string,
    type: 'text' | 'number' | 'file' | 'email' | 'password',
    required?: boolean,
    defaultValue?: any,
    disabled?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input = ({
    className, 
    endIcon,
    placeholder,
    type,
    required,
    defaultValue,
    disabled,
    onChange
}: Props) => {

    return ( 
        <div className="relative">
            <input 
            className={`${endIcon !== undefined && 'pr-12'} ${disabled && 'cursor-not-allowed bg-gray-100'} focus:placeholder:text-purple-300 placeholder:italic placeholder:text-sm rounded-lg p-2 outline-none ring-1 transition duration-200 ring-gray-300 focus:ring-purple-400 dark:bg-slate-600 dark:ring-slate-400 dark:text-white ${className}`}
            placeholder={placeholder}
            type={type}
            required={required}
            onChange={onChange}
            defaultValue={defaultValue}
            disabled={disabled}
            />
            <div className={`${endIcon !== undefined ? 'absolute' : 'hidden'} right-0 top-[8px] bg-slate-200 dark:bg-purple-700 p-2 rounded-tr-lg rounded-br-lg`}>
                {endIcon}
            </div>
        </div>
     );
}
 
export default Input;