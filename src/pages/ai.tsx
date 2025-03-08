// src/pages/ai.tsx
import React from 'react';
import {
  Bot,
  Cpu,
  Brain,
  LineChart,
  Lock,
  Code,
  Smartphone,
  Zap,
  Check,
  Image,
  Headphones,
  Video,
  MessageSquare,
  Sparkles,
  FileText,
  Database,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

import { FaCheck } from 'react-icons/fa';

const AI = () => {
  const solutions = [
    {
      title: 'AI-Powered Web Applications',
      icon: <Code className="w-12 h-12 text-blue-600" />,
      description:
        'Custom web applications enhanced with AI capabilities - from intelligent search to personalized user experiences.',
    },
    {
      title: 'Smart Mobile Solutions',
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      description:
        'Mobile apps with integrated AI features like image recognition, voice commands, and predictive analytics.',
    },
    {
      title: 'Process Automation',
      icon: <Cpu className="w-12 h-12 text-blue-600" />,
      description:
        'Intelligent automation solutions that streamline workflows and reduce manual tasks in your web and mobile applications.',
    },
    {
      title: 'Machine Learning Integration',
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      description:
        'Enhance your existing applications with ML capabilities for better decision-making and user engagement.',
    },
    {
      title: 'Conversational AI',
      icon: <Bot className="w-12 h-12 text-blue-600" />,
      description:
        'Custom chatbots and virtual assistants that integrate seamlessly with your web and mobile platforms.',
    },
    {
      title: 'Predictive Analytics',
      icon: <LineChart className="w-12 h-12 text-blue-600" />,
      description:
        'Data-driven insights and forecasting capabilities built right into your applications.',
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'End-to-End Development',
      description:
        'From concept to deployment, we handle every aspect of AI-enhanced application development.',
    },
    {
      icon: <Check className="w-8 h-8 text-green-500" />,
      title: 'Seamless Integration',
      description:
        'AI capabilities that work naturally with your existing web and mobile applications.',
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: 'Enterprise-Grade Security',
      description:
        'Built-in security measures to protect your AI-powered applications and data.',
    },
  ];

  const aiServices = [
    {
      title: 'AI Chatbots & Virtual Assistants',
      icon: <Bot className="w-12 h-12 text-blue-600" />,
      description:
        'Automated customer support, business communication, lead generation, and voice assistants.',
      projects: [
        'Customer support & FAQs chatbot',
        'Smart HR chatbot for recruitment',
        'E-commerce chatbot for personalized shopping',
      ],
    },
    {
      title: 'Real-Time Image & Video Processing',
      icon: <Image className="w-12 h-12 text-blue-600" />,
      description:
        'Object detection, image recognition, video segmentation, and real-time content moderation.',
      projects: [
        'AI-based smart surveillance',
        'AI-driven video analytics',
        'Face recognition attendance system',
      ],
    },
    {
      title: 'Predictive Analytics & AI Models',
      icon: <LineChart className="w-12 h-12 text-blue-600" />,
      description:
        'Maintenance prediction, financial forecasting, healthcare predictions, and customer churn analysis.',
      projects: [
        'AI-based sales forecasting system',
        'Healthcare AI predicting patient readmissions',
        'AI-powered fraud detection in banking',
      ],
    },
    {
      title: 'Regression & Classification Models',
      icon: <Database className="w-12 h-12 text-blue-600" />,
      description:
        'Spam detection, sentiment analysis, risk assessment, and automated resume screening.',
      projects: [
        'AI-driven resume filtering tool',
        'Spam comment & toxic content detection',
        'AI-based loan approval system',
      ],
    },
    {
      title: 'LLM Fine-Tuning',
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      description:
        'Custom GPT assistants, document processing, content generation, and code review.',
      projects: [
        'Fine-tuned GPT-4 for legal contract analysis',
        'AI-based chatbot for medical advice',
        'AI-powered coding assistant for developers',
      ],
    },
    {
      title: 'AI Text-to-Image Generation',
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      description: 'Art generation, product mockups, and image enhancement.',
      projects: [
        'AI-generated concept art for gaming & media',
        'AI tool for automatic website banner creation',
        'AI-powered fashion design generator',
      ],
    },
    {
      title: 'AI Voiceover & Speech Synthesis',
      icon: <Headphones className="w-12 h-12 text-blue-600" />,
      description:
        'Text-to-speech conversion, podcast generation, and voice cloning.',
      projects: [
        'AI-based virtual assistant with voice interactions',
        'Automated audiobook narration tool',
        'AI voiceover generator for marketing videos',
      ],
    },
    {
      title: 'AI-Powered Video Generation',
      icon: <Video className="w-12 h-12 text-blue-600" />,
      description: 'Video editing, avatar creation, and deepfake media.',
      projects: [
        'AI-driven social media content creation tool',
        'Deepfake AI-powered video generator',
        'AI-generated explainer videos for businesses',
      ],
    },
    {
      title: 'Prompt Engineering',
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
      description:
        'Custom prompt design, templates for LLMs, research assistants, and content generation.',
      projects: [
        'AI-powered blog post generator using optimized prompts',
        'AI chatbot with role-based prompt engineering',
        'AI-driven code review assistant with structured prompts',
      ],
    },
  ];

  const aiCapabilities = [
    {
      capability: 'Text Generation',
      description:
        'AI-powered text generation for chatbots, content creation, and summarization.',
      icon: <FileText className="w-8 h-8 text-blue-500" />,
    },
    {
      capability: 'Vision',
      description:
        'AI models analyzing images for object detection, OCR, and more.',
      icon: <Image className="w-8 h-8 text-blue-500" />,
    },
    {
      capability: 'Image Generation',
      description:
        'AI tools generating realistic and artistic images from text prompts.',
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
    },
    {
      capability: 'Audio Generation',
      description: 'AI-driven sound and voice synthesis.',
      icon: <Headphones className="w-8 h-8 text-blue-500" />,
    },
    {
      capability: 'Text-to-Speech',
      description: 'Convert text into natural-sounding speech.',
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
    },
    {
      capability: 'Speech-to-Text',
      description: 'Transcribe spoken words into text.',
      icon: <FileText className="w-8 h-8 text-blue-500" />,
    },
    {
      capability: 'Embeddings',
      description:
        'AI-powered text embeddings for similarity searches, recommendation systems, and semantic analysis.',
      icon: <Database className="w-8 h-8 text-blue-500" />,
    },
    {
      capability: 'Moderation',
      description: 'AI-driven content moderation to filter harmful content.',
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    },
    {
      capability: 'Reasoning',
      description: 'Advanced logical reasoning capabilities.',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
    },
    {
      capability: 'Structured Outputs',
      description: 'Generate structured data outputs like JSON or XML.',
      icon: <Code className="w-8 h-8 text-blue-500" />,
    },
    {
      capability: 'Predictive Outputs',
      description: 'AI-powered predictive analytics for trend forecasting.',
      icon: <LineChart className="w-8 h-8 text-blue-500" />,
    },
    {
      capability: 'Function Calling',
      description: 'AI-driven automation for executing specific functions.',
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
    },
  ];

  return (
    <div className="font-poppins w-full">
      {/* Hero Section */}
      <div className="w-full">
        <div className="relative">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 h-[700px]">
            <div className="absolute inset-0 opacity-20 bg-[url('/circuit-pattern.jpeg')] w-full bg-center bg-no-repeat bg-cover" />
            <div className="relative h-full flex flex-col items-start w-full max-w-[1140px] mx-auto px-4 justify-center">
              <div className="space-y-6 animate-fade-in-left">
                <div className="inline-block px-4 py-2 bg-gray-700/30 rounded-full">
                  <span className="text-blue-200 font-medium">
                    AI Solutions for Modern Applications
                  </span>
                </div>
                <h1 className="text-white font-black text-4xl sm:text-5xl md:text-6xl max-w-[800px] leading-tight">
                  Transform Your Digital Products with Intelligent AI Solutions
                </h1>
                <p className="text-blue-100 text-lg sm:text-xl max-w-[600px] leading-relaxed">
                  Combine our expertise in web & mobile development with
                  cutting-edge AI to create smarter, more powerful applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/ContactUsPage"
                    className="px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold text-center"
                  >
                    Start Your AI Journey
                  </Link>
                  <Link
                    href="/OurWorkPage"
                    className="px-8 py-4 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors font-semibold text-center"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="mt-[50px] md:mt-[-100px]">
          <div className="w-full max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4 xl:px-0">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="z-10 bg-white text-center shadow-md flex flex-col items-center gap-5 border-neutral-100 px-6 py-8 backgrounddd text-[#333]"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {solution.icon}
                  </div>
                  <h3 className="font-bold text-xl">{solution.title}</h3>
                  <p className="">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive AI Services Section */}
        <div className="py-20 bg-white">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From intelligent chatbots to predictive analytics, we offer a
                full suite of AI solutions to transform your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg backgrounddd"
                >
                  <div className="p-6 group">
                    <div className="flex items-center justify-center p-3 bg-blue-50 rounded-lg w-16 h-16 mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 group-hover:text-white mb-4">
                      {service.description}
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-sm text-gray-700 group-hover:text-white mb-2">
                        Potential Projects:
                      </h4>
                      <ul className="text-sm text-gray-600 group-hover:text-white">
                        {service.projects.map((project, i) => (
                          <li key={i} className="mb-1 flex items-start">
                            <span className="mr-2 text-blue-500">•</span>{' '}
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Capabilities Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                AI Capabilities & Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Leverage our full spectrum of AI capabilities to power your
                next-generation applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {aiCapabilities.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {item.capability}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white py-20">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose AonixGlobalAI?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We bring together decades of software development expertise with
                cutting-edge AI capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-[1140px] mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 flex gap-5 justify-center items-center">
              Next Steps
              <FaCheck />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Portfolio Building</h3>
                <p className="text-gray-600 mb-4">
                  Get help building a portfolio page for these AI services
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cpu className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Demo Projects</h3>
                <p className="text-gray-600 mb-4">
                  Develop real-world AI demo projects for your portfolio
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Fine-Tuning AI</h3>
                <p className="text-gray-600 mb-4">
                  Get help with fine-tuning AI models & prompt engineering
                  strategies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[rgb(26,36,115)] w-full bg-center bg-no-repeat bg-cover relative z-1 py-20">
          <div className="relative max-w-[1140px] mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Intelligent Applications?
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can enhance your web and mobile
              applications with AI capabilities.
            </p>
            <Link
              href="/ContactUsPage"
              className="inline-block px-6 py-3 bg-white text-[#192373] rounded hover:bg-gray-100 transition-colors font-semibold"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
