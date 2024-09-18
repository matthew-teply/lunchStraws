import Jumbotron from '../components/ui/Jumbotron';
import RoomForm from '../components/rooms/RoomForm';

export default function Home() {
    return (
        <Jumbotron>
            <h1 className='text-4xl'>Welcome to Lunch Straw</h1>
            <p className='mt-2'>Create a room, let your coworkers pick, and maybe pay for the lunch (if you lose)</p>

            <div className='bg-white rounded border-1 border-solid border-gray-400 p-6 mt-10 text-center'>
                <h1 className='text-2xl mb-5'>Create a room!</h1>
                <RoomForm />
            </div>
        </Jumbotron>
    )
}