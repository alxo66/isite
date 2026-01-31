'use client'

import Image from 'next/image'
import { Product } from '@/data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col">

      <div className="relative w-full h-56 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{product.description}</p>

      <div className="mt-auto pt-4">
        <div className="text-xl font-bold mb-3">${product.price}</div>
        <button className="w-full bg-black text-white py-2 rounded-xl">
          Купить
        </button>
      </div>
    </div>
  )
}
