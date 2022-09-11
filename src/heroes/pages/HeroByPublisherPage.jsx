import React from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeroList } from '../components/HeroList';
import { HeroesContext } from '../context/HeroesContext';
import queryString from 'query-string';
import { useState } from 'react';

//MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/system';
import { blue } from '@mui/material/colors';

export const HeroByPublisherPage = () => {
    const { getPublishers, isLoading, reset } = useContext(HeroesContext);

    const navigate = useNavigate();
    const location = useLocation();
    const { q = 'Marvel Comics' } = queryString.parse(location.search);
    const [selectValue, setSelectValue] = useState(q);

    const publishers = getPublishers();

    const handleSelectOption = e => {
        const value = e.target.value;
        setSelectValue(value);
        navigate(`?q=${value}`);
        reset();
    };

    return (
        <div className='imageBackground'>
            <div className='maskBackground'>
                {isLoading ? (
                    <h4>Loading...</h4>
                ) : (
                    <>
                        <Stack alignItems='center'>
                            <Box mt={4} sx={{ minWidth: 120, width: 500 }}>
                                <FormControl fullWidth>
                                    <InputLabel id='demo-simple-select-label'>
                                        Select Publisher
                                    </InputLabel>
                                    <Select
                                        color='primary'
                                        labelId='demo-simple-select-label'
                                        id='demo-simple-select'
                                        value={q}
                                        label='Select Publisher'
                                        onChange={e => handleSelectOption(e)}
                                    >
                                        {publishers.map(publish => (
                                            <MenuItem
                                                key={publish}
                                                value={publish}
                                            >
                                                {publish}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>

                            <HeroList publisher={selectValue}> </HeroList>
                        </Stack>
                    </>
                )}
            </div>
        </div>
    );
};
