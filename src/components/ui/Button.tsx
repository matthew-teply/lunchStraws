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
                inline-flex
                bg-${variant} 
                rounded 
                px-4 
                py-2 
                text-white
                items-center
                justify-center
                transition-all

                hover:brightness-90

                disabled:opacity-80
                disabled:brightness-100

                ${props.className}
            `}
        >
            {props.children}
        </button>
    )
}