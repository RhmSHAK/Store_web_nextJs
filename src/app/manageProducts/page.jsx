"use client";

import { useSession } from "next-auth/react";
import React from "react";

const ManageProducts = () => {
    const { data: session, status } = useSession();

    console.log(session);

    return (
        <div>
            <h1>Manage Products</h1>

            <p>Status: {status}</p>
            

            {session && (
                <div>
                    <p>{session.user?.name}</p>
                    <p>{session.user?.email}</p>
                    <p>{session.user?.image}</p>
                </div>
            )}
        </div>
    );
};

export default ManageProducts;