import Header from "../partials/Header"

type Props = {
    children: React.ReactNode
}

export default function DefaultLayout(props: Props) {
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}