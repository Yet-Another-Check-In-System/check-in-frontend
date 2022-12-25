import React, { useState } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';

const SocialButton = ({
    name,
    icon,
    disabled,
    setDisabled,
    onClickEvent
}: {
    name: string;
    icon: JSX.Element;
    disabled: boolean;
    setDisabled: (arg0: boolean) => void;
    onClickEvent: () => void;
}) => {
    const [showSpinner, setShowSpinner] = useState(false);

    return (
        <Button
            color="secondary"
            size="large"
            variant="contained"
            sx={{
                width: '100%',
                height: 50,
                m: 0.5,
                borderRadius: 2,
                border: 1,
                borderColor: '#000000'
            }}
            onClick={(e) => {
                e.preventDefault();
                setDisabled(true);
                setShowSpinner(true);
                onClickEvent();

                setTimeout(() => setShowSpinner(false), 2000);
            }}
            disabled={disabled}
            startIcon={icon}
        >
            {showSpinner && (
                <CircularProgress
                    color="secondary"
                    size={25}
                    sx={{ position: 'absolute' }}
                />
            )}
            <Typography className="text-left m-1 font-roboto">
                Sign in with {name}
            </Typography>
        </Button>
    );
};

export default SocialButton;
