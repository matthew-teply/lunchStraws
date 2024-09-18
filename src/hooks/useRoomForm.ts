import { useState, FormEvent } from 'react';

export type RoomFormProps = {
    minRoomNameLength?: number,
    minPlayers?: number,
}

export const useRoomForm = ({ 
    minRoomNameLength = 3,
    minPlayers = 2,
}: RoomFormProps) => {
    const [roomName, setRoomName] = useState<string>('');
    const [players, setPlayers] = useState<number>(minPlayers);

    const [error, setError] = useState<string>();

    const validate = () => {
        if (roomName.length < minRoomNameLength) {
            setError(`Room name has to be atleast ${minRoomNameLength} characters long`);

            return false;
        } else if (players < minPlayers) {
            setError(`You have to set at least ${minPlayers} players`);

            return false;
        }

        return true;
    }

    const handleSubmit = (e: FormEvent, successCallback: () => void) => {
        e.preventDefault();

        if (validate() === true) {
            successCallback();
        }
    }

    return {
        roomName,
        setRoomName,
        players,
        setPlayers,
        error,
        handleSubmit,
        validate,
        minRoomNameLength,
        minPlayers,
    }
}