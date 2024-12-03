"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Navbar() {
  const { userId } = useAuth();
  const NavItems = () => (
    <>
      <Link href="/">Home</Link>
      {userId ? <UserButton /> : <Link href="/login">Login / Sign Up</Link>}
      <Link href="/profile">Profile</Link>
    </>
  );

  return (
    <nav className="bg-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="hidden md:flex items-center space-x-4">
            <NavItems />
          </div>
        </div>
      </div>
    </nav>
  );
}
