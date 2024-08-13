"use client";

import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import LoadingButton from "@/components/ui/LoadingButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { signUpUser } from "@/services/actions/signupUser";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/authServices";
import { signInUser } from "@/services/actions/loginUser";
const LoginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type FormFields = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (values: FieldValues) => {
    setIsLoading(true);

    try {
      const res = await signInUser(values);
      console.log(res);

      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast("User login successfully");
        router.refresh();
      } else {
        setError(res?.message || "An unexpected error occurred.");
      }
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-red-500">{error}</p>
      <div className="mb-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          placeholder="Enter your email"
        />
        {errors.email?.message && (
          <p className="text-red-500 text-sm mt-1">
            {String(errors.email.message)}
          </p>
        )}
      </div>

      <div className="relative mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          {...register("password")}
          type={showPassword ? "text" : "password"}
          id="password"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          placeholder="Enter your password"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 mt-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-500" />
          ) : (
            <Eye className="h-5 w-5 text-gray-500" />
          )}
        </button>
        {errors.password?.message && (
          <p className="text-red-500 text-sm mt-1">
            {String(errors.password.message)}
          </p>
        )}
      </div>

      <LoadingButton
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        loading={isLoading}
      >
        Login
      </LoadingButton>
    </form>
  );
};

export default LoginForm;
