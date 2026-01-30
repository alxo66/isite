export interface Product {
  id: number
  name: string
  category: string
  price: number
  oldPrice?: number
  description: string
  features: string[]
  colors: string[]
  storage: string[]
  imageColor: string
  imageUrl?: string
  rating: number
  reviews: number
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    category: "iPhone",
    price: 1399,
    oldPrice: 1499,
    description: "Самый мощный iPhone с технологией Apple Intelligence",
    features: [
      "Динамический остров",
      "Always-On дисплей",
      "A18 Pro chip",
      "48MP основная камера",
      "Титановый корпус"
    ],
    colors: ["Титановый черный", "Титановый белый", "Титановый синий"],
    storage: ["256GB", "512GB", "1TB"],
    imageColor: "#1D1D1F",
    rating: 4.9,
    reviews: 342,
    inStock: true
  },
  {
    id: 2,
    name: "iPhone 16 Pro",
    category: "iPhone",
    price: 1199,
    description: "Профессиональная камера в компактном корпусе",
    features: [
      "ProMotion дисплей",
      "120Hz частота обновления",
      "3x телеобъектив",
      "Функция Action",
      "iOS 18"
    ],
    colors: ["Черный", "Синий", "Белый", "Натуральный титан"],
    storage: ["128GB", "256GB", "512GB"],
    imageColor: "#007AFF",
    rating: 4.8,
    reviews: 256,
    inStock: true
  },
  {
    id: 3,
    name: "iPhone 16 Plus",
    category: "iPhone",
    price: 999,
    description: "Большой дисплей и долгий срок работы батареи",
    features: [
      "Дисплей 6.7 дюйма",
      "Батарея на 2 дня",
      "Двойная камера 48MP",
      "USB-C",
      "Ceramic Shield"
    ],
    colors: ["Черный", "Синий", "Розовый", "Желтый"],
    storage: ["128GB", "256GB"],
    imageColor: "#FF2D55",
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 4,
    name: "iPhone 16",
    category: "iPhone",
    price: 899,
    description: "Сбалансированный iPhone для большинства пользователей",
    features: [
      "A16 Bionic chip",
      "6.1-дюймовый Super Retina XDR",
      "Новая основная камера 48MP",
      "Экстренная помощь через спутник",
      "Roadside Assistance"
    ],
    colors: ["Синий", "Черный", "Зеленый", "Розовый"],
    storage: ["128GB", "256GB"],
    imageColor: "#32D74B",
    rating: 4.7,
    reviews: 412,
    inStock: true
  },
  {
    id: 5,
    name: "iPhone 15 Pro Max",
    category: "iPhone",
    price: 1099,
    oldPrice: 1299,
    description: "Титановый дизайн и кнопка действия",
    features: [
      "Титановый корпус",
      "Кнопка Action",
      "A17 Pro chip",
      "5x телеобъектив",
      "USB 3 скоростной порт"
    ],
    colors: ["Титановый черный", "Титановый белый", "Титановый синий"],
    storage: ["256GB", "512GB", "1TB"],
    imageColor: "#5E5E5E",
    rating: 4.8,
    reviews: 567,
    inStock: true
  },
  {
    id: 6,
    name: "Apple MacBook Air 13\" M5",
    category: "Mac",
    price: 1299,
    description: "Невероятно тонкий и мощный ноутбук",
    features: [
      "Чип Apple M5",
      "13.6-дюймовый Liquid Retina",
      "До 18 часов работы",
      "1080p камера FaceTime HD",
      "MagSafe 3"
    ],
    colors: ["Полночь", "Звездный свет", "Космический серый"],
    storage: ["256GB", "512GB", "1TB"],
    imageColor: "#A2AAAD",
    rating: 4.9,
    reviews: 234,
    inStock: true
  },
  {
    id: 7,
    name: "iPad Pro M4",
    category: "iPad",
    price: 1099,
    description: "Суперкомпьютер для творчества",
    features: [
      "Чип M4",
      "Дисплей Ultra Retina XDR",
      "Apple Pencil Pro",
      "Magic Keyboard",
      "5G поддержка"
    ],
    colors: ["Космический черный", "Серебристый"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    imageColor: "#D1D1D6",
    rating: 4.8,
    reviews: 156,
    inStock: true
  },
  {
    id: 8,
    name: "iPad Air",
    category: "iPad",
    price: 799,
    description: "Мощный. Разносторонний. Невероятно портативный.",
    features: [
      "Чип M2",
      "11-дюймовый Liquid Retina",
      "Поддержка Apple Pencil",
      "Magic Keyboard",
      "5G поддержка"
    ],
    colors: ["Синий", "Лиловый", "Звездный свет", "Космический серый"],
    storage: ["128GB", "256GB"],
    imageColor: "#BF5AF2",
    rating: 4.7,
    reviews: 289,
    inStock: true
  },
  {
    id: 9,
    name: "AirPods Pro 2",
    category: "Accessories",
    price: 249,
    description: "Активное шумоподавление нового уровня",
    features: [
      "Активное шумоподавление",
      "Пространственное аудио",
      "Адаптивная прозрачность",
      "Водостойкость",
      "До 30 часов работы"
    ],
    colors: ["Белый"],
    storage: [],
    imageColor: "#F5F5F7",
    rating: 4.8,
    reviews: 892,
    inStock: true
  },
  {
    id: 10,
    name: "Mac 14 Pro M5",
    category: "Mac",
    price: 1999,
    description: "Идеальный компьютер для профессионалов",
    features: [
      "Чип Apple M5 Pro/Max",
      "14.2-дюймовый Liquid Retina XDR",
      "До 96GB памяти",
      "До 8TB памяти",
      "Порты HDMI, SDXC, Thunderbolt 4"
    ],
    colors: ["Космический черный", "Серебристый"],
    storage: ["512GB", "1TB", "2TB", "4TB", "8TB"],
    imageColor: "#1D1D1F",
    rating: 4.9,
    reviews: 134,
    inStock: true
  },
  {
    id: 11,
    name: "iPhone 16е",
    category: "iPhone",
    price: 699,
    description: "Доступный iPhone с отличной камерой",
    features: [
      "A15 Bionic chip",
      "6.1-дюймовый Super Retina XDR",
      "12MP двойная камера",
      "Face ID",
      "Ceramic Shield"
    ],
    colors: ["Красный", "Черный", "Синий", "Фиолетовый"],
    storage: ["64GB", "128GB"],
    imageColor: "#FF3B30",
    rating: 4.6,
    reviews: 321,
    inStock: true
  },
  {
    id: 12,
    name: "iPhone 17 Pro",
    category: "iPhone",
    price: 1499,
    description: "Будущее уже здесь - предзаказ",
    features: [
      "A19 Pro chip",
      "Складной дизайн",
      "Улучшенная термосистема",
      "Квантовые камеры",
      "ИИ процессор"
    ],
    colors: ["Космический черный", "Лунный свет", "Марсианский красный"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    imageColor: "#FF9500",
    rating: 4.9,
    reviews: 89,
    inStock: false
  }
]
  {
    id: 7,
    name: "iPhone 16е",
    category: "iPhone",
    price: 699,
    description: "Доступный iPhone с отличной камерой",
    features: [
      "A15 Bionic chip",
      "6.1-дюймовый Super Retina XDR",
      "12MP двойная камера",
      "Face ID",
      "Ceramic Shield"
    ],
    colors: ["Красный", "Черный", "Синий", "Фиолетовый"],
    storage: ["64GB", "128GB"],
    imageColor: "#FF3B30",
    rating: 4.6,
    reviews: 321,
    inStock: true
  },
  {
    id: 8,
    name: "iPhone 17 Pro",
    category: "iPhone",
    price: 1499,
    description: "Будущее уже здесь - предзаказ",
    features: [
      "A19 Pro chip",
      "Складной дизайн",
      "Улучшенная термосистема",
      "Квантовые камеры",
      "ИИ процессор"
    ],
    colors: ["Космический черный", "Лунный свет", "Марсианский красный"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    imageColor: "#FF9500",
    rating: 4.9,
    reviews: 89,
    inStock: false
  },
  {
    id: 9,
    name: "iPhone 15",
    category: "iPhone",
    price: 799,
    description: "Классический дизайн, современные технологии",
    features: [
      "A16 Bionic chip",
      "Динамический остров",
      "48MP основная камера",
      "USB-C",
      "iOS 17"
    ],
    colors: ["Черный", "Синий", "Зеленый", "Розовый", "Желтый"],
    storage: ["128GB", "256GB"],
    imageColor: "#34C759",
    rating: 4.7,
    reviews: 543,
    inStock: true
  },
  {
    id: 10,
    name: "iPhone 15 Pro Max",
    category: "iPhone",
    price: 1199,
    oldPrice: 1299,
    description: "Флагман с титановым корпусом",
    features: [
      "A17 Pro chip",
      "Титановый корпус",
      "5x телеобъектив",
      "Action кнопка",
      "USB 3"
    ],
    colors: ["Титановый черный", "Титановый белый", "Титановый синий"],
    storage: ["256GB", "512GB", "1TB"],
    imageColor: "#8E8E93",
    rating: 4.9,
    reviews: 432,
    inStock: true
  },
  {
    id: 11,
    name: "Apple MacBook Air 13",
    category: "Mac",
    price: 1299,
    description: "Невероятно тонкий и мощный ноутбук",
    features: [
      "Чип Apple M5",
      "13.6-дюймовый Liquid Retina",
      "До 18 часов работы",
      "1080p камера FaceTime HD",
      "MagSafe 3"
    ],
    colors: ["Полночь", "Звездный свет", "Космический серый"],
    storage: ["256GB", "512GB", "1TB"],
    imageColor: "#A2AAAD",
    rating: 4.9,
    reviews: 234,
    inStock: true
  },
  {
    id: 12,
    name: "Ipad Air",
    category: "iPad",
    price: 799,
    description: "Мощный. Разносторонний. Невероятно портативный.",
    features: [
      "Чип M2",
      "11-дюймовый Liquid Retina",
      "Поддержка Apple Pencil",
      "Magic Keyboard",
      "5G поддержка"
    ],
    colors: ["Синий", "Лиловый", "Звездный свет", "Космический серый"],
    storage: ["128GB", "256GB"],
    imageColor: "#BF5AF2",
    rating: 4.7,
    reviews: 289,
    inStock: true
  },
  {
    id: 13,
    name: "Ipad pro",
    category: "iPad",
    price: 1099,
    description: "Суперкомпьютер для творчества",
    features: [
      "Чип M4",
      "Дисплей Ultra Retina XDR",
      "Apple Pencil Pro",
      "Magic Keyboard",
      "5G поддержка"
    ],
    colors: ["Космический черный", "Серебристый"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    imageColor: "#D1D1D6",
    rating: 4.8,
    reviews: 156,
    inStock: true
  },
  {
    id: 14,
    name: "Mac 14 про м5",
    category: "Mac",
    price: 1999,
    description: "Идеальный компьютер для профессионалов",
    features: [
      "Чип Apple M5 Pro/Max",
      "14.2-дюймовый Liquid Retina XDR",
      "До 96GB памяти",
      "До 8TB памяти",
      "Порты HDMI, SDXC, Thunderbolt 4"
    ],
    colors: ["Космический черный", "Серебристый"],
    storage: ["512GB", "1TB", "2TB", "4TB", "8TB"],
    imageColor: "#1D1D1F",
    rating: 4.9,
    reviews: 134,
    inStock: true
  },
  {
    id: 15,
    name: "AirPods Pro 2",
    category: "Accessories",
    price: 249,
    description: "Активное шумоподавление нового уровня",
    features: [
      "Активное шумоподавление",
      "Пространственное аудио",
      "Адаптивная прозрачность",
      "Водостойкость",
      "До 30 часов работы"
    ],
    colors: ["Белый"],
    storage: [],
    imageColor: "#F5F5F7",
    rating: 4.8,
    reviews: 892,
    inStock: true
  }
]
