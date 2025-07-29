import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Palette, Type, Layout, Space as Spacing } from 'lucide-react'
import { ChromePicker } from 'react-color'

interface CVCustomizerProps {
  customization: any
  setCustomization: (customization: any) => void
}

const CVCustomizer: React.FC<CVCustomizerProps> = ({ customization, setCustomization }) => {
  const { t } = useTranslation()
  const [showColorPicker, setShowColorPicker] = React.useState(false)

  const fonts = [
    { id: 'inter', name: 'Inter', preview: 'font-sans' },
    { id: 'poppins', name: 'Poppins', preview: 'font-display' },
    { id: 'roboto', name: 'Roboto', preview: 'font-sans' },
    { id: 'lato', name: 'Lato', preview: 'font-sans' },
    { id: 'merriweather', name: 'Merriweather', preview: 'font-serif' },
    { id: 'georgia', name: 'Georgia', preview: 'font-serif' }
  ]

  const layouts = [
    { id: 'standard', name: 'Standard', description: 'Traditional single-column layout' },
    { id: 'two-column', name: 'Two Column', description: 'Modern two-column design' },
    { id: 'sidebar', name: 'Sidebar', description: 'Sidebar with main content area' }
  ]

  const spacingOptions = [
    { id: 'compact', name: 'Compact', description: 'Tight spacing for more content' },
    { id: 'normal', name: 'Normal', description: 'Balanced spacing' },
    { id: 'relaxed', name: 'Relaxed', description: 'Generous spacing for readability' }
  ]

  const colorPresets = [
    '#3B82F6', '#8B5CF6', '#10B981', '#F59E0B',
    '#EF4444', '#6366F1', '#EC4899', '#14B8A6'
  ]

  const updateCustomization = (field: string, value: any) => {
    setCustomization({
      ...customization,
      [field]: value
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Customize Your CV
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Personalize the appearance of your CV to match your style
        </p>
      </div>

      {/* Colors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Palette className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('cv.customization.colors')}
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Primary Color
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="w-12 h-12 rounded-lg border-2 border-gray-300 dark:border-gray-600 shadow-sm"
                style={{ backgroundColor: customization.primaryColor }}
              />
              <span className="text-sm font-mono text-gray-600 dark:text-gray-400">
                {customization.primaryColor}
              </span>
            </div>
            
            {showColorPicker && (
              <div className="absolute z-10 mt-2">
                <div
                  className="fixed inset-0"
                  onClick={() => setShowColorPicker(false)}
                />
                <ChromePicker
                  color={customization.primaryColor}
                  onChange={(color) => updateCustomization('primaryColor', color.hex)}
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Color Presets
            </label>
            <div className="flex flex-wrap gap-3">
              {colorPresets.map((color) => (
                <button
                  key={color}
                  onClick={() => updateCustomization('primaryColor', color)}
                  className={`w-10 h-10 rounded-lg border-2 transition-all ${
                    customization.primaryColor === color
                      ? 'border-gray-900 dark:border-white scale-110'
                      : 'border-gray-300 dark:border-gray-600 hover:scale-105'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fonts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <Type className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('cv.customization.fonts')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fonts.map((font) => (
            <button
              key={font.id}
              onClick={() => updateCustomization('font', font.id)}
              className={`p-4 text-left rounded-lg border-2 transition-all ${
                customization.font === font.id
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-900'
                  : 'border-gray-200 dark:border-gray-600 hover:border-purple-300'
              }`}
            >
              <div className={`text-lg font-semibold mb-1 ${font.preview}`}>
                {font.name}
              </div>
              <div className={`text-sm text-gray-600 dark:text-gray-400 ${font.preview}`}>
                The quick brown fox jumps over the lazy dog
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
            <Layout className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('cv.customization.layout')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {layouts.map((layout) => (
            <button
              key={layout.id}
              onClick={() => updateCustomization('layout', layout.id)}
              className={`p-4 text-left rounded-lg border-2 transition-all ${
                customization.layout === layout.id
                  ? 'border-green-500 bg-green-50 dark:bg-green-900'
                  : 'border-gray-200 dark:border-gray-600 hover:border-green-300'
              }`}
            >
              <div className="font-semibold text-gray-900 dark:text-white mb-2">
                {layout.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {layout.description}
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Spacing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
            <Spacing className="w-5 h-5 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('cv.customization.spacing')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {spacingOptions.map((spacing) => (
            <button
              key={spacing.id}
              onClick={() => updateCustomization('spacing', spacing.id)}
              className={`p-4 text-left rounded-lg border-2 transition-all ${
                customization.spacing === spacing.id
                  ? 'border-orange-500 bg-orange-50 dark:bg-orange-900'
                  : 'border-gray-200 dark:border-gray-600 hover:border-orange-300'
              }`}
            >
              <div className="font-semibold text-gray-900 dark:text-white mb-2">
                {spacing.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {spacing.description}
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default CVCustomizer