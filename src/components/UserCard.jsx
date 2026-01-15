'use client'; 
import { useSession } from 'next-auth/react';
import React from 'react';

const UserCard = () => {
    const session = useSession()
    console.log(session)

    return (
        <div>
            <h2 className="font-bold">User client</h2>
        <div className="border-2 p-4 rounded-xl">{JSON.stringify(session)}</div>
        </div>
    );
};

export default UserCard;