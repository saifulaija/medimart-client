"use client";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import LoadingButton from "@/components/ui/LoadingButton";

const SignUpForm = () => {
  const [countries, setCountries] = useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const onSubmit = async (values: FieldValues) => {
    setIsLoading(true);
    try {
      // Implement your form submission logic here
      console.log(values);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="gap-y-3">
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="flex-1 focus:outline-none rounded-lg p-2 placeholder-gray-400 w-full"
              placeholder="Name"
            />
          )}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              className="flex-1 focus:outline-none rounded-lg p-2 placeholder-gray-400 w-full my-2"
              placeholder="Email Address"
            />
          )}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <div className="relative">
          {/* A container to position the show/hide button */}
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
            }}
            render={({ field }) => (
              <input
                {...field}
                type={showPassword ? "text" : "password"}
                className="flex-1 focus:outline-none rounded-lg p-2 placeholder-gray-400 w-full"
                placeholder="Enter Your Password"
              />
            )}
          />
          <button
            type="button" // Ensure it's a button type to prevent form submission
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <LoadingButton
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
          loading={isLoading}
        >
          Sign Up
        </LoadingButton>
      </div>
    </form>
  );
};

export default SignUpForm;
