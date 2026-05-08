// ============================
// app/register/page.jsx
// ============================

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiUser,
  FiImage,
  FiMail,
  FiLock,
} from "react-icons/fi";
import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();

  // ================= REGISTER =================
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const userData = {
      name: form.name.value,
      image: form.image.value,
      email: form.email.value,
      password: form.password.value,
    };

    console.log(userData);

    const result  = await postUser(userData);
    //alert(result.message);
    if(result.acknowledged){
      alert("User created successfully. Please login now.");
      form.reset();
      router.push("/logIN");
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 overflow-hidden">

      {/* Animated BG */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[450px] h-[450px] bg-white/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-gradient-to-r from-blue-300 to-blue-400  backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8">

          <h1 className="text-4xl font-bold text-center text-white mb-2">
            Create Account
          </h1>

          <p className="text-center text-white/80 mb-8">
            Register your new account
          </p>

          {/* FORM */}
          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            {/* Name */}
            <div>
              <label className="text-white text-sm mb-2 block">
                Name
              </label>

              <div className="flex items-center bg-white/20 border border-white/30 rounded-xl px-4">
                <FiUser className="text-white text-xl" />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            {/* Image */}
            <div>
              <label className="text-white text-sm mb-2 block">
                Image URL
              </label>

              <div className="flex items-center bg-white/20 border border-white/30 rounded-xl px-4">
                <FiImage className="text-white text-xl" />

                <input
                  type="text"
                  name="image"
                  placeholder="Enter image URL"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder:text-white/60"
                />
              </div>
            </div>

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
                  placeholder="Enter password"
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
              Register
            </motion.button>
          </form>

          {/* Login Link */}
          <p className="text-center text-white mt-6">
            Already have an account?{" "}
            <Link
              href="/logIN"
              className="font-bold underline"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;