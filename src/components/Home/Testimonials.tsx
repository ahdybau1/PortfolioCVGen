import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const { t } = useTranslation()

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'UX Designer',
      company: 'TechCorp',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'PI-Builder helped me create a stunning portfolio that landed me my dream job. The templates are modern and the customization options are endless.',
      rating: 5
    },
    {
      id: 2,
      name: 'Marco Rossi',
      role: 'Software Developer',
      company: 'StartupXYZ',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'The CV builder is incredibly intuitive. I was able to create a professional resume in minutes, and the PDF export quality is perfect.',
      rating: 5
    },
    {
      id: 3,
      name: 'Marie Dubois',
      role: 'Marketing Manager',
      company: 'Creative Agency',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'J\'adore la facilité d\'utilisation et les modèles magnifiques. Mon portfolio multilingue m\'a aidée à décrocher des clients internationaux.',
      rating: 5
    },
    {
      id: 4,
      name: 'Alessandro Bianchi',
      role: 'Freelance Designer',
      company: 'Independent',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Fantastico! Ho creato il mio portfolio in italiano e inglese. I clienti sono sempre impressionati dalla qualità professionale.',
      rating: 5
    },
    {
      id: 5,
      name: 'Emma Wilson',
      role: 'Content Writer',
      company: 'Media House',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'The AI suggestions feature saved me hours of work. My CV now perfectly highlights my skills and experience.',
      rating: 5
    },
    {
      id: 6,
      name: 'Jean-Pierre Martin',
      role: 'Consultant',
      company: 'Business Solutions',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Un outil formidable pour créer des CV et portfolios professionnels. Le support client est excellent et réactif.',
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('home.testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('home.testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative"
            >
              <div className="absolute top-6 right-6 text-blue-600 opacity-20">
                <Quote className="w-8 h-8" />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials