import { LoginUser, RegisterUser } from '../types/auth';

export const loginService = async ({ email, password }: LoginUser) => {};

export const registerService = async ({
    firstName,
    lastName,
    company,
    country,
    email,
    password,
    passwordAgain
}: RegisterUser) => {};

export const appleService = async () => {};

export const googleService = async () => {};

export const microsoftService = async () => {};
