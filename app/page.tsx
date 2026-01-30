"use client"

export const dynamic = 'force-dynamic'

import ClientLayout from "./client-layout";
import ProductCard from "@/components/ProductCard";
import WalletBalance from "@/components/WalletBalance";
import { Shield, Truck, Headphones, Bitcoin } from "lucide-react";

const products = [
  { id: 1, name: "iPhone 15 Pro Max", price: 1199, oldPrice: 1299, imageColor: "#F5F5F7", rating: 4.9, reviews: 245 },
  { id: 2, name: "iPhone 15 Pro", price: 999, imageColor: "#E8E8ED", rating: 4.8, reviews: 189 },
  { id: 3, name: "iPhone 15", price: 799, imageColor: "#F5F5F7", rating: 4.7, reviews: 156 },
  { id: 4, name: "iPhone 14 Pro", price: 899, oldPrice: 999, imageColor: "#E8E8ED", rating: 4.8, reviews: 312 },
];

const features = [
  { icon: <Shield />, title: "Гарантия 1 год", description: "Официальная гарантия от производителя" },
  { icon: <Truck />, title: "Быстрая доставка", description: "По всей России за 2-7 дней" },
  { icon: <Headphones />, title: "Поддержка 24/7", description: "Поможем с выбором и настройкой" },
  { icon: <Bitcoin />, title: "Крипто-платежи", description: "Без комиссий и посредников" },
];

export default function Home() {
  return (
    <ClientLayout>
      {/* Hero секция */}
      <section className="hero text-center py-16">
        <h1 className="text-4xl font-bold">Купите новый iPhone за криптовалюту</h1>
        <p className="mt-4 text-lg">
          Самый современный магазин iPhone в России — платите Bitcoin, Ethereum, USDT и другими криптовалютами.
          Без банков, без комиссий.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => (window.location.href = "/catalog")}
            className="btn-primary"
          >
            Перейти в каталог
          </button>

          <button
            onClick={() => (window.location.href = "/delivery")}
            className="btn-secondary"
          >
            Как купить
          </button>
        </div>
      </section>

      {/* Преимущества */}
      <section className="features grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        {features.map((feature, index) => (
          <div key={index} className="feature-card text-center">
            <div className="icon text-3xl text-blue-500">{feature.icon}</div>
            <h3 className="mt-2 font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Популярные товары */}
      <section className="products py-12">
        <h2 className="text-2xl font-bold text-center">Популярные модели</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Баланс кошелька */}
      <section className="wallet py-12">
        <WalletBalance />
      </section>
    </ClientLayout>
  );
}
