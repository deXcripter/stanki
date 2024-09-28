'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

type UserRole = 'student' | 'teacher';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  roles?: UserRole[];
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, roles }) => {
  const { user } = useAuth();

  if (roles && (!user || !roles.includes(user.role as UserRole))) {
    return null;
  }

  return (
    <Link href={href} passHref>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block py-2 px-4 text-white hover:bg-white hover:bg-opacity-20 rounded transition-colors"
      >
        {children}
      </motion.a>
    </Link>
  );
};

const Navigation: React.FC = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg"
    >
      <nav className="container mx-auto flex justify-between items-center">
        {user ? (
          <h1 className="text-2xl font-bold">Hello, {user.firstName}!</h1>
        ) : (
          <Link
            href="/"
            className="text-2xl font-bold hover:text-yellow-300 transition-colors"
          >
            CLP
          </Link>
        )}
        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <Menu size={24} />
          </motion.button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-blue-600 shadow-lg z-50 md:hidden"
            >
              <div className="flex flex-col p-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                  className="self-end text-white mb-4"
                >
                  <X size={24} />
                </motion.button>
                <NavLinks />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="hidden md:block">
          <NavLinks />
        </div>
      </nav>
    </motion.header>
  );
};

const NavLinks: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <NavLink href="/leaderboard">Leaderboard</NavLink>
      <NavLink href="/resources">Resources</NavLink>
      {user ? (
        <>
          <NavLink href="/quiz">Quizzes</NavLink>
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/course-materials">Course Materials</NavLink>
          {user.role === 'teacher' && (
            <>
              <NavLink href="/create-quiz">Create Quiz</NavLink>
              <NavLink href="/admin-dashboard">Admin Dashboard</NavLink>
            </>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={logout}
            className="block py-2 px-4 text-white hover:bg-white hover:bg-opacity-20 rounded transition-colors"
          >
            Logout
          </motion.button>
        </>
      ) : (
        <NavLink href="/login">Login</NavLink>
      )}
    </>
  );
};

export default Navigation;
