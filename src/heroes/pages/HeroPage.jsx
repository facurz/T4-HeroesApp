import React from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HeroesContext } from '../context/HeroesContext';

export const HeroPage = () => {
    const { getHeroById } = useContext(HeroesContext);
    const { heroId } = useParams();

    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    };

    return (
        <div className='imageBackground'>
            <div className='maskBackground'>
            <div className='row p-4'>
            <div className='col-4 animate__animated animate__fadeInLeft'>
                <img
                    src={hero.image}
                    alt={hero.name}
                    className='img-thumbnail'
                />
            </div>
            <div className='col-8'>
                <h3>{hero.name}</h3>
                <ul className='list-group list-group-flush '>
                    <li className='list-group-item bg-transparent'>
                        <b>Alter ego: </b>
                        {hero.alterEgos}
                    </li>
                    <li className='list-group-item bg-transparent'>
                        <b>Publisher: </b>
                        {hero.publisher}
                    </li>
                    <li className='list-group-item bg-transparent'>
                        <b>First Appareance: </b>
                        {hero.firstAppearance}
                    </li>
                </ul>
                <p>{hero.fullName}</p>

                <button
                    className='btn btn-outline-dark'
                    onClick={onNavigateBack}
                >
                    Back...
                </button>
            </div>
        </div>

        </div>

            </div>


        
    );
};
