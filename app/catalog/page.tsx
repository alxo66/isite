import CatalogHeader from '@/components/CatalogHeader'
import ProductGrid from '@/components/ProductGrid'

export const metadata = {
  title: 'Каталог | iPhone Store',
}

export default function CatalogPage() {
  return (
    <section className="container mx-auto px-4 py-10">
      <CatalogHeader />
      <ProductGrid />
    </section>
  )
}
