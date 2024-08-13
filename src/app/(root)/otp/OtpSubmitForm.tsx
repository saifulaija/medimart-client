"use client";

import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import LoadingButton from "@/components/ui/LoadingButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";


import { useRouter } from "next/navigation";
import { verifyOtp } from "@/services/actions/verifyOtp";

const SignUpSchema = z.object({
  verifyCode: z.string().min(6, { message: "Please enter Otp" }),
});

type FormFields = z.infer<typeof SignUpSchema>;

const OtpSubmitForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      verifyCode: "",
    },
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (values: FieldValues) => {
    console.log(values);
    
    setIsLoading(true);

    try {
      const res = await verifyOtp(values);
      console.log(res);

      if (res?.success) {
        toast("User registered successfully");
        router.push("/login");
      } else {
        toast.error(res?.message || "An unexpected error occurred.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label
          htmlFor="verifyCode"
          className="block text-sm font-medium text-gray-700"
        >
          OTP
        </label>
        <input
          {...register("verifyCode")}
          type="text"
          id="name"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          placeholder="Enter your otp"
        />
        {errors.verifyCode && (
          <p className="text-red-500 text-sm mt-1">
            {errors.verifyCode.message}
          </p>
        )}
      </div>

      <LoadingButton
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        loading={isLoading}
      >
        Submit Now
      </LoadingButton>
    </form>
  );
};

export default OtpSubmitForm;
