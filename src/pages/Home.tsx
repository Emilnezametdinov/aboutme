import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Mail, MessageCircle } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Профиль"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Привет, я Ваше Имя</h1>
            <p className="text-xl text-gray-600 mb-6">
              Веб-разработчик из Москвы
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/cv"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Резюме <ArrowRight size={20} />
              </Link>
              <a
                href="/cv.pdf"
                download
                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
              >
                Скачать CV <Download size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-gray-700 leading-relaxed">
          <p>
            Краткое описание о себе и своем опыте. Здесь вы можете рассказать о своих
            основных навыках, интересах и целях. Добавьте немного личной информации,
            чтобы сделать представление более живым и интересным.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Свяжитесь со мной
        </h2>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:your.email@example.com"
            className="bg-gray-100 p-4 rounded-full hover:bg-gray-200 transition-colors"
            title="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://t.me/yourusername"
            className="bg-gray-100 p-4 rounded-full hover:bg-gray-200 transition-colors"
            title="Telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={24} />
          </a>
          <a
            href="https://github.com/yourusername"
            className="bg-gray-100 p-4 rounded-full hover:bg-gray-200 transition-colors"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;