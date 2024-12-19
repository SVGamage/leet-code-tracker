"use client";

import Link from "next/link";
import { Card, CardHeader } from "./ui/card";
import { Progress } from "./ui/progress";
import { Category } from "@/lib/types";
import { CategoryIcon } from "./category-icon";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const progress = (category.done_questions / category.total_questions) * 100;

  return (
    <Link href={`/category/${category.category_id}`}>
      <Card className="group transition-all hover:shadow-lg">
        <CardHeader className="cursor-pointer select-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CategoryIcon name="Hash" className="h-5 w-5" />
              <h3 className="text-lg font-semibold">
                {category.category_name}
              </h3>
            </div>
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </div>
          <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
            <span>
              {category.done_questions} / {category.total_questions} completed
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="mt-2" />
        </CardHeader>
      </Card>
    </Link>
  );
}
