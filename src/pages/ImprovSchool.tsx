import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Music, Users, Brain, Heart, Star } from "lucide-react"

const ImprovSchool = () => {
  const teamMembers = [
    {
      name: "Дмитрий Сырцов",
      image: "/placeholder.svg",
      description:
        "основатель школы русского импрова, к.э.н., академический директор инновационных образовательных программ, исследователь и музыкант - мультиинструменталист, внесший свой вклад в развитие новой волны российской музыки, и, как музыкальный продюсер и музыкант сотрудничавший с разными российскими и зарубежными коллективами. Среди них - Кристоф Хан (Swans), и др.",
    },
    {
      name: "Сергей Храмцевич",
      image: "/placeholder.svg",
      description:
        "саксофонист и композитор, участник многих стилистически разнообразных музыкальных проектов. Основатель и композитор инди-джаз-группы «THE RIG (Russian Improv Group)», активный участник индустриально-джаз-панк-группы «The OMY» и солист «Kymatic Ensemble». Автор сольного дарк-джазового проекта «Sergei Khramtcevich». Также участник групп: «Baritone Domination», «Интурист», «ГШ», «TOPOT Arkestra», «Godse», проекта «КОЛОКОЛ» техно-музыканта Филиппа Горбачева и множеста других коллабораций, от сотрудничества с Петаром Мартичем и GONE.Fludd, Собаками табака и Kristof Hahn (Swans), группой GNOD (UK) и Faust (DE).",
    },
    {
      name: "Иннокентий Людевиг-Чернецкий",
      image: "/placeholder.svg",
      description:
        "(виолончель), антрополог, медиа-художник, музыкальный терапевт. Цель его метода - создание новых путей взаимодействия человека с собой и миром. Его метод позволяет сместить фокус внимания с временных и внешних форм на более глубокие слои психики, за пределы субъект-объектных отношений, выстраивая чувственный диалог в пространстве звука. «Я верю, что музыка и звучание в целом — это канал обращения ко всему сущему. В художественных практиках я возвращаюсь к истокам и разрабатываю новые способы звучания, мышления и действия. Вместе с этим я формирую пространство ритуала — обращаюсь к обрядовой деятельности, что само по себе оказывает глубокий терапевтический эффект и способствует психическому восстановлению человека. Во многом, цель моей работы — очищение звучанием, возвращение к настоящему себе»",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-600 hover:bg-purple-100">«Звук — основа мира»</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Школа Русского{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Импрова
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Культурно-просветительское сообщество, ставящее своей целью раскрытие потенциала импровизации в синтезе
              восточных и западных традиций. Здесь импровизация - мост, соединяющий Запад и Восток, архаику, традиции и
              инновации, зрителя и артиста, порядок и хаос.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3"
                onClick={() => window.open("https://t.me/dmitry_syrtsov", "_blank")}
              >
                Записаться на занятие
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Философия школы</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="text-left space-y-6">
                <p className="text-lg text-gray-700">
                  В современном мире креативность и способность эффективно действовать в условиях неопределенности
                  играют ключевую роль.
                </p>
                <p className="text-lg text-gray-700">
                  Богатейший опыт импровизации в музыке открывает широчайшее междисциплинарное поле для развития навыка
                  эффективного действия в условиях неопределенности и развития и реализации творческого потенциала
                  личности за пределами музыкального контекста.
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

      {/* Interdisciplinary Approach */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Междисциплинарный подход</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl w-fit">
                    <Brain className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Развитие креативности</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Освобождение творческого потенциала через музыкальную импровизацию</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl w-fit">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Эмоциональная регуляция</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Управление эмоциями и состояниями через звуковые практики</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl w-fit">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Командное взаимодействие</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Развитие навыков коллективного творчества и синхронизации</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Команда</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наши преподаватели и менторы - признанные мастера импровизации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                    <p className="text-sm leading-relaxed text-gray-200 max-h-48 overflow-y-auto mb-4">
                      {member.description}
                    </p>
                  </div>
                </div>

                {/* Name overlay for mobile */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:opacity-0 group-hover:opacity-100">
                  <h3 className="text-white font-bold text-lg">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Откройте свой творческий потенциал</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу и начните путь к развитию креативности и навыков работы в условиях
            неопределенности через искусство импровизации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-3"
              onClick={() => window.open("https://t.me/dmitry_syrtsov", "_blank")}
            >
              Записаться на занятие
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ImprovSchool
