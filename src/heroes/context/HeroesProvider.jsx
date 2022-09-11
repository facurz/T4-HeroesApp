import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import { HeroesContext } from './HeroesContext';

export const HeroesProvider = ({ children }) => {
    const { data, isLoading } = useFetch(
        'https://akabab.github.io/superhero-api/api/all.json'
    );
    const { counter, decrement, increment, reset } = useCounter(1);

    const getHeroesByPublishers = publisher => {
        if (data !== null)
            return data.filter(hero => hero.publisher === publisher);
    };

    const getHeroById = id => {
        if (data !== null) return data.find(hero => hero.id === parseInt(id));
    };

    const getHeroByName = (name = '') => {
        name = name.toLowerCase().trim();

        if (name.length === 0) return [];
        if (data !== null)
            return data.filter(hero => hero.name.toLowerCase().includes(name));
    };

    const getPublishers = () => {
        if (data !== null)
            return [...new Set(data.map(hero => hero.publisher))];
    };

    return (
        <HeroesContext.Provider
            value={{
                getPublishers,
                getHeroByName,
                getHeroById,
                getHeroesByPublishers,
                isLoading,
                counter,
                decrement,
                increment,
                reset,
            }}
        >
            {children}
        </HeroesContext.Provider>
    );
};
