"use client";

import React from "react";
import { useSession } from "next-auth/react";

const ProfileCard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="text-center mt-10 text-gray-500 animate-pulse">
        Loading profile...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="text-center mt-10 text-red-500">
        Not logged in
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto mt-10">
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-[2px] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">

        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center">

          {/* Avatar */}
          <img
            src={session.user?.image}
            alt={session.user?.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 shadow-md hover:rotate-3 transition-transform duration-300"
          />

          {/* Name Field */}
          <div className="mt-5 w-full">
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Name
            </p>
            <h2 className="text-lg font-bold text-gray-800 bg-gray-100 rounded-lg py-2 mt-1">
              {session.user?.name}
            </h2>
          </div>

          {/* Email Field */}
          <div className="mt-4 w-full">
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Email
            </p>
            <p className="text-sm text-gray-700 bg-gray-100 rounded-lg py-2 mt-1">
              {session.user?.email}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileCard;