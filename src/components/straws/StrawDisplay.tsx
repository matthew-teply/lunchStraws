import Straw from './Straw'

type Props = {
    players: number,
    picked: number[],
    onPick: (index: number) => void
}

export default function StrawDisplay(props: Props) {
    return (
        <div className='inline-flex justify-center overflow-hidden'>
            {
                [...Array(props.players)].map((_, key) => {
                    return (
                        <Straw 
                            index={key} 
                            key={key}
                            isPicked={props.picked.indexOf(key) !== -1}
                            onClick={props.onPick}
                        />
                    )
                })
            }
        </div>
    )
}