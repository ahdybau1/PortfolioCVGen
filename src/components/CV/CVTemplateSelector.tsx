import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface CVTemplateSelectorProps {
  cvData: any
  setCvData: (data: any) => void
}

const CVTemplateSelector: React.FC<CVTemplateSelectorProps> = ({ cvData, setCvData }) => {
  const { t } = useTranslation()

  const templates = [
    {
      id: 'modern',
      name: t('cv.templates.modern'),
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=300',
      description: 'Clean and contemporary design perfect for tech professionals'
    },
    {
      id: 'classic',
      name: t('cv.templates.classic'),
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Traditional layout ideal for corporate environments'
    },
    {
      id: 'creative',
      name: t('cv.templates.creative'),
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Bold and artistic design for creative professionals'
    },
    {
      id: 'minimal',
      name: t('cv.templates.minimal'),
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Simple and elegant layout focusing on content'
    },
    {
      id: 'professional',
      name: t('cv.templates.professional'),
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Sophisticated design for senior executives'
    },
    {
      id: 'elegant',
      name: t('cv.templates.elegant'),
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Refined and polished appearance'
    }
  ]

  const handleTemplateSelect = (templateId: string) => {
    setCvData({ ...cvData, template: templateId })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Choose Your Template
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Select a template that best represents your professional style
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => handleTemplateSelect(template.id)}
            className={`relative cursor-pointer bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 overflow-hidden ${
              cvData.template === template.id
                ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800'
                : 'border-gray-200 dark:border-gray-600'
            }`}
          >
            {cvData.template === template.id && (
              <div className="absolute top-3 right-3 z-10 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
            )}

            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {template.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {template.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CVTemplateSelector