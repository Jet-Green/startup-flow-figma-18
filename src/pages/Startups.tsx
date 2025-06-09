import React, { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  BookOpen,
  Target,
  Globe,
  Lightbulb,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const Startups = () => {
  const [showCreativeEconomyDefinition, setShowCreativeEconomyDefinition] = useState(false)

  const level1Modules = [
    "Маркетинг и культурный код предпринимателя",
    "Инвестиционный анализ проектов",
    "Международное право интеллектуальной собственности (Уровень 1) и оценка ИС",
    "Инструменты и формы государственной поддержки технологического предпринимательства и проектов креативной экономики",
    "Венчурное инвестирование",
    "Медиа-менеджмент в инновационном бизнесе",
  ]

  const level1Outcomes = [
    "создать стратегию развития своего проекта",
    "составить инвестиционный план",
    "защитить свою интеллектуальную собственность",
    "подать документы для получения государственной поддержки бизнеса",
    "создать медиа-план и упаковать свой проект для привлечения инвестиций",
  ]

  const level2Modules = [
    "Психология креативности и личностная эффективность в условиях неопределенности",
    "Эпигенетика и генеалогия",
    "Менеджмент и управление проектами",
    "Управление интеллектуальными ресурсами компании и корпоративная культура в новых условиях. Креативность, как стратегия",
    "Инструменты государственной поддержки технологического предпринимательства и проектов креативной экономики (Уровень 2)",
    "Право интеллектуальной собственности и институт залога интеллектуальной собственности (Уровень 2)",
  ]

  const level2Features = [
    "Системный анализ российского и мирового опыта эффективного управления интеллектуальными ресурсами коллектива",
    "Практические инструменты для построения современных команд и корпоративных культур, основанных на личном культурном коде основателя",
    "Продвинутые инструменты охраны, управления и качественной монетизации результатов творческого труда",
  ]

  const mentors = [
    {
      name: "Сырцов Д.Н.",
      title: "к.э.н., Академический директор образовательных программ",
      description:
        "Специализация - инновационное развитие и весь спектр проектов креативной экономики. Сопровождение бизнеса на всех этапах развития. Обширный опыт в креативной экономике, праве интеллектуальной собственности, привлечении инвестиций, стратегическом маркетинге, PM и психологии. Более 30 запущенных стартапов и проектов, некоторые входят в топ 100 в 2024 и 2025 года в России. Консультант в области международного права интеллектуальной собственности.",
    },
    {
      name: "Илья Степанов",
      title: "сооснователь Daily Challenge",
      description: "",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-600 hover:bg-blue-100">
              Менторство для инновационных стартапов
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Менторство для инновационных стартапов и проектов{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                креативной экономики
              </span>
            </h1>

            <div className="mb-6">
              <button
                onClick={() => setShowCreativeEconomyDefinition(!showCreativeEconomyDefinition)}
                className="inline-flex items-center text-blue-600 hover:text-purple-600 transition-colors"
              >
                <span className="mr-2">*</span>
                {showCreativeEconomyDefinition ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {showCreativeEconomyDefinition && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg text-left max-w-3xl mx-auto">
                  <p className="text-gray-700 text-sm">
                    <strong>Креативная экономика</strong> - сектор экономики, основанный на продаже товаров и услуг,
                    являющихся результатом творческой интеллектуальной деятельности, т.е. проекты монетизации объектов
                    интеллектуальной собственности
                  </p>
                </div>
              )}
            </div>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              От идеи до её воплощения и далее - к масштабированию на международном уровне
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3"
                onClick={() => window.open("https://t.me/dmitry_syrtsov", "_blank")}
              >
                Записаться на консультацию
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Инновационные практико-ориентированные образовательные программы
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              реализуемые совместно с ведущим Российским ВУЗом
            </p>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Инновационная образовательная методология для лидеров нового времени, соединяющих бизнес и искусство
            </p>
          </div>

          {/* Level 1 */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <Badge className="bg-blue-600 text-white">Уровень 1</Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">Посевная стадия</CardTitle>
                <p className="text-gray-600 mt-4">
                  Программа для фаундеров технологических стартапов и инициаторов проектов креативной экономики
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Структура курса:</h3>
                    <ul className="space-y-3">
                      {level1Modules.map((module, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      По завершению курса обучающийся сможет:
                    </h3>
                    <ul className="space-y-3">
                      {level1Outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Target className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mentors Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Менторы курса:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mentors.map((mentor, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">{mentor.name}</h4>
                        <p className="text-blue-600 mb-3">{mentor.title}</p>
                        {mentor.description && (
                          <p className="text-gray-600 text-sm leading-relaxed">{mentor.description}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Level 2 */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <Badge className="bg-purple-600 text-white">Уровень 2</Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">Масштабирование</CardTitle>
                <p className="text-gray-600 mt-4">
                  Управление интеллектуальными ресурсами компании: От MVP к масштабированию бизнеса. От культурного кода
                  предпринимателя к построению корпоративной культуры компании, реализуемой на основе богатейшей
                  традиции межкультурной коммуникации и культурного кода народов России.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Структура курса:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {level2Modules.map((module, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Данный курс содержит в себе:</h3>
                    <div className="space-y-4">
                      {level2Features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Level 3 */}
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <Badge className="bg-green-600 text-white">Уровень 3</Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">Выход на мировую арену</CardTitle>
                <p className="text-lg font-medium text-gray-800 mt-4">
                  Курс "Международный маркетинг инноваций в новых условиях. Экспорто-ориентированный культурно
                  гуманитарный продукт."
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Данный курс посвящен основам и особенностям международного маркетинга в новых условиях мировой
                    экономики. Охватывает ключевые аспекты теории и практики маркетинга на локальном и международном
                    уровнях, включая инструменты исследования рынков и построения маркетинговых стратегий, а также
                    управление брендом и маркетинговыми коммуникациями в локальной и международной среде с
                    использованием современных технологий.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Особое внимание уделено:</h4>
                    <p className="text-gray-700">
                      Межкультурной коммуникации и культурным основам международного маркетинга, что позволяет
                      использовать культурные особенности при создании и развитии экспорто-ориентированных
                      культурно-гуманитарных продуктов и экспорто-ориентированных производств.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать свой путь в креативной экономике?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Запишитесь на консультацию и получите индивидуальный план развития вашего проекта
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3"
            onClick={() => window.open("https://t.me/dmitry_syrtsov", "_blank")}
          >
            Записаться на консультацию
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Startups
