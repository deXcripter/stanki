'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-yellow-300 transition-colors"
        >
          CLP
        </Link>
        <ul className="flex space-x-6">
          <NavItem href="/quiz">Quizzes</NavItem>
          <NavItem href="/leaderboard">Leaderboard</NavItem>
          <NavItem href="/resources">Resources</NavItem>
          {user ? (
            <>
              <NavItem href="/dashboard">Dashboard</NavItem>
              <li>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={logout}
                  className="hover:text-yellow-300 transition-colors"
                >
                  Logout
                </motion.button>
              </li>
            </>
          ) : (
            <NavItem href="/login">Login</NavItem>
          )}
        </ul>
      </nav>
    </motion.header>
  );
};

const NavItem: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <li>
    <Link href={href} passHref>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hover:text-yellow-300 transition-colors"
      >
        {children}
      </motion.a>
    </Link>
  </li>
);

export default Navigation;
