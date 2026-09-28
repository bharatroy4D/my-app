import Navbar from '@/components/shared/Navbar';
import { getMe } from '@/service/getMe';
import React from 'react';

const AuthLayout = async (
    { children }: { children: React.ReactNode }
) => {
    const user = await getMe();
    return (
        <div className=' w-full h-screen '>
            <Navbar user={user} />
            {children}
        </div>
    );
};

export default AuthLayout;