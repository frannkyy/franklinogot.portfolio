import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-gray-900 text-white p-4">
      <nav className="max-w-4xl mx-auto flex gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/blog" className="hover:underline">Blog</Link>
      </nav>
    </header>
    <main className="flex-grow max-w-4xl mx-auto w-full p-6">{children}</main>
    <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
  </div>
);

export default Layout;