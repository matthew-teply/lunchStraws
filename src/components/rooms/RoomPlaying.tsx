import StrawDisplay from '../straws/StrawDisplay';
import Jumbotron from '../ui/Jumbotron';
import RoomInfo from './RoomInfo';

type Props = {
    roomName: string
    players: number
    currentPlayer: number
    picked: number[]
    url: string
    pickStraw: (index: number) => void
}

export default function RoomPlaying(props: Props) {
    return (
        <Jumbotron>
            <h1 className='text-4xl mb-12 max-w-screen-sm'>{props.roomName}</h1>

            <StrawDisplay 
                players={props.players}
                picked={props.picked}
                onPick={props.pickStraw}
            />
            <RoomInfo 
                roomName={props.roomName!} 
                players={props.players} 
                currentPlayer={props.currentPlayer}
                url={props.url}
            />
        </Jumbotron>
    )
}