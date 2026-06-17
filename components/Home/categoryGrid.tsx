import { FoodCategory } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";



interface CategoryGridProps {
    categories: FoodCategory[];
}

export default function CategoryGrid({
    categories,
}: CategoryGridProps) {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#282c3f]">
                    Browse Categories
                </h2>

                <p className="mt-2 text-[#686b78]">
                    Discover foods by category.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/categories/${category.slug}`}
                        className="group relative overflow-hidden rounded-3xl"
                    >
                        <Image
                            src={category?.image?.url ?? ""}
                            alt={category.name}
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                            height={256}
                            width={256}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="text-xl font-bold text-white">
                                {category.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}