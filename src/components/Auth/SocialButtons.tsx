import React, { useState } from 'react';
import { Box } from '@mui/material';
import appleIcon from './assets/Apple';
import googleIcon from './assets/Google';
import msIcon from './assets/Microsoft';
import SocialButton from './utils/SocialButton';

type SocialButtonsProps = {
    onClickEvent?: () => void;
};

const SocialButtons = ({ onClickEvent }: SocialButtonsProps) => {
    const [disabled, setDisabled] = useState(false);

    const handleAppleLogin = async () => {
        console.log('Apple login');

        await new Promise((r) => setTimeout(r, 2000));
        setDisabled(false);
        onClickEvent?.();
    };

    const handleGoogleLogin = async () => {
        console.log('Google login');

        await new Promise((r) => setTimeout(r, 2000));
        setDisabled(false);
        onClickEvent?.();
    };

    const handleMicrosoftLogin = async () => {
        console.log('Microsoft login');

        await new Promise((r) => setTimeout(r, 2000));
        setDisabled(false);
        onClickEvent?.();
    };

    return (
        <Box className="flex flex-col justify-center items-center p-2 w-full">
            <SocialButton
                name={'Apple'}
                icon={appleIcon()}
                disabled={disabled}
                setDisabled={setDisabled}
                onClickEvent={handleAppleLogin}
            />
            <SocialButton
                name={'Google'}
                icon={googleIcon()}
                disabled={disabled}
                setDisabled={setDisabled}
                onClickEvent={handleGoogleLogin}
            />
            <SocialButton
                name={'Microsoft'}
                icon={msIcon()}
                disabled={disabled}
                setDisabled={setDisabled}
                onClickEvent={handleMicrosoftLogin}
            />
        </Box>
    );
};

export default SocialButtons;
