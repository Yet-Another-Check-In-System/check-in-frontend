import React from 'react';
import { Box, CircularProgress, Divider, Typography } from '@mui/material';
import { Await, useAsyncValue, useLoaderData } from 'react-router-dom';

import { SiteData } from '../../loaders/SiteLoader';
import { SocialButtons } from '../Auth';

const SmallScreenCheckinAuth = () => {
    const { siteData } = useLoaderData() as any;

    const Spinner = () => {
        return (
            <Box className="flex flex-col justify-center items-center">
                <CircularProgress size={64} color="secondary" />
            </Box>
        );
    };

    const Text = () => {
        const resolvedReviews = useAsyncValue() as SiteData;

        return (
            <>
                <Typography variant="h5" className="w-4/5 p-2 text-center">
                    Check in to {resolvedReviews.name}
                </Typography>

                <Box className="absolute bottom-1 w-screen">
                    <Box className="flex flex-col justify-center items-center">
                        <Divider variant="middle" sx={{ width: '75%', m: 1 }} />

                        <Typography variant="body1" className="p-1 text-center">
                            Service provided by YAC.IS
                        </Typography>
                    </Box>
                </Box>
            </>
        );
    };

    const loginMethodSelectedEvent = (): void => {
        console.log('Click');
    };

    return (
        <Box
            id="screen-mobile"
            className="flex lg:hidden flex-col h-screen w-screen justify-center items-center bg-fireOpal text-mintCream"
        >
            <React.Suspense fallback={<Spinner />}>
                <Await resolve={siteData}>
                    <Text />
                    <Divider variant="middle" sx={{ width: '60%', m: 1 }} />
                    <Box className="flex flex-col justify-center items-center w-4/5 md:w-3/5">
                        <Typography variant="h6" className="p-1 text-center">
                            Login using one of the providers
                        </Typography>
                        <SocialButtons
                            onClickEvent={loginMethodSelectedEvent}
                        />
                    </Box>
                </Await>
            </React.Suspense>
        </Box>
    );
};

export default SmallScreenCheckinAuth;
