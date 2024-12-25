import { User } from "@prisma/client";

export interface Question {
  id: number;
  title: string;
  difficulty: Difficulty;
  is_done: boolean;
  created_at: string;
  url: string;
}

export interface Category {
  category_id: number;
  category_name: string;
  category_description: string;
  category_created_at: string;
  total_questions: number;
  done_questions: number;
}

export interface DataStructure {
  id: number;
  name: string;
  description: string | null;
  createdAt: Date;
}

export interface RawCategory {
  id: number;
  name: string;
  description: string | null;
  createdAt: Date;
}

export interface Questions {
  questions: Question[];
}

export interface QuestionsWithCategory extends Questions, Category {}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}
