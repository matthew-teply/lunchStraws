type Props = {
    roomName: string,
    players: number,
    currentPlayer: number,
}

export default function RoomInfo(props: Props) {
    return (
        <section className='bg-black text-white p-3'>
            <p>Players: {props.players}</p>
            <p>Current player: {props.currentPlayer}</p>
        </section>
    )
}