import { Food } from "@/lib/types";

interface FoodHeroProps {
    food: Food;
}

export default function FoodHero({
    food,
}: FoodHeroProps) {
    return (
        <section className="bg-[#fffaf5] border-b border-[#e9e9eb]">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid gap-8 md:grid-cols-[400px_1fr] md:items-center">
                    <div className="overflow-hidden rounded-3xl">
                        <img
                            src={food.image?.url ?? ""}
                            alt={food.name}
                            className="h-72 w-full object-cover"
                        />
                    </div>

                    <div>
                        <div className="flex flex-wrap gap-2">
                            {food.foodCategories.map((category) => (
                                <span
                                    key={category.id}
                                    className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-[#fc8019]"
                                >
                                    {category.name}
                                </span>
                            ))}
                        </div>

                        <h1 className="mt-4 text-4xl font-bold text-[#282c3f]">
                            {food.name}
                        </h1>

                        <div
                            className="prose mt-4 max-w-none text-[#686b78]"
                            dangerouslySetInnerHTML={{
                                __html: food?.heroDescription?.html ?? "",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}