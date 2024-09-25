'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const Navigation: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Competitive Learning Platform
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/quiz"
              className="hover:text-blue-200 transition-colors"
            >
              Quizzes
            </Link>
          </li>
          <li>
            <Link
              href="/leaderboard"
              className="hover:text-blue-200 transition-colors"
            >
              Leaderboard
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-blue-200 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="hover:text-blue-200 transition-colors"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/login"
                className="hover:text-blue-200 transition-colors"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
