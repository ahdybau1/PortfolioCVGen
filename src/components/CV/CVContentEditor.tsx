import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Plus, Trash2, Upload, User, Briefcase, GraduationCap, Award, Globe, Heart, FolderOpen, AlignCenterVertical as Certificate, Users } from 'lucide-react'

interface CVContentEditorProps {
  cvData: any
  setCvData: (data: any) => void
}

const CVContentEditor: React.FC<CVContentEditorProps> = ({ cvData, setCvData }) => {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState('personal')

  const sections = [
    { id: 'personal', name: t('cv.sections.personal'), icon: User },
    { id: 'experience', name: t('cv.sections.experience'), icon: Briefcase },
    { id: 'education', name: t('cv.sections.education'), icon: GraduationCap },
    { id: 'skills', name: t('cv.sections.skills'), icon: Award },
    { id: 'languages', name: t('cv.sections.languages'), icon: Globe },
    { id: 'hobbies', name: t('cv.sections.hobbies'), icon: Heart },
    { id: 'projects', name: t('cv.sections.projects'), icon: FolderOpen },
    { id: 'certifications', name: t('cv.sections.certifications'), icon: Certificate },
    { id: 'references', name: t('cv.sections.references'), icon: Users }
  ]

  const updatePersonalInfo = (field: string, value: string) => {
    setCvData({
      ...cvData,
      personalInfo: {
        ...cvData.personalInfo,
        [field]: value
      }
    })
  }

  const addExperience = () => {
    setCvData({
      ...cvData,
      experience: [
        ...cvData.experience,
        {
          id: Date.now(),
          jobTitle: '',
          company: '',
          startDate: '',
          endDate: '',
          current: false,
          description: ''
        }
      ]
    })
  }

  const updateExperience = (id: number, field: string, value: any) => {
    setCvData({
      ...cvData,
      experience: cvData.experience.map((exp: any) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    })
  }

  const removeExperience = (id: number) => {
    setCvData({
      ...cvData,
      experience: cvData.experience.filter((exp: any) => exp.id !== id)
    })
  }

  const addEducation = () => {
    setCvData({
      ...cvData,
      education: [
        ...cvData.education,
        {
          id: Date.now(),
          degree: '',
          school: '',
          startDate: '',
          endDate: '',
          description: ''
        }
      ]
    })
  }

  const updateEducation = (id: number, field: string, value: string) => {
    setCvData({
      ...cvData,
      education: cvData.education.map((edu: any) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    })
  }

  const removeEducation = (id: number) => {
    setCvData({
      ...cvData,
      education: cvData.education.filter((edu: any) => edu.id !== id)
    })
  }

  const addSkill = () => {
    setCvData({
      ...cvData,
      skills: [
        ...cvData.skills,
        {
          id: Date.now(),
          name: '',
          level: 3
        }
      ]
    })
  }

  const updateSkill = (id: number, field: string, value: any) => {
    setCvData({
      ...cvData,
      skills: cvData.skills.map((skill: any) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    })
  }

  const removeSkill = (id: number) => {
    setCvData({
      ...cvData,
      skills: cvData.skills.filter((skill: any) => skill.id !== id)
    })
  }

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('cv.fields.firstName')}
          </label>
          <input
            type="text"
            value={cvData.personalInfo.firstName}
            onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder={t('cv.fields.firstName')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('cv.fields.lastName')}
          </label>
          <input
            type="text"
            value={cvData.personalInfo.lastName}
            onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder={t('cv.fields.lastName')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('cv.fields.email')}
          </label>
          <input
            type="email"
            value={cvData.personalInfo.email}
            onChange={(e) => updatePersonalInfo('email', e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder={t('cv.fields.email')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('cv.fields.phone')}
          </label>
          <input
            type="tel"
            value={cvData.personalInfo.phone}
            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder={t('cv.fields.phone')}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t('cv.fields.summary')}
        </label>
        <textarea
          value={cvData.personalInfo.summary}
          onChange={(e) => updatePersonalInfo('summary', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder={t('cv.fields.summary')}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Profile Photo
        </label>
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            {cvData.personalInfo.photo ? (
              <img
                src={cvData.personalInfo.photo}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User className="w-8 h-8 text-gray-400" />
            )}
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Upload className="w-4 h-4" />
            <span>{t('common.upload')}</span>
          </button>
        </div>
      </div>
    </div>
  )

  const renderExperience = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Work Experience
        </h3>
        <button
          onClick={addExperience}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>{t('common.add')}</span>
        </button>
      </div>

      {cvData.experience.map((exp: any, index: number) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-gray-900 dark:text-white">
              Experience #{index + 1}
            </h4>
            <button
              onClick={() => removeExperience(exp.id)}
              className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value={exp.jobTitle}
              onChange={(e) => updateExperience(exp.id, 'jobTitle', e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder={t('cv.fields.jobTitle')}
            />
            <input
              type="text"
              value={exp.company}
              onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder={t('cv.fields.company')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="date"
              value={exp.startDate}
              onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <div className="flex items-center space-x-4">
              <input
                type="date"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                disabled={exp.current}
                className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={exp.current}
                  onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Current</span>
              </label>
            </div>
          </div>

          <textarea
            value={exp.description}
            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder={t('cv.fields.description')}
          />
        </motion.div>
      ))}

      {cvData.experience.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No work experience added yet</p>
          <p className="text-sm">Click "Add" to add your first experience</p>
        </div>
      )}
    </div>
  )

  const renderSkills = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Skills
        </h3>
        <button
          onClick={addSkill}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>{t('common.add')}</span>
        </button>
      </div>

      {cvData.skills.map((skill: any, index: number) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
        >
          <input
            type="text"
            value={skill.name}
            onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
            className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder={t('cv.fields.skillName')}
          />
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Level:</span>
            <input
              type="range"
              min="1"
              max="5"
              value={skill.level}
              onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value))}
              className="w-20"
            />
            <span className="text-sm font-medium text-gray-900 dark:text-white w-8">
              {skill.level}/5
            </span>
          </div>

          <button
            onClick={() => removeSkill(skill.id)}
            className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </motion.div>
      ))}

      {cvData.skills.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <Award className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No skills added yet</p>
          <p className="text-sm">Click "Add" to add your first skill</p>
        </div>
      )}
    </div>
  )

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'personal':
        return renderPersonalInfo()
      case 'experience':
        return renderExperience()
      case 'education':
        return renderExperience() // Similar structure
      case 'skills':
        return renderSkills()
      case 'languages':
        return renderSkills() // Similar structure
      case 'hobbies':
        return renderSkills() // Similar structure
      case 'projects':
        return renderExperience() // Similar structure
      case 'certifications':
        return renderExperience() // Similar structure
      case 'references':
        return renderExperience() // Similar structure
      default:
        return renderPersonalInfo()
    }
  }

  return (
    <div className="flex">
      {/* Section Navigation */}
      <div className="w-64 pr-6 border-r border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          CV Sections
        </h2>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <section.icon className="w-5 h-5" />
              <span className="font-medium">{section.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 pl-6">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderSectionContent()}
        </motion.div>
      </div>
    </div>
  )
}

export default CVContentEditor