"use client";

import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import LoadingButton from "@/components/ui/LoadingButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import { uploadImage } from "@/utils/imgbb";
import { useRouter } from "next/navigation";
import { useCreateCategoryMutation } from "@/redux/api/features/categoriyApi";

const SignUpSchema = z.object({
  name: z.string().min(4, { message: "Please enter category name" }),
  slug: z.string().min(2, { message: "Please enter category name" }),

  thumbnail: z.any(),
});

type FormFields = z.infer<typeof SignUpSchema>;

const AddPrimaryCategoryForm = () => {
  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",

      thumbnail: "",
    },
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (values: FieldValues) => {
    if (values.thumbnail && values.thumbnail.length > 0) {
      const url = await uploadImage(values.thumbnail[0]);
      values.thumbnail = url;
    } else {
      values.thumbnail = "";
    }

    try {
      const res = await createCategory(values);
      console.log(res);

      if (res?.data) {
        toast("Category created successfully");
        reset();
      } else {
        toast.error("Something went wrong");
      }
    } catch (err: any) {
      toast.error(err?.message || "An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 text-start"
        >
          CategoryName
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          placeholder="Enter your name"
        />
        {errors.name?.message && (
          <p className="text-red-500 text-sm mt-1">
            {String(errors.name.message)}
          </p>
        )}
      </div>
      <div className="mb-2">
        <label
          htmlFor="slug"
          className="block text-sm font-medium text-gray-700 text-start"
        >
          CategoryName
        </label>
        <input
          {...register("slug")}
          type="text"
          id="slug"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          placeholder="Enter your name"
        />
        {errors.slug?.message && (
          <p className="text-red-500 text-sm mt-1">
            {String(errors.slug.message)}
          </p>
        )}
      </div>

      <div className="mb-2">
        <label
          htmlFor=" thumbnail"
          className="block text-sm font-medium text-gray-700 text-start"
        >
          Category Image
        </label>
        <input
          {...register("thumbnail")}
          type="file"
          id=" thumbnail"
          accept=" thumbnail/*"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
        />
        {errors.thumbnail?.message && (
          <p className="text-red-500 text-sm mt-1">
            {String(errors.thumbnail.message)}
          </p>
        )}
      </div>

      <LoadingButton
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        loading={isLoading}
      >
        Create Primary Category
      </LoadingButton>
    </form>
  );
};

export default AddPrimaryCategoryForm;
