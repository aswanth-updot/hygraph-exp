import { Food } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface FoodGridProps {
    foods: Food[];
}

export default function FoodGrid({ foods }: FoodGridProps) {
    return (
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#282c3f]">
                    Foods
                </h2>

                <p className="mt-2 text-[#686b78]">
                    Explore foods available in this category.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {foods.map((food) => (
                    <Link
                        key={food.id}
                        href={`/foods/${food.slug}`}
                        className="group overflow-hidden rounded-2xl border border-[#e9e9eb] bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="overflow-hidden">
                            <Image
                                src={food.image?.url ?? ""}
                                alt={food.name}
                                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                                height={52}
                                width={200}
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="line-clamp-1 text-lg font-semibold text-[#282c3f]">
                                {food.name}
                            </h3>

                            <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#686b78]">
                                {food.shortDescription}
                            </p>

                            <span className="mt-4 inline-flex items-center text-sm font-medium text-[#fc8019]">
                                View Details →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}