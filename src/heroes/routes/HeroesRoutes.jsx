import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components/NavBar';
import { HeroPage } from '../pages/HeroPage';
import { SearchPage } from '../pages/SearchPage';
import { HeroesProvider } from '../context/HeroesProvider';
import { HeroByPublisherPage } from '../pages/HeroByPublisherPage';


export const HeroesRoutes = () => {
    return (
        <div>
            <HeroesProvider>
                <Navbar />

                <div >
                    <Routes>
                        <Route path='select' element={<HeroByPublisherPage />} />
                        <Route path='search' element={<SearchPage />} />
                        <Route path='hero/:heroId' element={<HeroPage />} />

                        <Route path='/*' element={<Navigate to='/select' />} />
                    </Routes>
                </div>
            </HeroesProvider>
        </div>
    );
};
