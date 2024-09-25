export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  level: number;
  badges: Badge[];
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

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'quiz';
  link: string;
}

// ... (previous types remain unchanged)

export interface CourseMaterial {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  uploadedBy: string;
  uploadDate: string;
  activeStudents: number;
}
