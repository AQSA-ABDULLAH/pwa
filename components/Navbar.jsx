'use client'; // only needed if using App Router (Next.js 13+)

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // optional icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          MyLogo
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-black">
          <Link href="/" className="block hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="block hover:text-blue-600">
            Services
          </Link>
          <Link href="/contact" className="block hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
