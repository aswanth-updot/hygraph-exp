"use client";

import { usePathname, useRouter } from "next/navigation";
import { ProductCategories } from "@/lib/types";

interface CategoryFilterProps {
  categories: ProductCategories[];
  selected?: string;
}

export default function CategoryFilter({
  categories,
  selected,
}: CategoryFilterProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    router.push(value ? `${pathname}?category=${value}` : pathname);
  };

  return (
    <select
      value={selected || ""}
      onChange={handleChange}
      className="
        h-12
        min-w-[240px]
        rounded-xl
        border
        border-gray-200
        bg-white
        px-4
        text-sm
        shadow-sm
        outline-none
        transition
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500
      "
    >
      <option value="">All Categories</option>

      {categories.map((cat) => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}