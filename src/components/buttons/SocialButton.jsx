import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SocialButton = () => {

    const handleSignIn = async () => {
      
        const result = await signIn("google", { 
            redirect: false, 
           
         });
        console.log(result);
        if(result.ok){
            Swal.fire({
                icon: 'success',
                title: 'Welcome to MyStore',
                text: " Google logged in successfully",
            });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: result.error || "Google sign-in failed",
            });
        } 
    }

    return (
        <div className="flex gap-4 mt-6">
            <button 
               onClick={handleSignIn}
            className="btn btn-outline btn-primary flex-1">
                <FaGoogle className="text-lg" />
                Google
            </button>
        </div>
    );
};

export default SocialButton;