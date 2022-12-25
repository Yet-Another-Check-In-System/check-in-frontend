import { DateTime } from 'luxon';

/**
 * Clears current user data
 */
export const clearCurrentUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
};

export const getCurrentUser = () => {
    // Make call to the authorization API and return user data
};

/**
 * Checks if a user is logged in, doesn't validate token with backend
 * @returns
 */
export const userIsLoggedIn = (): Boolean => {
    try {
        const token = localStorage.getItem('token');
        const expiration_str = localStorage.getItem('expiration');

        if (!token || !expiration_str) {
            return false;
        }

        const expiration = Number.parseInt(expiration_str);
        const currentTime = DateTime.utc().toSeconds();

        // Token has expired
        if (expiration <= currentTime) {
            clearCurrentUser();
            return false;
        }

        return true;
    } catch {
        return false;
    }
};
