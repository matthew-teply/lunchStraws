import { useRoom } from '../hooks/useRoom';

import Jumbotron from '../components/ui/Jumbotron';
import RoomInfo from '../components/rooms/RoomInfo';
import StrawDisplay from '../components/straws/StrawDisplay';

export default function Room() {
    const {
        roomName,
        players,
        currentPlayer,
        picked,
        isValid,
        pickStraw,
        shortestStraw,
    } = useRoom();

    if (!isValid) {
        return <p>Room is not valid!</p>;
    }

    if (shortestStraw !== null) {
        return (
            <Jumbotron>
                <h1 className='text-4xl mb-12'>{roomName}</h1>
                <h1 className='text-danger text-4xl mb-12'>Player {shortestStraw} has the shortest straw!</h1>
            </Jumbotron>
        )
    }

    return (
        <Jumbotron>
            <h1 className='text-4xl mb-12'>{roomName}</h1>

            <StrawDisplay 
                players={Number(players)}
                picked={picked}
                onPick={pickStraw}
            />
            <RoomInfo 
                roomName={roomName!} 
                players={Number(players!)} 
                currentPlayer={Number(currentPlayer!)}
            />
        </Jumbotron>
    )
}