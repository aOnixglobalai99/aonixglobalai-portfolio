// import React from 'react';
// import {
//   Bot,
//   Cpu,
//   Brain,
//   // Layers,
//   LineChart,
//   Lock,
//   Code,
//   Smartphone,
//   Zap,
//   Check,
// } from 'lucide-react';
// import Link from 'next/link';

// const AI = () => {
//   const solutions = [
//     {
//       title: 'AI-Powered Web Applications',
//       icon: <Code className="w-12 h-12 text-blue-600" />,
//       description:
//         'Custom web applications enhanced with AI capabilities - from intelligent search to personalized user experiences.',
//     },
//     {
//       title: 'Smart Mobile Solutions',
//       icon: <Smartphone className="w-12 h-12 text-blue-600" />,
//       description:
//         'Mobile apps with integrated AI features like image recognition, voice commands, and predictive analytics.',
//     },
//     {
//       title: 'Process Automation',
//       icon: <Cpu className="w-12 h-12 text-blue-600" />,
//       description:
//         'Intelligent automation solutions that streamline workflows and reduce manual tasks in your web and mobile applications.',
//     },
//     {
//       title: 'Machine Learning Integration',
//       icon: <Brain className="w-12 h-12 text-blue-600" />,
//       description:
//         'Enhance your existing applications with ML capabilities for better decision-making and user engagement.',
//     },
//     {
//       title: 'Conversational AI',
//       icon: <Bot className="w-12 h-12 text-blue-600" />,
//       description:
//         'Custom chatbots and virtual assistants that integrate seamlessly with your web and mobile platforms.',
//     },
//     {
//       title: 'Predictive Analytics',
//       icon: <LineChart className="w-12 h-12 text-blue-600" />,
//       description:
//         'Data-driven insights and forecasting capabilities built right into your applications.',
//     },
//   ];

//   const benefits = [
//     {
//       icon: <Zap className="w-8 h-8 text-yellow-500" />,
//       title: 'End-to-End Development',
//       description:
//         'From concept to deployment, we handle every aspect of AI-enhanced application development.',
//     },
//     {
//       icon: <Check className="w-8 h-8 text-green-500" />,
//       title: 'Seamless Integration',
//       description:
//         'AI capabilities that work naturally with your existing web and mobile applications.',
//     },
//     {
//       icon: <Lock className="w-8 h-8 text-red-500" />,
//       title: 'Enterprise-Grade Security',
//       description:
//         'Built-in security measures to protect your AI-powered applications and data.',
//     },
//   ];

//   return (
//     <div className="font-poppins w-full">
//       {/* Hero Section */}
//       <div className="relative">
//         <div className="bg-gradient-to-r from-blue-900 to-blue-800 h-[700px]">
//           <div className="absolute inset-0 opacity-20 bg-[url('/circuit-pattern.png')] bg-repeat" />
//           <div className="relative h-full flex flex-col items-start w-full max-w-[1140px] mx-auto px-4 justify-center">
//             <div className="space-y-6">
//               <div className="inline-block px-4 py-2 bg-blue-700/30 rounded-full">
//                 <span className="text-blue-200 font-medium">
//                   AI Solutions for Modern Applications
//                 </span>
//               </div>
//               <h1 className="text-white font-black text-4xl sm:text-5xl md:text-6xl max-w-[800px] leading-tight">
//                 Transform Your Digital Products with Intelligent AI Solutions
//               </h1>
//               <p className="text-blue-100 text-lg sm:text-xl max-w-[600px] leading-relaxed">
//                 Combine our expertise in web & mobile development with
//                 cutting-edge AI to create smarter, more powerful applications.
//               </p>
//               <div className="flex gap-4 pt-4">
//                 <Link
//                   href="/ContactUs"
//                   className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
//                 >
//                   Start Your AI Journey
//                 </Link>
//                 <Link
//                   href="/portfolio"
//                   className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold"
//                 >
//                   View Our Work
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Solutions Grid */}
//       <div className="mt-[-100px] mb-20">
//         <div className="w-full max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//           {solutions.map((solution, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-6"
//             >
//               <div className="flex flex-col items-center text-center space-y-4">
//                 <div className="p-3 bg-blue-50 rounded-lg">{solution.icon}</div>
//                 <h3 className="font-bold text-xl text-gray-900">
//                   {solution.title}
//                 </h3>
//                 <p className="text-gray-600">{solution.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Benefits Section */}
//       <div className="bg-gray-50 py-20">
//         <div className="max-w-[1140px] mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Why Choose AonixGlobalAI?
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We bring together decades of software development expertise with
//               cutting-edge AI capabilities.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {benefits.map((benefit, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
//               >
//                 <div className="mb-4">{benefit.icon}</div>
//                 <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
//         <div className="max-w-[1140px] mx-auto px-4">
//           <div className="text-center space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               Ready to Build Intelligent Applications?
//             </h2>
//             <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//               Let's discuss how we can enhance your web and mobile applications
//               with AI capabilities.
//             </p>
//             <div className="pt-4">
//               <Link
//                 href="/ContactUs"
//                 className="inline-block px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
//               >
//                 Schedule a Consultation
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AI;
