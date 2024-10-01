// src/app/dashboard/layout.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isEducator = pathname.includes('/educator');

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-5">
          <Link
            href={isEducator ? '/dashboard/educator' : '/dashboard/student'}
            className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
          >
            Dashboard
          </Link>
          {isEducator ? (
            <>
              <Link
                href="/dashboard/educator/materials"
                className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
              >
                Course Materials
              </Link>
              <Link
                href="/dashboard/educator/quizzes"
                className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
              >
                Quizzes
              </Link>
              <Link
                href="/dashboard/educator/leaderboard"
                className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
              >
                Leaderboard
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard/student/quizzes"
                className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
              >
                Quizzes
              </Link>
              <Link
                href="/dashboard/student/materials"
                className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
              >
                Course Materials
              </Link>
              <Link
                href="/dashboard/student/leaderboard"
                className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
              >
                Leaderboard
              </Link>
              <Link
                href="/dashboard/student/profile"
                className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
              >
                Profile
              </Link>
            </>
          )}
          <Link
            href="/logout"
            className="block py-2 px-4 text-gray-600 hover:bg-gray-200"
          >
            Logout
          </Link>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
    </div>
  );
}
