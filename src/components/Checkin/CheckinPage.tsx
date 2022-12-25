import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { checkin } from '../../services/checkinService';

const CheckinPage = () => {
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        checkin()
            .then(() => setShowSpinner(false))
            .catch(() => {
                throw new Response('Internal Server Error', {
                    status: 500,
                    statusText: 'Internal Server Error'
                });
            });
    });

    return (
        <>
            {showSpinner && (
                <Box className="flex flex-col justify-center items-center h-screen w-screen bg-fireOpal text-mintCream">
                    <CircularProgress size={128} color="secondary" />
                    <Typography variant="h5" className="w-4/5 p-10 text-center">
                        Checking you in...
                    </Typography>
                </Box>
            )}
            {!showSpinner && (
                <Box className="flex flex-col justify-center items-center h-screen w-screen bg-fireOpal text-mintCream">
                    <CheckCircleOutlineIcon
                        color="secondary"
                        sx={{ width: 64, height: 64, m: 1 }}
                    />
                    <Typography variant="h5" className="w-4/5 p-2 text-center">
                        Successfully checked in!
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default CheckinPage;
