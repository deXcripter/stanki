// src/app/layout.tsx
import { AuthProvider } from '@/contexts/AuthContext';
import '../styles/global.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Competitive Learning Platform',
  description: 'A platform for interactive learning and quizzes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
