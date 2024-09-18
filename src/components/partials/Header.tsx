import { Link } from 'react-router-dom';

import { Paths } from '../../paths';

export default function Header() {
    return (
        <header className="bg-black p-4 flex justify-center">
            <Link to={Paths.Home}>
                <h1 className="text-white text-2xl">Lunch Straw</h1>
            </Link>
        </header>
    )
}