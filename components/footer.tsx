export default function Footer() {
    return (
        <footer className="mt-20 border-t border-[#e9e9eb] bg-[#fffaf5]">
            <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                    <div>
                        <h3 className="text-lg font-bold text-[#282c3f]">
                            FoodFinder
                        </h3>

                        <p className="mt-1 text-sm text-[#686b78]">
                            Discover foods and find restaurants that serve them.
                        </p>
                    </div>

                    <p className="text-sm text-[#686b78]">
                        © {new Date().getFullYear()} FoodFinder. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}