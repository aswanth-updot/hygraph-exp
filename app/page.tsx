import CategoryGrid from "@/components/Home/categoryGrid";
import HeroBanner from "@/components/Home/hero";
import { allCategories } from "@/lib/categories";

export default async function Home() {
  const categories = await allCategories();

  return (
    <>
      <HeroBanner />
      <CategoryGrid categories={categories ?? []} />
    </>
  );
}