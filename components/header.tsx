import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Store
        </Link>

        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-600 transition hover:text-black"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-gray-600 transition hover:text-black"
          >
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}