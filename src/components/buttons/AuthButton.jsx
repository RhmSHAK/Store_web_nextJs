import React from 'react';
import { signOut, useSession } from "next-auth/react";
import Link from 'next/link';


const AuthButton = () => {

    const session = useSession();

    return (
        <div>
           {
            session.status == "authenticated" ? (
                <>
                    {/* <p>{session.user.name}</p> */}
                    <button className="bg-white text-sky-600 px-4 py-2 rounded" onClick={() => signOut()}>Logout</button>
                </>
            ) : (
                <>
                  <Link href="/logIN" className="bg-white text-sky-600 px-4 py-2 rounded">
                    Login
                  </Link>  
                </>
            )
           } 


           
        </div>
    );
};

export default AuthButton;