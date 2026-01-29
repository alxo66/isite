import ProductCard from '@/components/ProductCard'

const allProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199,
    oldPrice: 1299,
    imageColor: "#F5F5F7",
    rating: 4.9,
    reviews: 245,
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 999,
    imageColor: "#E8E8ED",
    rating: 4.8,
    reviews: 189,
  },
  {
    id: 3,
    name: "iPhone 15",
    price: 799,
    imageColor: "#F5F5F7",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "iPhone 14 Pro",
    price: 899,
    oldPrice: 999,
    imageColor: "#E8E8ED",
    rating: 4.8,
    reviews: 312,
  },
  {
    id: 5,
    name: "iPhone 14",
    price: 699,
    imageColor: "#F5F5F7",
    rating: 4.6,
    reviews: 421,
  },
  {
    id: 6,
    name: "iPhone 13 Pro",
    price: 849,
    oldPrice: 949,
    imageColor: "#E8E8ED",
    rating: 4.7,
    reviews: 567,
  },
  {
    id: 7,
    name: "iPhone 13",
    price: 599,
    imageColor: "#F5F5F7",
    rating: 4.5,
    reviews: 489,
  },
  {
    id: 8,
    name: "iPhone SE",
    price: 429,
    imageColor: "#E8E8ED",
    rating: 4.3,
    reviews: 234,
  },
]

export default function CatalogPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Каталог iPhone</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
