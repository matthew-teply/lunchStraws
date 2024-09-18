import { generatePath } from 'react-router-dom';
import { Paths } from '../paths';

export const generateRoomLink = (
    roomName: string,
    players: number,
    currentPlayer: number,
    picked: number[],
    shortestStraw?: number,
) => {
    const path = generatePath(Paths.Room, {
        name: encodeURI(roomName),
    });

    const searchParams = new URLSearchParams();

    searchParams.set('players', String(players));
    searchParams.set('currentPlayer', String(currentPlayer));
    searchParams.set('picked', JSON.stringify(picked));

    if (shortestStraw !== undefined) {
        searchParams.set('shortestStraw', String(shortestStraw))
    }

    return `${path}?${searchParams.toString()}`;
}