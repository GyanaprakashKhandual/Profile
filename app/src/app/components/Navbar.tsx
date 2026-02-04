"use client";

import { useState, useRef, useEffect } from "react";
import { FaCoffee } from "react-icons/fa";
import { ChevronDown, Search, Download, Palette, Layout, Sparkles, Zap, Code, Database, FileCode, Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [styleOpen, setStyleOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [templateOpen, setTemplateOpen] = useState(false);
  const [qualityOpen, setQualityOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("Design");
  const [selectedTheme, setSelectedTheme] = useState("Blue");
  const [selectedTemplate, setSelectedTemplate] = useState("Professional");
  const [selectedQuality, setSelectedQuality] = useState("High");

  const themeSearchRef = useRef<HTMLInputElement>(null);
  const templateSearchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (themeOpen && themeSearchRef.current) {
      themeSearchRef.current.focus();
    }
  }, [themeOpen]);

  useEffect(() => {
    if (templateOpen && templateSearchRef.current) {
      templateSearchRef.current.focus();
    }
  }, [templateOpen]);

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2
      }
    })
  };

  const styleOptions = [
    { name: "Design", icon: <Palette className="w-4 h-4" /> },
    { name: "Crypto", icon: <Zap className="w-4 h-4" /> },
    { name: "Stack", icon: <Database className="w-4 h-4" /> },
    { name: "Developer", icon: <Code className="w-4 h-4" /> },
    { name: "DED", icon: <FileCode className="w-4 h-4" /> },
    { name: "QWi", icon: <Globe className="w-4 h-4" /> },
  ];

  const themeOptions = [
    { name: "Teal", color: "#14b8a6" },
    { name: "Magenta", color: "#d946ef" },
    { name: "Blue", color: "#3b82f6" },
    { name: "Peach", color: "#fb923c" },
  ];

  const templateOptions = [
    { name: "Professional", icon: <Layout className="w-4 h-4" /> },
    { name: "Funky", icon: <Sparkles className="w-4 h-4" /> },
  ];

  const qualityOptions = [
    { name: "Low", level: 1 },
    { name: "Medium", level: 2 },
    { name: "High", level: 3 },
    { name: "Ultra", level: 4 },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaCoffee className="text-3xl text-gray-900" />
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Profile
            </h1>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Style Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setStyleOpen(!styleOpen);
                  setThemeOpen(false);
                  setTemplateOpen(false);
                  setQualityOpen(false);
                }}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100"
              >
                Style
                <motion.div
                  animate={{ rotate: styleOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {styleOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-10 overflow-hidden"
                  >
                    {styleOptions.map((option, i) => (
                      <motion.a
                        key={option.name}
                        href="#"
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedStyle(option.name);
                          setStyleOpen(false);
                        }}
                        className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-all ${
                          selectedStyle === option.name
                            ? "bg-gray-100 text-gray-900 font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={selectedStyle === option.name ? "text-black" : "text-gray-500"}>
                            {option.icon}
                          </span>
                          <span>{option.name}</span>
                        </div>
                        {selectedStyle === option.name && (
                          <Check className="w-4 h-4 text-black" />
                        )}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setThemeOpen(!themeOpen);
                  setStyleOpen(false);
                  setTemplateOpen(false);
                  setQualityOpen(false);
                }}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100"
              >
                Theme
                <motion.div
                  animate={{ rotate: themeOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {themeOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden"
                  >
                    <div className="p-3 border-b border-gray-200 bg-gray-50">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          ref={themeSearchRef}
                          type="text"
                          placeholder="Search themes..."
                          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white"
                        />
                      </div>
                    </div>
                    <div className="py-2">
                      {themeOptions.map((option, i) => (
                        <motion.a
                          key={option.name}
                          href="#"
                          custom={i}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedTheme(option.name);
                            setThemeOpen(false);
                          }}
                          className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-all ${
                            selectedTheme === option.name
                              ? "bg-gray-100 text-gray-900 font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-4 h-4 rounded-full border-2 border-gray-300"
                              style={{ backgroundColor: option.color }}
                            />
                            <span>{option.name}</span>
                          </div>
                          {selectedTheme === option.name && (
                            <Check className="w-4 h-4 text-black" />
                          )}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Template Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setTemplateOpen(!templateOpen);
                  setStyleOpen(false);
                  setThemeOpen(false);
                  setQualityOpen(false);
                }}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100"
              >
                Templates
                <motion.div
                  animate={{ rotate: templateOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {templateOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden"
                  >
                    <div className="p-3 border-b border-gray-200 bg-gray-50">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          ref={templateSearchRef}
                          type="text"
                          placeholder="Search templates..."
                          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white"
                        />
                      </div>
                    </div>
                    <div className="py-2">
                      {templateOptions.map((option, i) => (
                        <motion.a
                          key={option.name}
                          href="#"
                          custom={i}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedTemplate(option.name);
                            setTemplateOpen(false);
                          }}
                          className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-all ${
                            selectedTemplate === option.name
                              ? "bg-gray-100 text-gray-900 font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={selectedTemplate === option.name ? "text-black" : "text-gray-500"}>
                              {option.icon}
                            </span>
                            <span>{option.name}</span>
                          </div>
                          {selectedTemplate === option.name && (
                            <Check className="w-4 h-4 text-black" />
                          )}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quality Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setQualityOpen(!qualityOpen);
                  setStyleOpen(false);
                  setThemeOpen(false);
                  setTemplateOpen(false);
                }}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100"
              >
                Quality
                <motion.div
                  animate={{ rotate: qualityOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {qualityOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-10 overflow-hidden"
                  >
                    {qualityOptions.map((option, i) => (
                      <motion.a
                        key={option.name}
                        href="#"
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedQuality(option.name);
                          setQualityOpen(false);
                        }}
                        className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-all ${
                          selectedQuality === option.name
                            ? "bg-gray-100 text-gray-900 font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex gap-0.5">
                            {[...Array(4)].map((_, index) => (
                              <div
                                key={index}
                                className={`w-1 h-3 rounded-full ${
                                  index < option.level
                                    ? selectedQuality === option.name
                                      ? "bg-black"
                                      : "bg-gray-400"
                                    : "bg-gray-200"
                                }`}
                              />
                            ))}
                          </div>
                          <span>{option.name}</span>
                        </div>
                        {selectedQuality === option.name && (
                          <Check className="w-4 h-4 text-black" />
                        )}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Download Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 py-2 px-4 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              <Download className="w-4 h-4" />
              Download
            </motion.button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}