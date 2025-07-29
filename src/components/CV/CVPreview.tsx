import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Calendar, Star } from 'lucide-react'

interface CVPreviewProps {
  cvData: any
  customization: any
  scale?: number
}

const CVPreview: React.FC<CVPreviewProps> = ({ cvData, customization, scale = 1 }) => {
  const { personalInfo, experience, education, skills, languages } = cvData
  const { primaryColor, font, layout, spacing } = customization

  const spacingClass = {
    compact: 'space-y-2',
    normal: 'space-y-4',
    relaxed: 'space-y-6'
  }[spacing] || 'space-y-4'

  const fontClass = {
    inter: 'font-sans',
    poppins: 'font-display',
    roboto: 'font-sans',
    lato: 'font-sans',
    merriweather: 'font-serif',
    georgia: 'font-serif'
  }[font] || 'font-sans'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`bg-white shadow-lg ${fontClass}`}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: scale < 1 ? `${100 / scale}%` : '100%',
        height: scale < 1 ? `${100 / scale}%` : 'auto'
      }}
    >
      {layout === 'standard' && (
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            {personalInfo.photo && (
              <img
                src={personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
            )}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            {personalInfo.summary && (
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {personalInfo.summary}
              </p>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-600">
            {personalInfo.email && (
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" style={{ color: primaryColor }} />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" style={{ color: primaryColor }} />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.address && (
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" style={{ color: primaryColor }} />
                <span>{personalInfo.address}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" style={{ color: primaryColor }} />
                <span>{personalInfo.website}</span>
              </div>
            )}
          </div>

          {/* Experience */}
          {experience.length > 0 && (
            <div className={`mb-8 ${spacingClass}`}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2" style={{ borderColor: primaryColor }}>
                Work Experience
              </h2>
              <div className={spacingClass}>
                {experience.map((exp: any, index: number) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{exp.jobTitle}</h3>
                        <p className="text-gray-700">{exp.company}</p>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </div>
                    </div>
                    {exp.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className={`mb-8 ${spacingClass}`}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2" style={{ borderColor: primaryColor }}>
                Education
              </h2>
              <div className={spacingClass}>
                {education.map((edu: any, index: number) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-700">{edu.school}</p>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.startDate} - {edu.endDate}
                      </div>
                    </div>
                    {edu.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div className={`mb-8 ${spacingClass}`}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2" style={{ borderColor: primaryColor }}>
                Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill: any, index: number) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">{skill.name}</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < skill.level ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div className={spacingClass}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2" style={{ borderColor: primaryColor }}>
                Languages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {languages.map((lang: any, index: number) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">{lang.name}</span>
                    <span className="text-gray-600 text-sm">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {layout === 'two-column' && (
        <div className="flex">
          {/* Left Column */}
          <div className="w-1/3 p-6" style={{ backgroundColor: `${primaryColor}15` }}>
            {personalInfo.photo && (
              <img
                src={personalInfo.photo}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
            )}
            
            {/* Contact */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Contact</h3>
              <div className="space-y-2 text-sm">
                {personalInfo.email && (
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" style={{ color: primaryColor }} />
                    <span className="text-gray-700">{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" style={{ color: primaryColor }} />
                    <span className="text-gray-700">{personalInfo.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Skills */}
            {skills.length > 0 && (
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Skills</h3>
                <div className="space-y-3">
                  {skills.map((skill: any, index: number) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                        <span className="text-xs text-gray-600">{skill.level}/5</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            backgroundColor: primaryColor,
                            width: `${(skill.level / 5) * 100}%`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="w-2/3 p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {personalInfo.firstName} {personalInfo.lastName}
              </h1>
              {personalInfo.summary && (
                <p className="text-gray-600 leading-relaxed">{personalInfo.summary}</p>
              )}
            </div>

            {/* Experience */}
            {experience.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ color: primaryColor }}>
                  Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((exp: any, index: number) => (
                    <div key={index}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{exp.jobTitle}</h3>
                          <p className="text-gray-700">{exp.company}</p>
                        </div>
                        <span className="text-sm text-gray-600">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      {exp.description && (
                        <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ color: primaryColor }}>
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((edu: any, index: number) => (
                    <div key={index}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                          <p className="text-gray-700">{edu.school}</p>
                        </div>
                        <span className="text-sm text-gray-600">
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default CVPreview