import { QuestionsWithCategory } from "@/lib/types";
import { useEffect, useState } from "react";

export const useGetQuestionsForCategory = (
  userId: number,
  categoryId: number
) => {
  const [questions, setQuestions] = useState<QuestionsWithCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getQuestions = async () => {
      try {
        const response = await fetch("/api/questions", {
          method: "POST",
          body: JSON.stringify({ categoryId, userId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          console.error("Failed to fetch questions:", await response.text());
          return;
        }
        const questions: QuestionsWithCategory[] = await response.json();
        setQuestions(questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };
    userId && getQuestions();
  }, [categoryId, userId]);
  return { questions, loading };
};
