'use client'
import { signOut } from 'next-auth/react';
import React from 'react';

const LogOutButton = () => {
    return (
        <div>
                  <button onClick={()=>signOut()} className='btn'>Login</button> 
               </div>
    );
};

export default LogOutButton;