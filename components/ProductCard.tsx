import Image from 'next/image'
import { Product } from '@/app/data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5 flex flex-col">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-500 mb-3">{product.subtitle}</p>

      <div className="mt-auto">
        <div className="text-xl font-bold mb-3">${product.price}</div>
        <button className="w-full bg-blue-600 text-white rounded-xl py-2 hover:bg-blue-700 transition">
          В корзину
        </button>
      </div>
    </div>
  )
}
