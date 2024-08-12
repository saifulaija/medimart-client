"use client";

import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import LoadingButton from "@/components/ui/LoadingButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { modifyPayload } from "@/utils/modifyPayload";
import { toast } from "react-toastify";
import { signUpUser } from "@/services/actions/signupUser";
import { uploadImage } from "@/utils/imgbb";
import { useRouter } from "next/navigation";

const SignUpSchema = z.object({
  name: z.string().min(4, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  image: z.any(),
});

type FormFields = z.infer<typeof SignUpSchema>;

const SignUpForm = () => {
  const router=useRouter()
   const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      image: null,
    },
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (values: FieldValues) => {
       if (values.image && values.image.length > 0) {
         const url = await uploadImage(values.image[0]);
         values.image = url;
       } else {
         values.image= "";
       }
     
   try {
     const res = await signUpUser(values);
     console.log(res);
     

     if (res?.success) {
      toast('send otp your email address')
       router.push("/login");
     } else {
       setError(res?.message || "An unexpected error occurred.");
     }
   } catch (err: any) {
     setError(err?.message || "An unexpected error occurred.");
   } finally {
    //  setLoading(false);
   }
  };


 

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
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
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-500" />
          ) : (
            <Eye className="h-5 w-5 text-gray-500" />
          )}
        </button>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Profile Image
        </label>
        <input
          {...register("image")}
          type="file"
          id="image"
          accept="image/*"
        
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
        />
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
        )}
      </div>

      <LoadingButton
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        loading={isLoading}
      >
        Sign Up
      </LoadingButton>
    </form>
  );
};

export default SignUpForm;
