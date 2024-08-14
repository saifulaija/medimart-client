"use client";

import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import LoadingButton from "@/components/ui/LoadingButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import { signUpUser } from "@/services/actions/signupUser";
import { uploadImage } from "@/utils/imgbb";
import { useRouter } from "next/navigation";

const SignUpSchema = z.object({
  categoryName: z.string().min(4, { message: "Please enter category name" }),

  image: z.any(),
});

type FormFields = z.infer<typeof SignUpSchema>;

const AddCategoryForm = () => {
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
      categoryName: "",

      image: "",
    },
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (values: FieldValues) => {
    setIsLoading(true);
    if (values.image && values.image.length > 0) {
      const url = await uploadImage(values.image[0]);
      values.image = url;
    } else {
      values.image = "";
    }

    try {
      const res = await signUpUser(values);
      console.log(res);

      if (res?.success) {
        toast("An OTP has been sent to your email address.");
        router.push("/otp");
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
      <div className="mb-1">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          CategoryName
        </label>
        <input
          {...register("categoryName")}
          type="text"
          id="name"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          placeholder="Enter your name"
        />
        {errors.categoryName?.message && (
          <p className="text-red-500 text-sm mt-1">
            {String(errors.categoryName.message)}
          </p>
        )}
      </div>

      <div className="mb-2">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Category Image
        </label>
        <input
          {...register("image")}
          type="file"
          id="image"
          accept="image/*"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
        />
        {errors.image?.message && (
          <p className="text-red-500 text-sm mt-1">
            {String(errors.image.message)}
          </p>
        )}
      </div>

      <LoadingButton
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        loading={isLoading}
      >
        Create Category
      </LoadingButton>
    </form>
  );
};

export default AddCategoryForm;
