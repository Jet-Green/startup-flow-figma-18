
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, BookOpen, Users, TrendingUp, Heart, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "50+ успешных проектов",
      description: "Помог запустить и масштабировать более 50 технологических стартапов"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "200+ довольных клиентов",
      description: "Работал с предпринимателями, корпорациями и образовательными учреждениями"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "5+ лет экспертизы",
      description: "Глубокий опыт в венчурном финансировании и развитии стартапов"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Автор методик",
      description: "Разработал уникальные программы развития креативности через импровизацию"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Синтез традиций",
      description: "Объединяю восточную мудрость и западные инновации для достижения лучших результатов"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Индивидуальный подход",
      description: "Каждый проект уникален, поэтому разрабатываю персональные стратегии развития"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Развитие людей",
      description: "Верю, что успех бизнеса начинается с развития человеческого потенциала"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-blue-100 text-blue-600 hover:bg-blue-100">
                  Обо мне
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Дмитрий S
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                  Ментор стартапов и основатель{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Школы Русского Импрова
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Помогаю технологическим стартапам пройти путь от идеи до успешного бизнеса, 
                  а также развиваю креативный потенциал людей через уникальные методики импровизации.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
                    Скачать CV
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">👨‍💼</div>
                      <p className="text-gray-600 font-medium">Дмитрий S</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Моя миссия
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Создаю мосты между восточными и западными традициями, помогая людям и бизнесу 
              раскрыть свой потенциал через синтез инноваций и мудрости поколений.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Достижения и опыт
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Результаты, которые говорят сами за себя
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                      <div className="text-blue-600">
                        {achievement.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Образование и путь
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Профессиональный путь</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">Венчурное финансирование</h4>
                    <p className="text-gray-600 mt-2">
                      Более 5 лет опыта в сфере венчурных инвестиций, помог привлечь 
                      более 100 млн рублей для технологических стартапов.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">Развитие импровизации</h4>
                    <p className="text-gray-600 mt-2">
                      Создал уникальную методику развития креативности через синтез 
                      восточных и западных традиций импровизации.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">Стратегический консалтинг</h4>
                    <p className="text-gray-600 mt-2">
                      Консультирую компании по вопросам организационного развития, 
                      автоматизации и стратегического планирования.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Философия работы</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Верю, что истинный успех рождается на пересечении рациональности и интуиции, 
                    структуры и спонтанности. Моя задача — помочь людям и организациям найти 
                    этот баланс.
                  </p>
                  <p className="text-gray-600">
                    В работе с стартапами применяю принципы импровизации: готовность к изменениям, 
                    творческий подход к решению проблем и способность действовать в условиях 
                    неопределенности.
                  </p>
                  <p className="text-gray-600">
                    Школа Русского Импрова — это воплощение моей веры в то, что искусство 
                    может трансформировать не только отдельного человека, но и целые организации.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Давайте работать вместе
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Готов поделиться опытом и помочь вам достичь выдающихся результатов 
            в бизнесе и личном развитии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3"
            >
              Связаться со мной
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              Мои социальные сети
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
