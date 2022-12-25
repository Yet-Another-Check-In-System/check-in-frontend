import React, { useEffect, useState } from 'react';

import { userIsLoggedIn } from '../../utils/userUtilities';
import CheckinPage from './CheckinPage';
import LargeScreenCheckinAuth from './LargeScreenCheckinAuth';
import SmallScreenCheckinAuth from './SmallScreenCheckinAuth';

const Checkin = () => {
    const [showAuth, setShowAuth] = useState(false);

    /*
    useEffect(() => {
        const isLoggedIn = userIsLoggedIn();
        setShowAuth(!isLoggedIn);
    }, [setShowAuth]);
    */

    if (showAuth) {
        // Returns LargeScreenCheckin for screens over 1024px
        // and SmallScreenCheckin for others
        return (
            <>
                <LargeScreenCheckinAuth />
                <SmallScreenCheckinAuth />
            </>
        );
    }

    return <CheckinPage />;
};

export default Checkin;
