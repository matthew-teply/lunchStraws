import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'success' | 'danger';

type Props = {
    variant?: ButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props: Props) {
    const { variant = 'primary' } = props

    return (
        <button 
            {...props}
            className={`
                bg-${variant} 
                rounded 
                px-4 
                py-2 
                text-white

                disabled:opacity-80

                ${props.className}
            `}
        >
            {props.children}
        </button>
    )
}