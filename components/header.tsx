export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e9eb] bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fc8019] text-lg font-bold text-white">
            F
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#282c3f]">
              FoodFinder
            </h1>
            <p className="text-xs text-[#686b78]">
              Discover the best dishes
            </p>
          </div>
        </a>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="/"
                className="font-medium text-[#282c3f] transition-colors hover:text-[#fc8019]"
              >
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}