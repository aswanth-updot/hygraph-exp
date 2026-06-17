import { FoodCategory } from "@/lib/types";
import Image from "next/image";


export default function CategoryBanner({
    category,
}: {
    category: FoodCategory;
}) {
    return (
        <section className="border-b border-[#e9e9eb] bg-[#fffaf5]">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
                <div className="grid gap-8 md:grid-cols-[300px_1fr] md:items-center">
                    {/* Image */}
                    <div className="overflow-hidden rounded-2xl">
                        <Image
                            src={category?.image?.url ?? ""}
                            alt={category.name}
                            className="h-56 w-full object-cover"
                            height={56}
                            width={100}
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h1 className="text-3xl font-bold text-[#282c3f]">
                            {category.name}
                        </h1>

                        <div
                            className="prose prose-sm mt-4 max-w-none text-[#686b78]"
                            dangerouslySetInnerHTML={{
                                __html: category.description?.html ?? "",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}