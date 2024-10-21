import iEnv from './env';
import iUser from './user';

interface Student extends iUser {
  enrolledCourses: string[]; // Array of course IDs
  completedQuizzes: string[]; // Array of quiz IDs
  badges: string[]; // Array of badge IDs
}

interface Educator extends iUser {
  createdCourses: string[]; // Array of course IDs
  createdQuizzes: string[]; // Array of quiz IDs
}

// Quiz related interfaces
interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  creatorId: string; // ID of the educator who created the quiz
  // courseId: string; // ID of the course this quiz belongs to
  createdAt: Date;
  updatedAt: Date;
  // courseCode: string;
  registeredStudents: string[];
}

interface Question {
  id: string;
  quizId: string;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct answer in the options array
}

interface QuizAttempt {
  id: string;
  quizId: string;
  studentId: string;
  score: number;
  answers: number[]; // Array of selected answer indices
  completedAt: Date;
}

// Course material related interfaces
interface CourseMaterial {
  id: string;
  title: string;
  description: string;
  type: 'file' | 'article' | 'video';
  url: string;
  creatorId: string; // ID of the educator who created the material
  courseId: string; // ID of the course this material belongs to
  createdAt: Date;
  updatedAt: Date;
}

// Course related interface
interface Course {
  id: string;
  title: string;
  description: string;
  educatorId: string; // ID of the educator who created the course
  materials: string[]; // Array of material IDs
  quizzes: string[]; // Array of quiz IDs
  enrolledStudents: string[]; // Array of student IDs
  createdAt: Date;
  updatedAt: Date;
}

// Badge related interface
interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  criteria: string; // Description of how to earn the badge
  createdAt: Date;
  updatedAt: Date;
}

// Leaderboard related interface
interface LeaderboardEntry {
  userId: string;
  userName: string;
  score: number;
  rank: number;
}

// API response interfaces
// interface ApiResponse<T> {
//   status: number;
//   success: boolean;
//   data?: T;
//   error?: string;
// }

interface ApiResponse<T> {
  statusCode: number;
  data?: T;
  message?: string;
  error?: {
    message: string;
    code: string;
    stackTrace?: string;
  };
}

// Example usage: ApiResponse<User[]> for a list of users

// Authentication related interfaces
interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'educator';
}

interface AuthResponse {
  user: iUser;
  token: string;
}

interface Pagination {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// Export all interfaces
export type {
  Student as iStudent,
  Educator as iEducator,
  Quiz as iQuiz,
  Question as iQuestion,
  QuizAttempt as iQuizAttempt,
  CourseMaterial as iCourseMaterial,
  Course as iCourse,
  Badge as iBadge,
  LeaderboardEntry as iLeaderboardEntry,
  ApiResponse as iApiResponse,
  LoginCredentials as iLoginCredentials,
  SignupData as iSignupData,
  AuthResponse as iAuthResponse,
  Pagination as iPagination,
  iUser,
  iEnv,
};
