"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export const useLoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/home";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setIsLoading] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      });
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        toast.error("Invalid email or password");
      }
    } catch (err: any) {
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleLogin,
    setEmail,
    setPassword,
    setError,
    email,
    password,
    error,
    loading,
  };
};
