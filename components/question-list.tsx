"use client";

import { Difficulty, Question } from "@/lib/types";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { cn, difficultyMapper } from "@/lib/utils";

interface QuestionListProps {
  questions: Question[];
}

export function QuestionList({ questions }: QuestionListProps) {
  return (
    <ul className="space-y-2">
      {questions.map((question) => (
        <li
          key={question.id}
          className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted/50"
        >
          <Checkbox checked={question.is_done} />
          <a
            href={question.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 hover:underline"
          >
            {question.title}
          </a>
          <Badge
            variant="outline"
            className={cn(
              "w-16 justify-center",
              question.difficulty === Difficulty.EASY &&
                "border-green-500 text-green-500",
              question.difficulty === Difficulty.MEDIUM &&
                "border-yellow-500 text-yellow-500",
              question.difficulty === Difficulty.HARD &&
                "border-red-500 text-red-500"
            )}
          >
            {difficultyMapper(question.difficulty)}
          </Badge>
        </li>
      ))}
    </ul>
  );
}
