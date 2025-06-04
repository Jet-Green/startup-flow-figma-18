
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Music, Users, Brain, Heart, Star, Clock } from 'lucide-react';

const ImprovSchool = () => {
  const programs = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Программы для взрослых",
      description: "Развитие креативности, командной работы и навыков принятия решений в условиях неопределенности",
      duration: "8-12 недель",
      price: "от 25 000 ₽"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Программы для детей",
      description: "Всестороннее развитие творческого мышления, эмоционального интеллекта и социальных навыков",
      duration: "6-10 недель", 
      price: "от 15 000 ₽"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Корпоративные программы",
      description: "Тимбилдинг, развитие лидерских качеств и улучшение коммуникации в коллективе",
      duration: "2-4 дня",
      price: "от 50 000 ₽"
    }
  ];

  const benefits = [
    "Развитие креативного мышления",
    "Улучшение командной работы",
    "Навыки работы с неопределенностью",
    "Эмоциональная регуляция",
    "Синтез восточных и западных традиций",
    "Индивидуальный подход к каждому"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-600 hover:bg-purple-100">
              «Звук — основа мира»
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Школа Русского{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Импрова
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Культурно-просветительское сообщество, раскрывающее потенциал импровизации 
              в синтезе восточных и западных традиций. Импровизация как мост, соединяющий 
              Запад и Восток, традиции и инновации.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3"
              >
                Записаться на пробное занятие
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Философия школы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-700 mb-6">
                  Школа Русского Импрова — это культурно-просветительское сообщество, 
                  ставящее своей целью раскрытие потенциала импровизации в синтезе 
                  восточных и западных традиций.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Здесь импровизация — мост, нечто соединяющее моментом Запад и Восток, 
                  архаику, традиции и инновации, зрителя и артиста, порядок и хаос.
                </p>
                <p className="text-lg text-gray-700">
                  В современном мире креативность и способность эффективно действовать 
                  в условиях неопределенности играют ключевую роль.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                    <Music className="w-24 h-24 text-purple-600" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что даёт обучение
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Участники научатся использовать принципы и механику импровизации 
              для улучшения различных аспектов жизни и работы
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Инновационные образовательные программы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Программы для детей и взрослых, адаптированные под разные цели и уровни подготовки
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-600">
                      {program.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    {program.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {program.price}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  Курс по музыкальной импровизации
                </CardTitle>
                <p className="text-purple-100 mt-2">
                  Развитие навыков через музыку и движение
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Что включает курс:
                    </h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">Основы музыкальной импровизации</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">Развитие творческого мышления</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">Техники работы в команде</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">Управление эмоциями</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">Принятие решений в неопределенности</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                      <div className="text-3xl font-bold text-gray-900 mb-2">12 занятий</div>
                      <div className="text-gray-600 mb-4">Полный курс</div>
                      <div className="text-2xl font-bold text-purple-600 mb-4">от 20 000 ₽</div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        Записаться на курс
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Откройте свой творческий потенциал
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу и начните путь к развитию креативности 
            и навыков работы в условиях неопределенности
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-3"
            >
              Пробное занятие бесплатно
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImprovSchool;
