import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { generateRoomLink } from '../utils/roomNavigation';

export const useRoom = () => {
    const url = window.location.href;

    const { name } = useParams();
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const [roomName, setRoomName] = useState<string | null>(null);
    const [players, setPlayers] = useState<number | null>(null);
    const [currentPlayer, setCurrentPlayer] = useState<number | null>(null);
    const [picked, setPicked] = useState<number[]>([]);

    const [shortestStraw, setShortestStraw] = useState<number | null>(null);

    const [isValid, setIsValid] = useState<boolean>(true);

    const pickStraw = (index: number) => {
        if (isValid) {
            let shortestStraw = undefined;

            if (currentPlayer! + 1 > players!) {
                shortestStraw = Math.floor(Math.random() * (players!) + 1)
            }

            const nextStageLink = generateRoomLink(
                roomName!,
                players!,
                currentPlayer! + 1,
                [...picked, index],
                shortestStraw,
            )

            navigate(nextStageLink);
        }
    }

    const restart = () => {
        if (isValid) {
            const restartLink = generateRoomLink(
                roomName!,
                players!,
                1,
                [],
            )

            navigate(restartLink);
        }
    }

    useEffect(() => {
        const shortestStrawSearchParam = searchParams.get('shortestStraw');
        const playerSearchParam = searchParams.get('players');
        const currentPlayerSearchParam = searchParams.get('currentPlayer');

        setRoomName(name ?? null);
        setPlayers(playerSearchParam !== null ? Number(playerSearchParam) : null);
        setCurrentPlayer(currentPlayerSearchParam !== null ? Number(currentPlayerSearchParam) : null);
        setPicked(JSON.parse(searchParams.get('picked') ?? '[]'))
        setShortestStraw(shortestStrawSearchParam !== null ? Number(shortestStrawSearchParam) : null);
    }, [searchParams, name]);

    useEffect(() => {
        setIsValid(
            roomName !== null && 
            players !== null && 
            currentPlayer !== null && 
            picked !== null
        )
    }, [currentPlayer, picked, players, roomName]);

    return {
        roomName,
        players,
        currentPlayer,
        picked,
        isValid,
        pickStraw,
        shortestStraw,
        url,
        restart,
    }
}