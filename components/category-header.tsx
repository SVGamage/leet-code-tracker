"use client";

import { Category } from "@/lib/types";
import { CategoryIcon } from "./category-icon";
import { Progress } from "./ui/progress";
import { Card, CardContent } from "./ui/card";

interface CategoryHeaderProps {
  category: Category;
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  const progress = (category.completedQuestions / category.totalQuestions) * 100;

  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <CategoryIcon name={category.iconName} className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{category.name}</h1>
            <p className="text-muted-foreground">
              {category.completedQuestions} of {category.totalQuestions} questions completed
            </p>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </CardContent>
    </Card>
  );
}