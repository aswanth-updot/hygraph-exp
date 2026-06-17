import CategoryBanner from "@/components/Category/categoryBanner";
import CategoryPills from "@/components/Category/categoryPills";
import FoodGrid from "@/components/Category/foodGrid";
import EmptyFoodsState from "@/components/Category/noFood";
import { allCategories, getCategoryBySlug } from "@/lib/categories";
import { allFood } from "@/lib/foods";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: Promise<{ params: { slug: string; }; }>) {
    const { slug } = await params;
    const category = await getCategoryBySlug(slug);
    if (!category) {
        return notFound();
    }
    const categories = await allCategories();
    const foods = await allFood(category.slug);
    return (
        <>
            <CategoryBanner category={category} />
            <CategoryPills activeSlug={category.slug} categories={categories ?? []} />
            {
                foods && foods?.length > 0 ? (
                    <FoodGrid foods={foods ?? []} />
                ) : (
                    <EmptyFoodsState />
                )
            }
        </>
    );
}