import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../routes/Home';

import Header from './partials/Header';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
]);

export default function App() {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    )
}