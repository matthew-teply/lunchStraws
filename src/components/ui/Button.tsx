import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'success' | 'danger';

type Props = {
    variant?: ButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props: Props) {
    const { variant = 'success' } = props

    return (
        <button 
            className={`bg-${variant} rounded px-4 py-2 text-white`}
            {...props}
        >
            {props.children}
        </button>
    )
}