
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Users, Briefcase, Target, Cog } from 'lucide-react';

const Startups = () => {
  const services = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Упаковка и медиа презентация проекта",
      description: "Создание лендингов, презентаций и медиа-материалов для стартапа и личного бренда фаундера",
      included: true
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Заявка на гранты",
      description: "Подготовка документации и сопровождение процесса получения грантового финансирования"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Юридическое сопровождение",
      description: "Регистрация, защита интеллектуальной собственности, составление контрактов"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Разработка стратегии",
      description: "От бизнес-модели до стратегии масштабирования и выхода на новые рынки"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Аудит бизнес-процессов",
      description: "Анализ и оптимизация существующих процессов, внедрение лучших практик"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "HR-консалтинг",
      description: "Подбор кадров, построение корпоративной культуры, системы мотивации"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Стратегический маркетинг",
      description: "Разработка маркетинговой стратегии и каналов привлечения клиентов"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Автоматизация",
      description: "Внедрение систем автоматизации бизнес-процессов и CRM-систем"
    }
  ];

  const packageFeatures = [
    "Консультация по запуску сайта",
    "Создание лендинга под ключ",
    "Структурирование проекта",
    "Презентация для инвесторов",
    "Персональный бренд фаундера"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-600 hover:bg-blue-100">
              Менторство для технологических стартапов
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              От идеи до{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                успешного стартапа
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Полное сопровождение технологических проектов: от разработки стратегии 
              до привлечения инвестиций и масштабирования бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3"
              >
                Записаться на консультацию
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                Узнать о курсе
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Package */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader className="text-center pb-8">
                <Badge className="mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Популярное предложение
                </Badge>
                <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Упаковка фаундера стартапа
                </CardTitle>
                <p className="text-xl text-gray-600">
                  Комплексное решение для презентации вашего проекта инвесторам и клиентам
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Что входит в пакет:</h3>
                    <ul className="space-y-3">
                      {packageFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                      <div className="text-3xl font-bold text-gray-900 mb-2">от 150 000 ₽</div>
                      <div className="text-gray-600 mb-4">Полный пакет упаковки</div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        Заказать упаковку
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Образовательная программа
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Получите знания и навыки, необходимые для успешного запуска стартапа
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Курс "Венчурные инвестиции"
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Углубленная программа по привлечению венчурного финансирования, 
                      включающая практические кейсы, работу с инвесторами и подготовку 
                      к презентациям перед венчурными фондами.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">12 недель интенсивного обучения</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Персональное менторство</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Доступ к сети инвесторов</span>
                      </li>
                    </ul>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Записаться на курс
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                      <div className="text-3xl font-bold text-gray-900 mb-2">от 75 000 ₽</div>
                      <div className="text-gray-600">Полный курс</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Полный спектр услуг для стартапов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Индивидуальный подход к каждому проекту и этапу развития бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-all duration-300 ${
                  service.included ? 'border-blue-200 bg-blue-50' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className={`p-2 rounded-lg ${
                      service.included ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {service.title}
                        {service.included && (
                          <Badge className="ml-2 bg-blue-100 text-blue-600 text-xs">
                            В упаковке
                          </Badge>
                        )}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы запустить успешный стартап?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию и получите индивидуальный план развития вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3"
            >
              Бесплатная консультация
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Startups;
