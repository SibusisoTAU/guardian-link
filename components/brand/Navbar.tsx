'use client';

import React from 'react';
import Link from 'next/link';
import { GuardianLogo } from './GuardianLogo';

export const Navbar: React.FC<{ userRole?: 'talent' | 'business' | 'admin' | null }> = ({
  userRole = null,
}) => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <GuardianLogo size={40} />
          <div>
            <div className="font-black text-xl text-emerald-700">GUARDIAN</div>
            <div className="font-black text-sm text-orange-500 -mt-1">LINK</div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {!userRole && (
            <>
              <Link
                href="/talent-discovery"
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition"
              >
                Find Talent
              </Link>
              <Link
                href="/auth/login"
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="px-4 py-2 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition text-sm"
              >
                Sign Up
              </Link>
            </>
          )}

          {userRole === 'talent' && (
            <>
              <Link
                href="/opportunities"
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition"
              >
                Opportunities
              </Link>
              <Link
                href="/profile"
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition"
              >
                My Profile
              </Link>
              <Link
                href="/auth/logout"
                className="px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition text-sm"
              >
                Logout
              </Link>
            </>
          )}

          {userRole === 'business' && (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition"
              >
                Dashboard
              </Link>
              <Link
                href="/opportunities/create"
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition"
              >
                Post Job
              </Link>
              <Link
                href="/profile"
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition"
              >
                Settings
              </Link>
              <Link
                href="/auth/logout"
                className="px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition text-sm"
              >
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
