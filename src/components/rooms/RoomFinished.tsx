import { RotateCcw } from 'lucide-react';

import Button from '../ui/Button';
import Jumbotron from '../ui/Jumbotron';

type Props = {
    roomName: string,
    shortestStraw: number,
    restart: () => void
}

export default function RoomFinished(props: Props) {
    return (
        <Jumbotron>
            <h1 className='text-4xl mb-12'>{props.roomName}</h1>
            <h1 className='text-danger text-4xl mb-12'>Player {props.shortestStraw} is buying lunch!</h1>

            <Button onClick={props.restart}>
                <RotateCcw color="#fff" className='w-4 h-4 mr-2' />
                Restart
            </Button>
        </Jumbotron>
    );
}