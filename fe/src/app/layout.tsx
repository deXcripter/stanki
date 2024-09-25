import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/context/AuthContext';
import Navigation from '@/components/Navigation';
import { AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Competitive Learning Platform',
  description: 'Enhance your learning through competition',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
            <Navigation />
            <AnimatePresence mode="wait">
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
            </AnimatePresence>
            <footer className="bg-gray-800 text-white p-4 text-center">
              <p>&copy; 2023 Competitive Learning Platform</p>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
