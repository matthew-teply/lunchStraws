import { HTMLAttributes } from 'react';

export default function Jumbotron(props: HTMLAttributes<HTMLElement>) {
    return (
        <section className='flex flex-col bg-gray-200 p-12 text-center'>
            {props.children}
        </section>
    )
}