import RoomInfoUrl from './RoomInfoUrl';

type Props = {
    roomName: string,
    players: number,
    currentPlayer: number,
    url: string,
}

export default function RoomInfo(props: Props) {
    return (
        <section className='bg-black text-white px-5 py-4'>
            <p>Players: {props.players}</p>
            <p>Current player: {props.currentPlayer}</p>

            <RoomInfoUrl url={props.url} />
        </section>
    )
}