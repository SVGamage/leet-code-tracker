"use client";

import { Category } from "@/lib/types";
import { CategoryHeader } from "@/components/category-header";
import { QuestionTable } from "@/components/question-table";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface CategoryViewProps {
  category: Category;
}

export function CategoryView({ category }: CategoryViewProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Categories
            </Button>
          </Link>
        </div>
        <CategoryHeader category={category} />
        <QuestionTable questions={category.questions} />
      </div>
    </div>
  );
}
