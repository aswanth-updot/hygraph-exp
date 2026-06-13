import { getProductBySlug } from "@/lib/products";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
    if (!product) {
    return notFound();
  }
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">
        <div className=" rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={product.thumbnail?.url}
            alt={product.productName}
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.productCategories?.map((cat) => (
              <span
                key={cat.id}
                className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium"
              >
                {cat.name}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.productName}
          </h1>

          <p className="text-3xl font-bold text-gray-900 mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-500 text-sm mb-6">
            Available Quantity: {product.quantity}
          </p>

          <div
            className="prose prose-sm text-gray-600 mb-8"
            dangerouslySetInnerHTML={{ __html: product.description?.html || "" }}
          />

          <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}