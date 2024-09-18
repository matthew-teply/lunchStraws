import { House } from 'lucide-react';

import Button from '../ui/Button';
import Jumbotron from '../ui/Jumbotron';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';

export default function RoomInvalid() {
    const navigate = useNavigate()

    return (
        <Jumbotron>
            <h1 className='text-danger text-4xl mb-12'>Room is invalid!</h1>

            <Button onClick={() => navigate(Paths.Home)}>
                <House color="#fff" className='w-4 h-4 mr-2' />
                Back to main screen
            </Button>
        </Jumbotron>
    )
}