
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, BookOpen, Headphones, Video, Gift } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      title: "Книга: \"Импровизация в бизнесе\"",
      description: "Практическое руководство по применению принципов импровизации в корпоративной среде",
      price: "1 500 ₽",
      originalPrice: "2 000 ₽",
      image: "📚",
      category: "Книги",
      rating: 4.8,
      bestseller: true
    },
    {
      id: 2,
      title: "Аудиокурс: \"Венчурное финансирование\"",
      description: "12-часовой курс по привлечению инвестиций для технологических стартапов",
      price: "5 500 ₽",
      originalPrice: "7 000 ₽",
      image: "🎧",
      category: "Курсы",
      rating: 4.9,
      bestseller: false
    },
    {
      id: 3,
      title: "Видеокурс: \"Основы импровизации\"",
      description: "Базовый курс по развитию креативности и навыков импровизации",
      price: "3 500 ₽",
      originalPrice: null,
      image: "🎬",
      category: "Курсы",
      rating: 4.7,
      bestseller: false
    },
    {
      id: 4,
      title: "Набор методик \"Стартап-пакет\"",
      description: "Комплект шаблонов, чек-листов и методик для запуска стартапа",
      price: "2 500 ₽",
      originalPrice: "3 500 ₽",
      image: "📋",
      category: "Материалы",
      rating: 4.6,
      bestseller: true
    },
    {
      id: 5,
      title: "Медитативные практики для предпринимателей",
      description: "Аудиопрактики для снятия стресса и развития интуиции в бизнесе",
      price: "1 800 ₽",
      originalPrice: null,
      image: "🧘‍♂️",
      category: "Практики",
      rating: 4.5,
      bestseller: false
    },
    {
      id: 6,
      title: "Masterclass: \"Презентация для инвесторов\"",
      description: "Записанный мастер-класс по созданию эффективных pitch-презентаций",
      price: "4 200 ₽",
      originalPrice: "5 500 ₽",
      image: "💼",
      category: "Мастер-классы",
      rating: 4.8,
      bestseller: false
    }
  ];

  const categories = ["Все", "Книги", "Курсы", "Материалы", "Практики", "Мастер-классы"];
  const [selectedCategory, setSelectedCategory] = React.useState("Все");

  const filteredProducts = selectedCategory === "Все" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-600 hover:bg-orange-100">
              Магазин знаний
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Цифровые продукты{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                для развития
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Книги, курсы, методики и практические материалы для развития бизнеса 
              и личностного роста от эксперта в области стартапов и импровизации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3"
              >
                <Gift className="mr-2 w-5 h-5" />
                Специальные предложения
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3"
              >
                Новинки месяца
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 group relative">
                {product.bestseller && (
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white z-10">
                    Бестселлер
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  <Badge variant="outline" className="mx-auto mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {product.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-green-600 font-medium">
                        Скидка {Math.round((1 - parseInt(product.price.replace(/\D/g, '')) / parseInt(product.originalPrice.replace(/\D/g, ''))) * 100)}%
                      </div>
                    )}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white">
                    <ShoppingCart className="mr-2 w-4 h-4" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Специальные предложения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Эксклюзивные пакеты и скидки для максимальной пользы
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader className="text-center">
                <Badge className="mx-auto mb-4 bg-orange-500 text-white">
                  Комплект для стартапера
                </Badge>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Все для запуска стартапа
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">8 500 ₽</div>
                  <div className="text-lg text-gray-500 line-through">12 000 ₽</div>
                  <div className="text-green-600 font-medium">Экономия 3 500 ₽</div>
                </div>
                <ul className="text-left space-y-2 mb-6 text-gray-700">
                  <li>• Аудиокурс "Венчурное финансирование"</li>
                  <li>• Набор методик "Стартап-пакет"</li>
                  <li>• Masterclass "Презентация для инвесторов"</li>
                  <li>• Бонус: Консультация 30 минут</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white">
                  Купить комплект
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader className="text-center">
                <Badge className="mx-auto mb-4 bg-purple-500 text-white">
                  Путь к креативности
                </Badge>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Развитие через импровизацию
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">6 800 ₽</div>
                  <div className="text-lg text-gray-500 line-through">8 800 ₽</div>
                  <div className="text-green-600 font-medium">Экономия 2 000 ₽</div>
                </div>
                <ul className="text-left space-y-2 mb-6 text-gray-700">
                  <li>• Книга "Импровизация в бизнесе"</li>
                  <li>• Видеокурс "Основы импровизации"</li>
                  <li>• Медитативные практики</li>
                  <li>• Бонус: Доступ к закрытому сообществу</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  Купить комплект
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Подписка на новинки
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Получайте уведомления о новых продуктах и эксклюзивных скидках первыми
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-white text-orange-600 hover:bg-gray-50 px-6 py-3">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
