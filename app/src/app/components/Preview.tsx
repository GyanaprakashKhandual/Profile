"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Lightbulb,
  Plus,
  Trash2,
  Globe,
  MessageCircle,
  Github,
  FileText,
  Award,
  Target,
} from "lucide-react";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    personal: {
      name: "",
      title: "",
      location: "",
    },
    contact: {
      email: "",
      website: "",
      phone: "",
      whatsapp: "",
      github: "",
    },
    about: {
      description: "",
    },
    skills: {
      Languages: [""],
      "Frontend Frameworks": [""],
      "Backend Frameworks": [""],
      Database: [""],
      "UI Library": [""],
      "Animation and 3D Library": [""],
      "Deployment & DevOps": [""],
      "Tools and Technology": [""],
      Methodologies: [""],
      "Soft Skills": [""],
    },
    experience: [
      {
        title: "",
        company: "",
        duration: "",
        responsibilities: [""],
      },
    ],
    projects: {
      list: [
        {
          name: "",
          tech: "",
          features: [""],
        },
      ],
    },
    education: [
      {
        degree: "",
        institution: "",
        duration: "",
      },
    ],
    philosophy: [""],
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Handler functions
  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  const handleSkillChange = (category: string, index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category as keyof typeof prev.skills].map(
          (skill, i) => (i === index ? value : skill)
        ),
      },
    }));
  };

  const addSkill = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: [...prev.skills[category as keyof typeof prev.skills], ""],
      },
    }));
  };

  const removeSkill = (category: string, index: number) => {
    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category as keyof typeof prev.skills].filter(
          (_, i) => i !== index
        ),
      },
    }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          title: "",
          company: "",
          duration: "",
          responsibilities: [""],
        },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: {
        list: [
          ...prev.projects.list,
          {
            name: "",
            tech: "",
            features: [""],
          },
        ],
      },
    }));
  };

  const removeProject = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      projects: {
        list: prev.projects.list.filter((_, i) => i !== index),
      },
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: "",
          institution: "",
          duration: "",
        },
      ],
    }));
  };

  const removeEducation = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Profile Information Form
          </h1>
          <p className="text-gray-600">
            Fill in your professional details below
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-black rounded-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Personal Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.personal.name}
                    onChange={(e) =>
                      handleInputChange("personal", "name", e.target.value)
                    }
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Professional Title
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.personal.title}
                    onChange={(e) =>
                      handleInputChange("personal", "title", e.target.value)
                    }
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="Full Stack Developer"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.personal.location}
                    onChange={(e) =>
                      handleInputChange("personal", "location", e.target.value)
                    }
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="City, State, Country"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-black rounded-lg">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Contact Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={formData.contact.email}
                    onChange={(e) =>
                      handleInputChange("contact", "email", e.target.value)
                    }
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="url"
                    value={formData.contact.website}
                    onChange={(e) =>
                      handleInputChange("contact", "website", e.target.value)
                    }
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.contact.phone}
                    onChange={(e) =>
                      handleInputChange("contact", "phone", e.target.value)
                    }
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="+1234567890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.contact.whatsapp}
                    onChange={(e) =>
                      handleInputChange("contact", "whatsapp", e.target.value)
                    }
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="+1234567890"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GitHub Profile
                </label>
                <div className="relative">
                  <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.contact.github}
                    onChange={(e) =>
                      handleInputChange("contact", "github", e.target.value)
                    }
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="github.com/username"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-black rounded-lg">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">About</h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Professional Description
              </label>
              <textarea
                value={formData.about.description}
                onChange={(e) =>
                  handleInputChange("about", "description", e.target.value)
                }
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                placeholder="Write a brief professional summary..."
              />
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-black rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
            </div>

            <div className="space-y-6">
              {Object.keys(formData.skills).map((category) => (
                <div key={category}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {category}
                  </label>
                  <div className="space-y-2">
                    {formData.skills[category as keyof typeof formData.skills].map(
                      (skill, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            type="text"
                            value={skill}
                            onChange={(e) =>
                              handleSkillChange(category, index, e.target.value)
                            }
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                            placeholder={`Add ${category.toLowerCase()}`}
                          />
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            onClick={() => removeSkill(category, index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </motion.button>
                        </div>
                      )
                    )}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => addSkill(category)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-lg transition-colors w-full"
                    >
                      <Plus className="w-4 h-4" />
                      Add {category}
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-black rounded-lg">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={addExperience}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Experience
              </motion.button>
            </div>

            <div className="space-y-6">
              {formData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Experience #{index + 1}
                    </h3>
                    {formData.experience.length > 1 && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={() => removeExperience(index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => {
                          const newExp = [...formData.experience];
                          newExp[index].title = e.target.value;
                          setFormData({ ...formData, experience: newExp });
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Software Engineer"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => {
                          const newExp = [...formData.experience];
                          newExp[index].company = e.target.value;
                          setFormData({ ...formData, experience: newExp });
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration
                      </label>
                      <input
                        type="text"
                        value={exp.duration}
                        onChange={(e) => {
                          const newExp = [...formData.experience];
                          newExp[index].duration = e.target.value;
                          setFormData({ ...formData, experience: newExp });
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Jan 2023 - Present"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Responsibilities
                      </label>
                      <div className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <input
                            key={respIndex}
                            type="text"
                            value={resp}
                            onChange={(e) => {
                              const newExp = [...formData.experience];
                              newExp[index].responsibilities[respIndex] =
                                e.target.value;
                              setFormData({ ...formData, experience: newExp });
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                            placeholder="Describe your responsibility..."
                          />
                        ))}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={() => {
                            const newExp = [...formData.experience];
                            newExp[index].responsibilities.push("");
                            setFormData({ ...formData, experience: newExp });
                          }}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-lg transition-colors w-full"
                        >
                          <Plus className="w-4 h-4" />
                          Add Responsibility
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-black rounded-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={addProject}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Project
              </motion.button>
            </div>

            <div className="space-y-6">
              {formData.projects.list.map((project, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Project #{index + 1}
                    </h3>
                    {formData.projects.list.length > 1 && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={() => removeProject(index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Name
                      </label>
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => {
                          const newProjects = [...formData.projects.list];
                          newProjects[index].name = e.target.value;
                          setFormData({
                            ...formData,
                            projects: { list: newProjects },
                          });
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Project Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Technologies Used
                      </label>
                      <input
                        type="text"
                        value={project.tech}
                        onChange={(e) => {
                          const newProjects = [...formData.projects.list];
                          newProjects[index].tech = e.target.value;
                          setFormData({
                            ...formData,
                            projects: { list: newProjects },
                          });
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="React • Node.js • MongoDB"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Key Features
                      </label>
                      <div className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <input
                            key={featureIndex}
                            type="text"
                            value={feature}
                            onChange={(e) => {
                              const newProjects = [...formData.projects.list];
                              newProjects[index].features[featureIndex] =
                                e.target.value;
                              setFormData({
                                ...formData,
                                projects: { list: newProjects },
                              });
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                            placeholder="Describe a key feature..."
                          />
                        ))}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={() => {
                            const newProjects = [...formData.projects.list];
                            newProjects[index].features.push("");
                            setFormData({
                              ...formData,
                              projects: { list: newProjects },
                            });
                          }}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-lg transition-colors w-full"
                        >
                          <Plus className="w-4 h-4" />
                          Add Feature
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-black rounded-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={addEducation}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Education
              </motion.button>
            </div>

            <div className="space-y-6">
              {formData.education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Education #{index + 1}
                    </h3>
                    {formData.education.length > 1 && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={() => removeEducation(index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Degree / Course
                      </label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => {
                          const newEdu = [...formData.education];
                          newEdu[index].degree = e.target.value;
                          setFormData({ ...formData, education: newEdu });
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Bachelor of Science in Computer Science"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Institution
                      </label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => {
                          const newEdu = [...formData.education];
                          newEdu[index].institution = e.target.value;
                          setFormData({ ...formData, education: newEdu });
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="University Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration
                      </label>
                      <input
                        type="text"
                        value={edu.duration}
                        onChange={(e) => {
                          const newEdu = [...formData.education];
                          newEdu[index].duration = e.target.value;
                          setFormData({ ...formData, education: newEdu });
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Graduated: 2024"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-black rounded-lg">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Professional Philosophy
              </h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Professional Philosophy
              </label>
              <textarea
                value={formData.philosophy[0]}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    philosophy: [e.target.value],
                  });
                }}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                placeholder="Share your work philosophy and principles..."
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Save Profile
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}