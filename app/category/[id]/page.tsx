"use client";

import { useGetCurrentUser } from "@/hooks/use-get-current-user";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import LoadingSpinner from "@/components/loading-spinner";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Role } from "@/lib/types";
import { CategoryHeader } from "@/components/category-header";
import { QuestionTable } from "@/components/question-table";
import { useGetQuestionsForCategory } from "@/hooks/use-get-questions-for-category";
import { useProfileStore } from "@/lib/store";

// export const metadata: Metadata = {
//   title: "Category Details - LeetCode Progress Tracker",
//   description: "View detailed progress for this category",
// };

// Required for static site generation with dynamic routes

export default function CategoryPage({ params }: { params: { id: string } }) {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  const currentUser = useProfileStore((state) => state.profile);
  console.log(currentUser);
  const { questions, loading } = useGetQuestionsForCategory(
    currentUser?.id as number,
    parseInt(params.id)
  );
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }
  if (!isAuthenticated) {
    redirect("/api/auth/login");
  }

  if (!questions || questions.length === 0) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-background px-4">
      <div className="container py-8">
        <div className="mb-8 flex justify-between">
          <Link href="/dashboard">
            <Button variant="outline" size="sm" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Categories
            </Button>
          </Link>
          {currentUser?.role === Role.ADMIN && (
            <Button variant="outline" size="sm" className="gap-2 bg-secondary">
              Add Question
            </Button>
          )}
        </div>
        <CategoryHeader category={questions[0]} />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <QuestionTable questions={questions[0].questions} />
        )}
      </div>
    </div>
  );
}
