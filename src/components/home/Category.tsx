"use client";

import { useGetAllCategoryQuery } from "@/redux/api/features/categoriyApi";
import Header from "../shared/Header";
import Loader from "../shared/Loader";
import CategoryCard from "./CategoryCard";
import { TCategory } from "@/types/category";

const Category = () => {
  const { data: categories, isLoading } = useGetAllCategoryQuery({});

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      <div className="max-w-7xl flex justify-center items-center mx-auto">
       <div>
            <Header title="Products Categories" />
            <div className="flex items-center flex-wrap gap-3">
    {
        categories?.map((category:TCategory)=>(
            <CategoryCard key={category._id 
            } category={category}/>
        ))
    }
            </div>
       </div>
      </div>
    </div>
  );
};

export default Category;
