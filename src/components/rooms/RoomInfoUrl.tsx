import { useClipBoard } from '../../hooks/useClipboard';

import { Copy, CopyCheck } from 'lucide-react';

import Button from '../ui/Button';
import Input from '../ui/Input';

type Props = {
    url: string
}

export default function RoomInfoUrl(props: Props) {
    const {isCopied, copy} = useClipBoard();

    return (
        <div className='inline-flex items-center my-4'>
            <Input value={props.url} readOnly className='h-8' />

            <Button 
                onClick={() => copy(props.url)} 
                disabled={isCopied}
                className='ml-2'
                variant='success'
            >
                {
                    isCopied
                        ? <CopyCheck color="#fff" className='w-4 h-4' />
                        : <Copy color="#fff" className='w-4 h-4' />
                }
            </Button>
        </div>
    )
}