import { UpdateQuestionDoneStatus } from "@/actions/actions";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

interface QuestionCheckBoxProps {
  questionId: number;
  is_done: boolean;
  userId: number;
}
export function QuestionCheckBox({
  questionId,
  is_done,
  userId,
}: QuestionCheckBoxProps) {
  const [isDone, setIsDone] = useState(is_done);
  return (
    <Checkbox
      onCheckedChange={() => {
        setIsDone((prev) => !prev);
        console.log(isDone);
        UpdateQuestionDoneStatus(userId, questionId, !isDone);
      }}
      checked={isDone}
    />
  );
}
