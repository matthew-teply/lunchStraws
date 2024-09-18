import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../routes/Home';

import Header from './partials/Header';
import Room from '../routes/Room';
import { Paths } from '../paths';

const router = createBrowserRouter([
    {
        path: Paths.Home,
        element: <Home />,
    },
    {
        path: Paths.Room,
        element: <Room />,
    }
]);

export default function App() {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    )
}