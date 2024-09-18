import Jumbotron from '../components/Jumbotron';

export default function Home() {
    return (
        <Jumbotron>
            <h1 className='text-4xl'>Welcome to Lunch Straw</h1>
            <p className='mt-2'>Create a room, let your coworkers pick, and maybe pay for the lunch (if you lose)</p>
        </Jumbotron>
    )
}