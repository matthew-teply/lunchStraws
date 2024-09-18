import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css'

import { Paths } from './paths';

import Home from './routes/Home';
import Room from './routes/Room';
import DefaultLayout from './components/layouts/DefaultLayout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route
            path={Paths.Home}
            element={<Home />}
          />
          <Route
            path={Paths.Room}
            element={<Room />}
          />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  </StrictMode>,
)
