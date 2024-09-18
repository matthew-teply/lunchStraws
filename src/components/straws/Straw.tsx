type Props = {
    index: number,
    isPicked: boolean,
    onClick: (index: number) => void
}

const getModifierClasses = (isPicked: boolean): string[] => {
    if (isPicked) {
        return [
            'bg-slate-100',
            'translate-y-4'
        ]
    }

    return [
        'bg-slate-400',
        'hover:translate-y-4',
    ]
}

export default function Straw(props: Props) {
    const modifierClasses = getModifierClasses(props.isPicked);

    return (
        <div 
            className={`
                inline-flex
                justify-center 
                min-w-6 
                min-h-40 
                p-1 
                mx-4
                cursor-pointer
                transition-all

                ${modifierClasses.join(' ')}
            `}
            onClick={() => !props.isPicked ? props.onClick(props.index) : null}
        >
            {props.index + 1}
        </div>
    );
}