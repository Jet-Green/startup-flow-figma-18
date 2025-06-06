import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Users, TrendingUp, Cog, CheckCircle, Building, Lightbulb } from "lucide-react"

const Consulting = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Стратегическое планирование",
      description: "Разработка долгосрочной стратегии развития бизнеса, анализ рынка и конкурентов",
      features: ["SWOT-анализ", "Roadmap развития", "KPI и метрики", "Стратегия позиционирования"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "HR-консалтинг",
      description: "Построение эффективной HR-системы, подбор кадров и развитие команды",
      features: ["Подбор персонала", "Корпоративная культура", "Системы мотивации", "Развитие лидерства"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Стратегический маркетинг",
      description: "Комплексная маркетинговая стратегия для роста бизнеса и привлечения клиентов",
      features: ["Маркетинговая стратегия", "Брендинг", "Digital-маркетинг", "Аналитика и ROI"],
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Автоматизация процессов",
      description: "Оптимизация бизнес-процессов и внедрение систем автоматизации",
      features: ["CRM-системы", "ERP-решения", "Workflow автоматизация", "Интеграции API"],
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Аудит бизнес-процессов",
      description: "Глубокий анализ текущих процессов и разработка рекомендаций по улучшению",
      features: ["Анализ процессов", "Выявление узких мест", "Оптимизация workflow", "Внедрение best practices"],
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Организационное развитие",
      description: "Построение эффективной организационной структуры и системы управления",
      features: ["Оргструктура", "Процессы управления", "Система коммуникаций", "Change management"],
    },
  ]

  const packages = [
    {
      title: "Стартап",
      price: "от 100 000 ₽",
      description: "Для малого бизнеса и стартапов",
      features: ["Консультация 4 часа", "Базовый аудит процессов", "Рекомендации по развитию", "Поддержка 1 месяц"],
      color: "blue",
    },
    {
      title: "Бизнес",
      price: "от 150 000 ₽",
      description: "Для средних компаний",
      features: [
        "Консультации 12 часов",
        "Глубокий аудит",
        "Стратегический план",
        "Поддержка 3 месяца",
        "Внедрение решений",
      ],
      color: "purple",
      popular: true,
    },
    {
      title: "Энтерпрайз",
      price: "от 300 000 ₽",
      description: "Для крупных организаций",
      features: [
        "Безлимитные консультации",
        "Комплексная трансформация",
        "Команда экспертов",
        "Поддержка 6 месяцев",
        "Гарантия результата",
      ],
      color: "green",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-100 text-green-600 hover:bg-green-100">Стратегический консалтинг</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Трансформация бизнеса{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                через экспертизу
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Комплексный консалтинг для оптимизации бизнес-процессов, развития команды и достижения стратегических
              целей компании
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3">
                Бесплатная диагностика
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
              >
                Кейсы и результаты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Экспертные услуги консалтинга</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Индивидуальные решения для каждого этапа развития вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group h-full">
                <CardHeader>
                  <div className="mb-4 p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <div className="text-gray-600 group-hover:text-blue-600 transition-colors">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Пакеты консалтинговых услуг</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий формат сотрудничества в зависимости от масштаба задач
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? "ring-2 ring-purple-500 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        : "bg-gradient-to-r from-green-600 to-blue-600 text-white"
                    }`}
                  >
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Структурированный подход к решению бизнес-задач</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Диагностика", desc: "Анализ текущего состояния бизнеса" },
                { step: "02", title: "Стратегия", desc: "Разработка плана решений" },
                { step: "03", title: "Внедрение", desc: "Реализация рекомендаций" },
                { step: "04", title: "Поддержка", desc: "Контроль результатов" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы трансформировать свой бизнес?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Получите бесплатную диагностику и персональные рекомендации по развитию вашей компании
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-50 px-8 py-3">
              Бесплатная консультация
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
            >
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Consulting
