import React, { useEffect, useState } from 'react';

export const useFetch = url => {
    const [state, setstate] = useState({
        data: null,
        isLoading: true,
    });

    const getFetch = async () => {

        const resp = await fetch(url);
        const data = await resp.json();

        const heroes = data.map(hero => ({
            id: hero.id,
            name: hero.name,
            image: hero.images.lg,
            firstAppearance: hero.biography.firstAppearance,
            alterEgos: hero.biography.alterEgos,
            fullName: hero.biography.fullName,
            publisher: hero.biography.publisher,
    
    
        })); 

        setstate({
            data: heroes,
            isLoading: false,
        });

    };

    useEffect(() => {
        getFetch();
    }, []);

    return {
        data: state.data,
        isLoading: state.isLoading,
    };
};
