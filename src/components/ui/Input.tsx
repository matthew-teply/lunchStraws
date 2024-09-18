import { HTMLProps } from 'react';

export default function Input(props: HTMLProps<HTMLInputElement>) {
    return (
        <input 
            {...props}
            className={`
                rounded 
                border 
                border-solid 
                border-gray-400 
                p-2

                read-only:text-black

                ${props.className}
            `}
        />
    )
}