import { HTMLAttributes } from 'react';

export default function Jumbotron(props: HTMLAttributes<HTMLElement>) {
    return (
        <section className='bg-gray-200 p-12 text-center'>
            <div className="inline-flex flex-col content-center justify-center">
                {props.children}
            </div>
        </section>
    )
}