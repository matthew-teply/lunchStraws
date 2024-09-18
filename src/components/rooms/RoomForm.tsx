import { useNavigate } from 'react-router-dom';

import { useRoomForm } from '../../hooks/useRoomForm';
import { generateRoomLink } from '../../utils/roomNavigation';

import Button from '../ui/Button';
import Input from '../ui/Input';

export default function RoomForm() {
    const navigate = useNavigate();

    const { 
        handleSubmit,
        error, 
        roomName,
        setRoomName, 
        players, 
        setPlayers,
        minPlayers,
        maxRoomNameLength,
    } = useRoomForm({});

    const onSubmit = () => {
        const roomLink = generateRoomLink(
            roomName,
            players,
            1,
            [],
        )

        navigate(roomLink);
    }

    return (
        <form onSubmit={e => handleSubmit(e, onSubmit)}>
            <Input
                type='text' 
                maxLength={maxRoomNameLength}
                placeholder='Room name'
                onChange={e => setRoomName(e.currentTarget.value)}
                className='m-1'
            />

            <Input 
                type='number' 
                min={minPlayers}
                placeholder='Number of player'
                onChange={e => setPlayers(Number(e.currentTarget.value))}
                className='m-1'
            />

            <Button type='submit' className='m-1'>
                Create!
            </Button>

            {
                error && <p className='text-danger mt-4'>{error}</p>
            }
        </form>
    )
}