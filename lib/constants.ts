export const DIFFICULTY_COLORS = {
  EASY: "green",
  MEDIUM: "yellow",
  HARD: "red",
} as const;

export const TABLE_CONFIG = {
  status: {
    width: "50px",
    label: "Status",
  },
  question: {
    label: "Question",
  },
  dataStructure: {
    label: "Data Structure",
  },
  difficulty: {
    width: "100px",
    label: "Difficulty",
  },
} as const;
