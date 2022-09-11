import React, { useContext} from 'react';
import { HeroesContext } from '../context/HeroesContext';
import { HeroCard } from './HeroCard';
import { Pagination } from './Pagination';

export const HeroList = ({ publisher }) => {
    const { getHeroesByPublishers, isLoading, counter, decrement, increment } = useContext(HeroesContext);
    const heroes = getHeroesByPublishers(publisher);

    const maxHeroes = 20;
    const lastPage = Math.ceil(heroes?.length / maxHeroes);

    return (
        <div className='container'>
            {isLoading ? (
                <h4>Cargando...</h4>
            ) : (
                <>

                    <Pagination
                        page={counter}
                        decrement={decrement}
                        increment={increment}
                        lastPage={lastPage}
                    />
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                        {heroes
                            ?.slice(
                                (counter - 1) * maxHeroes,
                                (counter - 1) * maxHeroes + maxHeroes
                            )
                            .map(hero => (
                                <HeroCard key={hero.id} {...hero} />
                            ))}
                    </div>
                </>
            )}
        </div>
    );
};
