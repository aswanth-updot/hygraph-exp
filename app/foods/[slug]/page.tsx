import FoodHero from "@/components/Food/foodHero";
import RestaurantGrid from "@/components/Food/restaurantsGrid";
import { getFoodBySlug } from "@/lib/foods";
import { allRestaurants } from "@/lib/restaurants";
import { notFound } from "next/navigation";

type PageProps = {
    params: Promise<{ slug: string; }>;
};

export default async function FoodPage({ params }: PageProps) {
    const { slug } = await params;
    const food = await getFoodBySlug(slug);
    const restaurants = await allRestaurants(slug);
    if (!food) {
        notFound();
    }
    return (
        <>
            <FoodHero food={food} />
            <RestaurantGrid restaurants={restaurants ?? []} />
        </>
    );
}