
import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Дмитрий S
            </div>
            <p className="text-gray-400">
              Менторство для технологических стартапов и развитие креативного потенциала через импровизацию
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Менторство стартапов</li>
              <li>Венчурные инвестиции</li>
              <li>Упаковка проектов</li>
              <li>Юридическое сопровождение</li>
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Образование</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Школа Русского Импрова</li>
              <li>Курс "Венчурное финансирование"</li>
              <li>Программы для детей и взрослых</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <span>info@dmitrys.ru</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MessageCircle size={16} />
                <span>Telegram: @dmitrys</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Дмитрий S. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
