import {
    SkipNextOutlined, SkipPreviousOutlined
} from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import React from 'react';

export const Pagination = ({ page, increment, decrement, lastPage }) => {
    const prevPage = () => {
        if (page > 1) {
            decrement();
        }
    };

    const nextPage = () => {
        if (page < lastPage) {
            increment();
        }
    };

    return (
        <>
            <div className='container d-flex m-4 justify-content-center align-items-center'>
                <IconButton
                    onClick={prevPage}
                    size='large'
                    color='primary'
                    aria-label='prevPage'
                >
                    <SkipPreviousOutlined fontSize='medium' />
                </IconButton>

                <div className='page mx-2'>
                    <Typography variant='h6' component='p' color='primary'>
                        Page {page} of {lastPage}
                    </Typography>
                </div>
                
                <IconButton
                    onClick={nextPage}
                    size='large'
                    color='primary'
                    aria-label='nextPage'
                >
                    <SkipNextOutlined fontSize='medium' />
                </IconButton>
            </div>
        </>
    );
};
