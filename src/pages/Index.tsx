
import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, TrendingUp, Users, Lightbulb, Building, Target, Zap } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const navigate = useNavigate()

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Менторство",
      description: "Полное сопровождение проектов от идеи до масштабирования и выхода на международный уровень",
      link: "/startups",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: "Школа Русского Импрова",
      description: "Развитие креативности и действий в условиях неопределенности",
      link: "/improv-school",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Консалтинг",
      description: "Стратегическое планирование, автоматизация и HR-консалтинг",
      link: "/consulting",
    },
  ]

  const cases = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Fintech стартап",
      description: "Помог команде из 3 человек запустить платежную платформу, которая за 18 месяцев достигла оборота $2М",
      results: ["Рост выручки в 15 раз", "Команда выросла до 25 человек", "Привлечено $500К инвестиций"],
      industry: "Финтех"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "E-commerce платформа",
      description: "Оптимизировал бизнес-процессы для маркетплейса, увеличив конверсию на 40%",
      results: ["Конверсия +40%", "Время обработки заказов -60%", "Автоматизация 80% процессов"],
      industry: "E-commerce"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "EdTech проект",
      description: "Разработал стратегию выхода на международный рынок для образовательной платформы",
      results: ["Выход в 5 стран", "База пользователей 50К+", "Монетизация $100К/месяц"],
      industry: "Образование"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ваш путь к успеху{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                начинается здесь
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Развитие креативного потенциала, стратегический консалтинг и менторство для технологических стартапов.
              Синтез традиций и инноваций востока и запада для достижения выдающихся результатов.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Основные направления</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Комплексный подход к развитию бизнеса и личности</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg"
                onClick={() => navigate(service.link)}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center justify-center text-blue-600 group-hover:text-purple-600 transition-colors">
                    <span className="font-medium">Подробнее</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Успешные кейсы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Реальные истории роста и трансформации бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="p-3 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {caseItem.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {caseItem.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{caseItem.title}</h3>
                  <p className="text-gray-600 mb-4">{caseItem.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm">Результаты:</h4>
                    <ul className="space-y-1">
                      {caseItem.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-gray-600 flex items-center">
                          <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Готовы начать свой путь к успеху?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь со мной для обсуждения вашего проекта или записи на консультацию
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3">
            Связаться со мной
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Index
