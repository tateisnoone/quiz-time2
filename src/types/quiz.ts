export type Quiz = {
  id: number;
  name: string;
  questions: Question[];
};

export type Question = {
  id: number;
  score: number;
  name: string;
  variants: Variant[];
};

export type Variant = {
  id: number;
  name: string;
  isCorrect: boolean;
};
