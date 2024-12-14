export interface Question {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed: boolean;
  url: string;
}

export interface Category {
  id: number;
  name: string;
  iconName: string;
  completedQuestions: number;
  totalQuestions: number;
  questions: Question[];
}