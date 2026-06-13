import CategoryFilter from "@/components/categoryFilter";
import { allCategories } from "@/lib/categories";
import { allProducts } from "@/lib/products";
import Link from "next/link";

interface HomeProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { category } = await searchParams;

  const products = await allProducts(category);
  const categories = await allCategories();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      {/* Hero */}
      <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Collection
          </span>

          <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900">
            Discover Products
          </h1>

          <p className="mt-4 max-w-xl text-gray-500">
            Browse our curated collection of premium products across multiple
            categories.
          </p>
        </div>

        <CategoryFilter
          categories={categories || []}
          selected={category}
        />
      </div>

      {products?.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-16 text-center text-gray-500">
          No products found for this category.
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-3 xl:grid-cols-4">
          {products?.map((product) => (
            <Link
              key={product.id}
              href={`/${product.slug}`}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={product.thumbnail?.url}
                  alt={product.productName}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              <div className="p-5">
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                  {product.productName}
                </h2>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>

                  <span
                    className="
                      font-medium
                      text-blue-600
                      opacity-0
                      transition-opacity
                      group-hover:opacity-100
                      text-sm
                    "
                  >
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}