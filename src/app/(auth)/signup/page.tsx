"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState, FormEvent } from "react";
import { signUp } from "@/Redux/slices/authSlice"; // Adjust the import path if necessary
import { RootState, AppDispatch } from "@/Redux/store"; // Adjust the import path if necessary
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const status = useSelector((state: RootState) => state.auth.status);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(signUp({ username, email, password })).unwrap();
      if (status === "succeeded") {
        toast.success("Signed up successfully");
        router.push("/login");
      }
    } catch (error) {
      toast.error((error as string) || "An error occurred during sign-up");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen mt-10">
      <div className="bg-[#231F16] p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
              className="mt-1 block w-full px-4 text-black py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="mt-1 block w-full px-4 text-black py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="mt-1 block w-full px-4 py-2 border text-black rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          Already have an account?
          <Link href="/login" className="text-primary hover:underline">
            {" "}
            Sign In
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUpPage;
