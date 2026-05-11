
"use client";

import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";

import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";

import SocialButton from "@/components/buttons/SocialButton";

function LoginContent() {
  const params = useSearchParams();
  const router = useRouter();


  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;

    const userData = {
      email: form.email.value,
      password: form.password.value,
    };

    const result = await signIn("credentials", {
      email: userData.email,
      password: userData.password,
      redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });

    if (!result.ok) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Welcome to MyStore",
        text: "You have logged in successfully",
      });

      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl top-[-100px] left-[-100px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-gradient-to-r from-blue-300 to-blue-400 backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-center text-white mb-2">
            Welcome Back
          </h1>

          <p className="text-center text-white/80 mb-8">
            Login to your account
          </p>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-white text-sm mb-2 block">
                Email
              </label>

              <div className="flex items-center bg-white/20 border border-white/30 rounded-xl px-4">
                <FiMail className="text-white text-xl" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-white text-sm mb-2 block">
                Password
              </label>

              <div className="flex items-center bg-white/20 border border-white/30 rounded-xl px-4">
                <FiLock className="text-white text-xl" />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-xl bg-white text-blue-500 font-bold text-lg shadow-lg"
            >
              Login
            </motion.button>
          </form>

          <SocialButton />

          {/* Register Link */}
          <p className="text-center text-white mt-6">
            Don't have an account?{" "}
            <Link href="/register" className="font-bold underline">
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}