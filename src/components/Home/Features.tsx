import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FileText, Palette, Globe, Zap, Download, Share2 } from 'lucide-react'

const Features: React.FC = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: FileText,
      title: t('home.features.cv.title'),
      description: t('home.features.cv.description'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Palette,
      title: t('home.features.portfolio.title'),
      description: t('home.features.portfolio.description'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: t('home.features.multilingual.title'),
      description: t('home.features.multilingual.description'),
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Smart suggestions and auto-fill features to speed up your creation process',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Download,
      title: 'Export Anywhere',
      description: 'Download as PDF, share with a link, or embed in your website',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'Get your custom domain and share your work with the world',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('home.features.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features