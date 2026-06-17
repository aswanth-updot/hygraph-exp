import Link from "next/link";
import clsx from "clsx";
import { FoodCategory } from "@/lib/types";


interface CategoryPillsProps {
    categories: FoodCategory[];
    activeSlug: string;
}

export default function CategoryPills({
    categories,
    activeSlug,
}: CategoryPillsProps) {
    return (
        <section className="border-b border-[#e9e9eb] bg-white">
            <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
                <div className="flex gap-3 overflow-x-auto pb-1">
                    {categories.map((category) => {
                        const isActive = category.slug === activeSlug;

                        return (
                            <Link
                                key={category.id}
                                href={`/categories/${category.slug}`}
                                className={clsx(
                                    "whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition-all",
                                    isActive
                                        ? "border-[#fc8019] bg-[#fc8019] text-white"
                                        : "border-[#e9e9eb] bg-white text-[#282c3f] hover:border-[#fc8019] hover:text-[#fc8019]",
                                )}
                            >
                                {category.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}