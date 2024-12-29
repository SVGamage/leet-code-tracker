import { Category } from "@/lib/types";
import { useEffect, useState } from "react";

export const useGetCategories = (userId: number) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
          }),
        });
        if (!response.ok) {
          console.error("Failed to fetch categories:", await response.text());
          return;
        }
        const categories: Category[] = await response.json();
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    userId && getCategories();
  }, [userId]);
  return { categories, loading };
};
