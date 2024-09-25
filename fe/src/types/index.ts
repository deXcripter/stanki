export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  level: number;
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  answerOptions: {
    id: string;
    answerText: string;
    isCorrect: boolean;
  }[];
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  level: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}
