import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Franklin Ogot</Link>
        <div className="space-x-4">
          <Link href="#about" className="hover:text-blue-600">About</Link>
          <Link href="#projects" className="hover:text-blue-600">Projects</Link>
          <Link href="#blog" className="hover:text-blue-600">Blog</Link>
          <Link href="#contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
    )
}
