"use client";

import { Category, Role } from "@/lib/types";
import { CategoryHeader } from "@/components/category-header";
import { QuestionTable } from "@/components/question-table";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import LoadingSpinner from "./loading-spinner";
import { useGetCurrentUser } from "@/hooks/use-get-current-user";

interface CategoryViewProps {
  category: Category;
}

export function CategoryView({ category }: CategoryViewProps) {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  const currentUser = useGetCurrentUser(user);
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
        <CategoryHeader category={category} />
        <QuestionTable questions={category.questions} />
      </div>
    </div>
  );
}
