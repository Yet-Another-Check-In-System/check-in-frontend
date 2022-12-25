import React from 'react';
import { Box, CircularProgress, Divider, Typography } from '@mui/material';
import { SiteData } from '../../loaders/SiteLoader';
import { Await, useAsyncValue, useLoaderData } from 'react-router-dom';
import { SocialButtons } from '../Auth';

const LargeScreenCheckinAuth = () => {
    const { siteData } = useLoaderData() as any;

    const Spinner = () => {
        return (
            <Box className="flex flex-col justify-center items-center">
                <CircularProgress size={64} color={'secondary'} />
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

                <Box className="absolute bottom-1 w-1/2">
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

    return (
        <Box
            id="screen-large"
            className="hidden lg:flex flex-row h-screen w-screen justify-center items-center"
        >
            <Box
                id="leftBox"
                className="flex flex-row justify-center items-center h-full w-1/2 bg-fireOpal text-mintCream"
            >
                <React.Suspense fallback={<Spinner />}>
                    <Await resolve={siteData}>
                        <Text />
                    </Await>
                </React.Suspense>
            </Box>
            <Box
                id="rightBox"
                className="flex flex-col justify-center items-center h-full w-1/2 bg-mintCream text-black"
            >
                <Box className="flex flex-col justify-center items-center w-3/5">
                    <Typography variant="h6" className="p-1 text-center">
                        Login using one of the providers
                    </Typography>
                    <SocialButtons />
                </Box>
            </Box>
        </Box>
    );
};

export default LargeScreenCheckinAuth;
