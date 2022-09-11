import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { HeroCard } from '../components/HeroCard';
import { HeroesContext } from '../context/HeroesContext';
import { Button, Box, TextField, Typography } from '@mui/material';

export const SearchPage = () => {
    const { getHeroByName, data } = useContext(HeroesContext);
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q,
    });

    const onSearchSubmit = event => {
        event.preventDefault();
        if (searchText.trim().length <= 1) return;
        console.log(searchText);

        navigate(`?q=${searchText}`);

        console.log(q);
    };

    return (
        <div className='imageBackground'>
            <div className='maskBackground p-4'>
                <div className='row'>
                    <div className='col-4'>
                        <Typography variant='h4' component='h4' color='primary'>Search</Typography>
                        <hr />
                        <Box component='form' onSubmit={onSearchSubmit}>
                            <TextField
                                fullWidth
                                type='search'
                                label='Search field'
                                name='searchText'
                                autoComplete='off'
                                value={searchText}
                                onChange={onInputChange}
                            />
                            <Button
                                sx={{mt: 3}}
                                onClick={onSearchSubmit}
                                variant='outlined'
                                fullWidth
                                component='button'
                            >
                                Search
                            </Button>
                        </Box>
                    </div>

                    <div className='col-8'>
                    <Typography variant='h4' component='h4' color='primary'>Results</Typography>
                        <hr />

                        <div
                            className='alert alert-primary'
                            style={{ display: q === '' ? '' : 'none' }}
                        >
                            Search a hero
                        </div>

                        {!heroes.length && q !== '' && (
                            <div className='alert alert-danger'>
                                No hero with <b> {q} </b>
                            </div>
                        )}
                        <div className='row row-cols-lg-3'>

                        {heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
