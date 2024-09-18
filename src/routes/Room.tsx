import { useRoom } from '../hooks/useRoom';

import RoomFinished from '../components/rooms/RoomFinished';
import RoomPlaying from '../components/rooms/RoomPlaying';
import RoomInvalid from '../components/rooms/RoomInvalid';

export default function Room() {
    const {
        roomName,
        players,
        currentPlayer,
        picked,
        isValid,
        pickStraw,
        shortestStraw,
        url,
        restart,
    } = useRoom();

    if (!isValid) {
        return <RoomInvalid />
    }

    if (shortestStraw !== null) {
        return (
            <RoomFinished
                roomName={roomName ?? ''}
                shortestStraw={shortestStraw}
                restart={restart}
            />
        );
    }

    return (
        <RoomPlaying
            roomName={roomName!}
            players={players!}
            currentPlayer={currentPlayer!}
            picked={picked}
            url={url}
            pickStraw={pickStraw}
        />
    )
}