import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Plus, FileText, Palette, Eye, Download, Edit3, Trash2 } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const Dashboard: React.FC = () => {
  const { t } = useTranslation()
  const { user } = useAuth()

  const recentCVs = [
    {
      id: 1,
      title: 'Software Developer CV',
      template: 'Modern Blue',
      updatedAt: '2024-01-15',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'Marketing Manager CV',
      template: 'Creative Purple',
      updatedAt: '2024-01-12',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=300'
    }
  ]

  const recentPortfolios = [
    {
      id: 1,
      title: 'Design Portfolio',
      template: 'Minimalist',
      updatedAt: '2024-01-14',
      published: true,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {t('common.welcome')}, {user?.user_metadata?.full_name || user?.email}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your CVs and portfolios from here
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total CVs</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Portfolios</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">1</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Palette className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Views</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">45</p>
              </div>
              <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-lg">
                <Eye className="w-6 h-6 text-teal-600" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">Create New CV</h3>
                <p className="text-blue-100">Choose from 15+ professional templates</p>
              </div>
              <Plus className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2">Create Portfolio</h3>
                <p className="text-purple-100">Build a stunning personal website</p>
              </div>
              <Plus className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </div>
          </motion.button>
        </motion.div>

        {/* Recent CVs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent CVs</h2>
            <button className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCVs.map((cv) => (
              <motion.div
                key={cv.id}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-blue-600" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{cv.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Template: {cv.template}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Updated: {cv.updatedAt}</p>
                  
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Edit3 className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                    
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Portfolios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Portfolios</h2>
            <button className="text-purple-600 hover:text-purple-500 font-medium transition-colors">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPortfolios.map((portfolio) => (
              <motion.div
                key={portfolio.id}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center">
                  <Palette className="w-12 h-12 text-purple-600" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white">{portfolio.title}</h3>
                    {portfolio.published && (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                        Published
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Template: {portfolio.template}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Updated: {portfolio.updatedAt}</p>
                  
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      <Edit3 className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                    
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard