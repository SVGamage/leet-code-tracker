"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Question } from "@/lib/types";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { cn, difficultyMapper } from "@/lib/utils";
import { DIFFICULTY_COLORS, TABLE_CONFIG } from "@/lib/constants";

interface QuestionTableProps {
  questions: Question[];
}

export function QuestionTable({ questions }: QuestionTableProps) {
  return (
    <div className={questions.length === 0 ? "" : "rounded-md border"}>
      {questions.length === 0 ? (
        <div className="flex justify-center items-center min-h-max">
          <p className="text-3xl text-muted-foreground">No questions found.</p>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={`w-[${TABLE_CONFIG.status.width}]`}>
                {TABLE_CONFIG.status.label}
              </TableHead>
              <TableHead>{TABLE_CONFIG.question.label}</TableHead>
              <TableHead className={`w-[${TABLE_CONFIG.difficulty.width}]`}>
                {TABLE_CONFIG.difficulty.label}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questions.map((question) => (
              <TableRow key={question.id}>
                <TableCell>
                  <Checkbox checked={question.is_done} />
                </TableCell>
                <TableCell>
                  <a
                    href={question.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {question.title}
                  </a>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={cn(
                      "w-16 justify-center",
                      `border-${DIFFICULTY_COLORS[question.difficulty]}-500`,
                      `text-${DIFFICULTY_COLORS[question.difficulty]}-500`
                    )}
                  >
                    {difficultyMapper(question.difficulty)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
