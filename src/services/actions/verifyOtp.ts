"use server";

import { FieldValues } from "react-hook-form";

export const  verifyOtp= async (data: FieldValues) => {
  const res = await fetch("http://localhost:5000/api/v1/user/email-verify", {
    method: "PATCH", // Changed from POST to PATCH to match server route
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const responseData = await res.json();
  if (!res.ok) {
    // Throw a specific error message from the response
    throw new Error(responseData.message || "An unexpected error occurred.");
  }

  return responseData;
};
