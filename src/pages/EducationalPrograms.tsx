
import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Music, Users, Brain, Target, CheckCircle, Lightbulb } from "lucide-react"

const EducationalPrograms = () => {
  const courseGoals = [
    {
      title: "Развитие креативного мышления",
      description: "Участники освоят техники импровизации, которые помогут им мыслить нестандартно и находить оригинальные решения в условиях неопределенности.",
      icon: Brain
    },
    {
      title: "Улучшение коммуникации",
      description: "Музыкальная импровизация требует активного слушания и взаимодействия, что способствует развитию навыков эффективной коммуникации внутри команды.",
      icon: Users
    },
    {
      title: "Работа в команде",
      description: "Участники научатся работать в группе, принимая во внимание идеи и предложения других.",
      icon: Target
    },
    {
      title: "Адаптация к изменениям",
      description: "Импровизация учит гибкости и способности быстро реагировать на изменения.",
      icon: Lightbulb
    },
    {
      title: "Снижение стресса и развитие эмоционального интеллекта",
      description: "Музыка помогает расслабиться и наладить эмоциональный контакт, что способствует лучшему восприятию информации и взаимодействию с коллегами.",
      icon: Music
    }
  ]

  const formatItems = [
    "Интерактивные мастер-классы: Участники будут вовлечены в практические упражнения, направленные на развитие импровизационных навыков.",
    "Групповые задания: Команды будут работать над совместными проектами, используя принципы импровизации для создания инновационных решений.",
    "Обсуждения и анализ: Регулярные сессии обратной связи, где участники смогут делиться своим опытом и получать рекомендации по улучшению."
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-600 hover:bg-blue-100">
              Образовательные программы
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Курс по импровизации для{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                лидеров
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
              "Музыка как инструмент креативности и командной работы"
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3"
                onClick={() => window.open("https://t.me/dmitry_syrtsov", "_blank")}
              >
                Записаться на курс
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Описание курса
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                В современном мире креативность и способность адаптироваться к изменениям играют ключевую роль в успехе. 
                Курс по музыкальной импровизации предлагает уникальную возможность развить эти навыки через музыку.
              </p>
              <p>
                Участники научатся использовать принципы импровизации для улучшения командной работы, повышения 
                креативности и эффективного решения проблем.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Goals */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Цели курса
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseGoals.map((goal, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl w-fit">
                      <goal.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {goal.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {goal.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Format */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Формат занятий
            </h2>
            <div className="space-y-6">
              {formatItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы развить свои лидерские навыки через импровизацию?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему курсу и откройте новые возможности для креативности и командной работы
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3"
            onClick={() => window.open("https://t.me/dmitry_syrtsov", "_blank")}
          >
            Записаться на курс
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EducationalPrograms
