import { RawCategory } from "@/lib/types";
import { useEffect, useState } from "react";

export const useGetAllCategories = () => {
  const [categories, setCategories] = useState<RawCategory[]>([]);
  const [loadingCategory, setLoadingCategory] = useState<boolean>(true);
  useEffect(() => {
    const getAllCategories = async () => {
      setLoadingCategory(true);
      try {
        const response = await fetch("/api/category");

        if (!response.ok) {
          console.error(
            "Failed to fetch all categories:",
            await response.text()
          );
          return;
        }
        const categories: RawCategory[] = await response.json();
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching data structures:", error);
      } finally {
        setLoadingCategory(false);
      }
    };
    getAllCategories();
  }, []);
  return { categories, loadingCategory };
};
