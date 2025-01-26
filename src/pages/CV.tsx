import React from 'react';
import { Download, Github, Mail, MapPin, MessageCircle, User } from 'lucide-react';

function CV() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-xl p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Профиль"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-4">Ваше Имя</h1>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-gray-600" />
                    <span>Веб-разработчик</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span>Москва, Россия</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span>your.email@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-gray-600" />
                    <span>@username</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-gray-600" />
                    <span>github.com/username</span>
                  </div>
                </div>
              </div>
              <a
                href="/cv.pdf"
                download
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                <Download size={20} />
                Скачать CV
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">О себе</h2>
          <p className="text-gray-700 leading-relaxed">
            Здесь вы можете написать краткую информацию о себе, своих увлечениях,
            опыте работы и целях. Расскажите свою историю так, чтобы она 
            заинтересовала посетителей вашей страницы.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Навыки</h2>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'React', 'TypeScript', 'Node.js', 'HTML', 'CSS', 
              'Git', 'Figma'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Опыт работы</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Веб-разработчик</h3>
              <p className="text-gray-600">Компания • 2020 - Настоящее время</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Разработка и поддержка веб-приложений</li>
                <li>Работа с React и TypeScript</li>
                <li>Оптимизация производительности</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Образование</h2>
          <div>
            <h3 className="text-xl font-semibold">Университет</h3>
            <p className="text-gray-600">Специальность • 2016 - 2020</p>
            <p className="text-gray-700 mt-2">
              Дополнительная информация об образовании и достижениях
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;