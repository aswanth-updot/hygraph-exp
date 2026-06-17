export default function EmptyFoodsState() {
    return (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#e9e9eb] bg-[#fffaf5] px-8 py-20 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-3xl">🍽️</span>
            </div>

            <h3 className="text-2xl font-bold text-[#282c3f]">
                No Foods Found
            </h3>

            <p className="mt-3 max-w-md text-[#686b78]">
                We couldn't find any foods in this category yet.
                Try exploring another category from above.
            </p>
        </div>
    );
}