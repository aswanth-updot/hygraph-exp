import { Restaurant } from "@/lib/types";

interface RestaurantGridProps {
  restaurants: Restaurant[];
}

export default function RestaurantGrid({
  restaurants,
}: RestaurantGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-[#282c3f]">
        Restaurants Serving This Food
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="overflow-hidden rounded-2xl border border-[#e9e9eb] bg-white"
          >
            <img
              src={restaurant.image?.url}
              alt={restaurant.name}
              className="h-52 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#282c3f]">
                {restaurant.name}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#686b78]">
                {restaurant.description?.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}