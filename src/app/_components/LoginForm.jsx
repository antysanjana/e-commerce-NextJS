"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AuroraBackground } from "../../components/ui/aurora-background";
import { useRouter } from "next/navigation";
import { login } from "@/api/request";

export function LoginForm() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //Body of POST request
    let payload = {
      username: formData.userName, // Ensure this matches API expectations
      password: formData.password, // Ensure this matches API expectations
    };

    const response = login(payload);

    const { token } = response;
    localStorage.setItem("authToken", token);
    router.push("/home");
  };

  return (
    <AuroraBackground>
      <motion.div className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="border border-slate-500 min-w-[450px] mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h1 className="font-bold text-center text-3xl text-neutral-800 dark:text-neutral-300">
            Log in
          </h1>

          <form className="my-8">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="user">User Name</Label>
              <Input
                name="userName"
                placeholder="Tyler"
                type="text"
                value={formData.userName}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                placeholder="••••••••"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <Link href={"/home"}>
              <button
                className="mt-8 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                onClick={handleSubmit}
              >
                Log in &rarr;
                <BottomGradient />
              </button>
            </Link>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-center text-xl text-neutral-800 dark:text-neutral-200">
                Don&apos;t have an account?
              </h3>
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Sign up &rarr;
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
