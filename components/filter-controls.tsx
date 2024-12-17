"use client";

import { Role } from "@/lib/types";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface FilterControlsProps {
  role: string;
}
export function FilterControls({ role }: FilterControlsProps) {
  return (
    <div className="flex flex-row justify-between  mb-8">
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="flex gap-2">
          <Button variant="outline">All</Button>
          <Button variant="outline">Completed</Button>
          <Button variant="outline">In Progress</Button>
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="number">Question Number</SelectItem>
            <SelectItem value="difficulty">Difficulty</SelectItem>
            <SelectItem value="completion">Completion Status</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {role === Role.ADMIN && (
        <div className="flex justify-end gap-4">
          <Button variant="outline" className="bg-secondary">
            Add Category
          </Button>
        </div>
      )}
    </div>
  );
}
