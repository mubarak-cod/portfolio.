import React from 'react';
import { Download, Code2, Sparkles, Zap, Target } from 'lucide-react';
import { PERSONAL_INFO, STATS } from "../../utils/contestants";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../Backgrounds/RadialGradientBackground"
import { Code, Server, Database } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Expertise",
      description: "Crafting beautiful, responsive UIs with React, modern CSS, and interactive animations"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Understanding",
      description: "Solid grasp of backend architecture, APIs, and system design through real-world collaboration"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Full-Stack Perspective",
      description: "Experience working alongside backend teams, understanding flow and best practices"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Resolved real-world problems through creative solutions and technical innovation"
    }
  ];

  const downloadResume = () => {
    // Add your resume file path here
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Update with your actual resume path
    link.download = `${PERSONAL_INFO.name}-Resume.pdf`;
    link.click();
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-20" id="about">
      {/* Radial Gradient Background - Full Coverage */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <RadialGradientBackground variant="about" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <FadeIn delay={100} duration={600}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-green-300 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </FadeIn>
          <FadeIn delay={200} duration={600}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Frontend developer with a passion for building stunning interfaces and understanding the bigger picture of web development
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Journey */}
            <FadeIn delay={300} duration={600}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-5 h-5 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm a frontend developer aspiring to become a backend developer. Throughout my career, I've learned that great software comes from understanding both sides of the stack. I've had the privilege of working with real backend teams, which has given me insight into API design, system architecture, and the flow of modern web applications.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  From crafting pixel-perfect interfaces to solving complex real-world problems, I bring a unique perspective that bridges the gap between design and functionality. This full-stack mindset helps me build features that are not just beautiful, but genuinely useful and scalable.
                </p>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={400} duration={600}>
              <div className="grid grid-cols-3 gap-4">
                {STATS.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-lg p-4 text-center hover:border-green-700/50 transition-colors">
                    <div className="text-2xl font-bold text-green-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Side - Picture with Animation */}
          <FadeIn delay={300} duration={800}>
            <div className="relative h-96 rounded-xl overflow-hidden border-2 border-green-800/50 group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              {/* Animated Border Glow */}
              <div className="absolute inset-0 border-2 border-green-500/0 group-hover:border-green-500/50 rounded-xl transition-colors duration-500 pointer-events-none" />
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </FadeIn>
        </div>

        {/* Highlights Grid */}
        <FadeIn delay={500} duration={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <FadeIn key={index} delay={600 + index * 100} duration={600}>
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-green-800/20 rounded-xl p-6 hover:border-green-700/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                  <div className="flex items-start gap-4">
                    <div className="text-green-400 flex-shrink-0 mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                      <p className="text-gray-400 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Download Resume Button */}
        <FadeIn delay={1000} duration={600}>
          <div className="flex justify-center">
            <button
              onClick={downloadResume}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default About;