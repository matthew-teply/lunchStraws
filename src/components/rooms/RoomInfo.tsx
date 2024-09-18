import { useClipBoard } from '../../hooks/useClipboard';

import { Copy, CopyCheck } from 'lucide-react';

import Button from '../ui/Button';
import Input from '../ui/Input'

type Props = {
    roomName: string,
    players: number,
    currentPlayer: number,
    url: string,
}

export default function RoomInfo(props: Props) {
    const {isCopied, copy} = useClipBoard();

    return (
        <section className='bg-black text-white px-5 py-4'>
            <p>Players: {props.players}</p>
            <p>Current player: {props.currentPlayer}</p>

            <div className='flex items-center my-4'>
                <Input value={props.url} readOnly className='h-8' />
                <Button 
                    onClick={() => copy(props.url)} 
                    disabled={isCopied}
                    className='ml-2'
                >
                    {
                        isCopied
                            ? <CopyCheck color="#fff" className='w-4 h-4' />
                            : <Copy color="#fff" className='w-4 h-4' />
                    }
                </Button>
            </div>
        </section>
    )
}