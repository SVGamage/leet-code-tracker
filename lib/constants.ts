export const DIFFICULTY_COLORS = {
  Easy: "green",
  Medium: "yellow",
  Hard: "red",
} as const;

export const TABLE_CONFIG = {
  status: {
    width: "50px",
    label: "Status",
  },
  question: {
    label: "Question",
  },
  difficulty: {
    width: "100px",
    label: "Difficulty",
  },
} as const;