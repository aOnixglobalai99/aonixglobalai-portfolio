import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import Head from 'next/head';

// Service data type
interface Benefit {
  title: string;
  description: string;
}

interface Detail {
  topic: string;
  description: string;
  image: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  details: Detail[];
  benefits: Benefit[];
  heroBackgroundImage: string;
}

interface ServicePageProps {
  service: Service | null;
}

// Service data with benefits and detailed approach
const services: Service[] = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Development',
    description:
      'Crafting user-centric designs that focus on functionality and aesthetics.',
    image: '/images/servicesImages/ui.avif',
    details: [
      {
        topic: 'User Research and Analysis',
        description:
          'We dive deep into understanding your audience through surveys, interviews, and analytics, identifying their needs and behaviors to create designs that resonate and deliver exceptional user satisfaction effectively.',
        image: '/images/serviceDetails/ui-ux-research.avif',
      },
      {
        topic: 'Wireframing and Prototyping',
        description:
          'Our team builds detailed wireframes and interactive prototypes to visualize layouts and test functionality early, ensuring the final design aligns with your goals and user expectations seamlessly.',
        image: '/images/serviceDetails/ui-ux-wireframe.avif',
      },
      {
        topic: 'Visual Design and Branding',
        description:
          'We craft compelling visuals with consistent branding elements like colors and typography, enhancing your identity and creating an aesthetically pleasing experience that strengthens recognition across all platforms.',
        image: '/images/serviceDetails/ui-ux-visual.avif',
      },
      {
        topic: 'Responsive Design Implementation',
        description:
          'Using advanced techniques, we ensure your designs adapt flawlessly across devices, from desktops to mobiles, providing a consistent and optimized experience that meets users wherever they are.',
        image: '/images/serviceDetails/ui-ux-responsive.avif',
      },
      {
        topic: 'Usability Testing',
        description:
          'Through rigorous testing with real users, we refine interfaces to eliminate friction, validate design choices, and ensure the final product is intuitive, efficient, and delightful to use consistently.',
        image: '/images/serviceDetails/ui-ux-testing.avif',
      },
    ],
    benefits: [
      {
        title: 'Improved user satisfaction',
        description:
          'By conducting thorough user research and testing, we create intuitive interfaces that meet diverse needs, enhancing overall experience and making interactions more enjoyable and efficient for all users.',
      },
      {
        title: 'Increased conversion rates',
        description:
          'Optimized design elements like clear calls-to-action and streamlined navigation guide users toward completing purchases or sign-ups, significantly boosting conversion rates and driving business growth effectively.',
      },
      {
        title: 'Better brand perception',
        description:
          'Visually appealing and consistent designs crafted with branding in mind strengthen your identity, making your business appear more professional and trustworthy to customers and stakeholders alike.',
      },
      {
        title: 'Reduced development costs',
        description:
          'Early usability testing and prototyping identify potential issues before coding begins, minimizing the need for expensive revisions and saving significant development time and resources in the long run.',
      },
      {
        title: 'Enhanced accessibility',
        description:
          'We design with accessibility standards in mind, ensuring your platforms are usable by people with disabilities, broadening your audience reach and complying with legal requirements effectively.',
      },
      {
        title: 'Streamlined user journeys',
        description:
          'Thoughtful design simplifies navigation and reduces friction, allowing users to find information or complete tasks quickly, improving efficiency and increasing engagement across all digital touchpoints seamlessly.',
      },
      {
        title: 'Higher customer retention',
        description:
          'Enjoyable, functional designs that prioritize user needs encourage repeat visits and loyalty, fostering long-term relationships with customers and reducing churn rates for sustained business success.',
      },
      {
        title: 'Faster load times',
        description:
          'Optimized UI designs reduce unnecessary elements, speeding up page load times, which enhances user experience and improves SEO rankings, keeping visitors engaged and satisfied consistently.',
      },
      {
        title: 'Cross-browser compatibility',
        description:
          'Responsive designs ensure seamless performance across all major browsers, providing a consistent experience that builds trust and prevents users from abandoning your site due to technical issues.',
      },
      {
        title: 'Improved feedback loops',
        description:
          'Iterative testing gathers user feedback early and often, allowing continuous refinement of designs to better meet expectations, resulting in a polished product that resonates with your audience.',
      },
    ],
    heroBackgroundImage: '/images/servicesHero/ui-ux-hero.avif',
  },
  {
    id: 'web-development',
    title: 'Web Application Development',
    description:
      'Delivering robust and scalable web solutions tailored to your business.',
    image: '/images/servicesImages/web.avif',
    details: [
      {
        topic: 'Custom web application development',
        description:
          'We build bespoke web applications tailored to your unique business needs, integrating custom features and workflows to enhance operations and provide a competitive edge in your industry.',
        image: '/images/serviceDetails/web-custom.avif',
      },
      {
        topic: 'Frontend and backend development',
        description:
          'Our experts create responsive frontends and robust backends, ensuring seamless interaction and data management, delivering a cohesive web application that performs reliably under all conditions.',
        image: '/images/serviceDetails/web-frontend-backend.avif',
      },
      {
        topic: 'Database integration',
        description:
          'We seamlessly integrate databases to store and manage your data efficiently, enabling fast retrieval and secure handling, which supports dynamic content and advanced functionality effortlessly.',
        image: '/images/serviceDetails/web-database.avif',
      },
      {
        topic: 'Performance optimization',
        description:
          'Through code optimization and server tuning, we enhance application speed and responsiveness, ensuring users experience minimal delays and your app handles high traffic without compromising quality.',
        image: '/images/serviceDetails/web-performance.avif',
      },
      {
        topic: 'Security implementation',
        description:
          'We embed advanced security protocols like encryption and authentication into your app, protecting sensitive data and users from threats, ensuring compliance and trust at every level.',
        image: '/images/serviceDetails/web-security.avif',
      },
    ],
    benefits: [
      {
        title: 'Scalable architecture',
        description:
          'Our modular designs allow your web applications to grow seamlessly with your business, handling increased traffic and new features without compromising performance or requiring extensive rework.',
      },
      {
        title: 'High performance',
        description:
          'We optimize code and infrastructure to ensure fast load times and smooth operation, even under heavy traffic, providing users with a reliable and responsive digital experience consistently.',
      },
      {
        title: 'Secure applications',
        description:
          'Robust security measures, including encryption and regular audits, protect your data and users from threats, ensuring trust and compliance with industry standards for safe operations.',
      },
      {
        title: 'Easy maintenance',
        description:
          'Clean, well-documented codebases and modular designs make updates and troubleshooting straightforward, reducing downtime and allowing your team to manage the application with minimal effort efficiently.',
      },
      {
        title: 'Customizable features',
        description:
          'Tailored functionalities align with your specific business goals, offering unique tools and integrations that enhance operations and differentiate your web presence from competitors effectively.',
      },
      {
        title: 'Improved user experience',
        description:
          'Seamless integration of frontend and backend creates a cohesive, intuitive interface, ensuring users enjoy a smooth, engaging experience that keeps them returning to your platform.',
      },
      {
        title: 'Cost-effective scalability',
        description:
          'Efficient resource use and scalable designs reduce long-term expenses, allowing your business to expand digital capabilities without incurring disproportionate costs as demand grows steadily.',
      },
      {
        title: 'Reliable uptime',
        description:
          'Proactive optimization and monitoring minimize outages, ensuring your web application remains available, which builds user trust and supports uninterrupted business operations effectively over time.',
      },
      {
        title: 'SEO optimization',
        description:
          'Built-in SEO best practices improve search engine visibility, driving organic traffic to your web application and helping potential customers find your services more easily online.',
      },
      {
        title: 'Future-proof technology',
        description:
          'Using modern frameworks and standards, we build applications that adapt to emerging trends, ensuring longevity and reducing the need for frequent, costly overhauls as technology evolves.',
      },
    ],
    heroBackgroundImage: '/images/servicesHero/web-dev-hero.avif',
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description:
      'Creating intuitive and feature-rich mobile applications for both iOS and Android.',
    image: '/images/servicesImages/mobile-app.avif',
    details: [
      {
        topic: 'Native app development (iOS & Android)',
        description:
          'We develop high-performance native apps for iOS and Android, leveraging platform-specific tools to deliver fast, reliable experiences tailored to each ecosystem’s unique capabilities and user expectations.',
        image: '/images/serviceDetails/mobile-native.avif',
      },
      {
        topic: 'Cross-platform development',
        description:
          'Using frameworks like React Native, we create apps that run smoothly on both iOS and Android, reducing development time and costs while maintaining quality and consistency across platforms.',
        image: '/images/serviceDetails/mobile-cross-platform.avif',
      },
      {
        topic: 'App store deployment',
        description:
          'We handle the entire submission process to the App Store and Google Play, ensuring compliance with guidelines and optimizing listings to maximize visibility and downloads effectively.',
        image: '/images/serviceDetails/mobile-deployment.avif',
      },
      {
        topic: 'UI/UX for mobile',
        description:
          'Our mobile-specific UI/UX designs prioritize touch interactions and small screens, crafting intuitive interfaces that enhance usability and engagement for users on the go seamlessly.',
        image: '/images/serviceDetails/mobile-uiux.avif',
      },
      {
        topic: 'Maintenance and updates',
        description:
          'We provide ongoing support, delivering timely updates and bug fixes to keep your app current, secure, and aligned with evolving user needs and platform requirements consistently.',
        image: '/images/serviceDetails/mobile-maintenance.avif',
      },
    ],
    benefits: [
      {
        title: 'Wider audience reach',
        description:
          'Developing for both iOS and Android platforms ensures your app reaches a broader user base, maximizing market penetration and capturing diverse demographics across mobile ecosystems effectively.',
      },
      {
        title: 'Enhanced user engagement',
        description:
          'Mobile-specific features like push notifications and location services keep users active and connected, fostering deeper interactions and increasing retention rates through personalized, timely engagement.',
      },
      {
        title: 'Better performance',
        description:
          'Optimized native or cross-platform code ensures apps run smoothly and quickly on mobile devices, delivering a responsive experience that meets modern users’ high performance expectations.',
      },
      {
        title: 'Offline capabilities',
        description:
          'Built-in offline functionality allows users to access key features without internet, enhancing usability in low-connectivity areas and ensuring uninterrupted service for better customer satisfaction.',
      },
      {
        title: 'Push notification integration',
        description:
          'Timely alerts and updates delivered via push notifications re-engage users, promote offers, and keep your app top-of-mind, driving consistent interaction and boosting overall usage rates.',
      },
      {
        title: 'Cross-device compatibility',
        description:
          'Apps are designed to perform consistently across various mobile devices and screen sizes, ensuring a uniform experience that builds trust and reliability among your user base.',
      },
      {
        title: 'Faster market entry',
        description:
          'Efficient development processes and cross-platform options accelerate app creation, allowing your business to launch quickly, seize market opportunities, and gain a competitive edge sooner.',
      },
      {
        title: 'Improved security',
        description:
          'Robust encryption and secure coding practices protect user data within the app, ensuring privacy and trust while meeting compliance standards for mobile application safety effectively.',
      },
      {
        title: 'Seamless updates',
        description:
          'Regular maintenance and streamlined update deployment keep your app current with new features and fixes, enhancing functionality without disrupting the user experience significantly.',
      },
      {
        title: 'Brand reinforcement',
        description:
          'Consistent mobile design and functionality aligned with your brand identity strengthen recognition, creating a cohesive presence that resonates with users across all digital touchpoints.',
      },
    ],
    heroBackgroundImage: '/images/servicesHero/mobile-dev-hero.avif',
  },
  {
    id: 'cms-development',
    title: 'CMS Web Development',
    description:
      'Developing flexible and SEO-optimized content management systems.',
    image: '/images/servicesImages/cms.avif',
    details: [
      {
        topic: 'Custom CMS development',
        description:
          'We build tailored CMS solutions designed to fit your specific content needs, offering flexibility and control to manage your website efficiently without relying on generic platforms.',
        image: '/images/serviceDetails/cms-custom.avif',
      },
      {
        topic: 'WordPress/Shopsify integration',
        description:
          'Our team integrates popular platforms like WordPress or Shopsify, customizing them to enhance functionality, streamline content management, and align with your business goals seamlessly.',
        image: '/images/serviceDetails/cms-wordpress.avif',
      },
      {
        topic: 'Content workflow management',
        description:
          'We design workflows to streamline content creation, review, and publishing processes, enabling your team to collaborate effectively and maintain consistency across all your digital assets.',
        image: '/images/serviceDetails/cms-workflow.avif',
      },
      {
        topic: 'SEO optimization',
        description:
          'Built-in SEO tools and best practices are implemented to boost your site’s visibility, ensuring content is structured for search engines to drive organic traffic effortlessly.',
        image: '/images/serviceDetails/cms-seo.avif',
      },
      {
        topic: 'User role management',
        description:
          'Customizable roles and permissions allow precise control over who can edit, approve, or publish content, enhancing security and teamwork while maintaining oversight of your CMS.',
        image: '/images/serviceDetails/cms-roles.avif',
      },
    ],
    benefits: [
      {
        title: 'Easy content updates',
        description:
          'Intuitive interfaces empower non-technical users to edit and publish content quickly, reducing dependency on developers and keeping your website current with minimal effort or training.',
      },
      {
        title: 'Improved SEO rankings',
        description:
          'Built-in SEO tools and optimized site structures enhance visibility on search engines, driving organic traffic and helping your business rank higher for relevant keywords effortlessly.',
      },
      {
        title: 'Reduced maintenance time',
        description:
          'Streamlined management tools and automated updates simplify website upkeep, allowing your team to focus on strategy rather than spending hours on routine technical maintenance tasks.',
      },
      {
        title: 'Team collaboration',
        description:
          'Defined user roles and permissions enable multiple team members to work together efficiently, ensuring smooth content workflows and coordinated efforts across departments with ease.',
      },
      {
        title: 'Custom content workflows',
        description:
          'Tailored processes match your team’s specific needs, from drafting to approval, improving efficiency and ensuring content aligns with your brand strategy seamlessly every time.',
      },
      {
        title: 'Scalable content management',
        description:
          'Systems grow with your content needs, handling increased volumes and complexity without sacrificing performance, keeping your website robust as your business expands steadily.',
      },
      {
        title: 'Enhanced site security',
        description:
          'Integrated security features like user authentication and regular updates protect your content and user data, maintaining trust and compliance with modern cybersecurity standards effectively.',
      },
      {
        title: 'Multi-language support',
        description:
          'Built-in tools for managing multilingual content expand your reach to global audiences, making your site accessible and relevant to users in different regions effortlessly.',
      },
      {
        title: 'Content versioning',
        description:
          'Track changes and revert to previous versions easily, ensuring content accuracy and providing a safety net for edits, which enhances reliability and team confidence.',
      },
      {
        title: 'Faster load speeds',
        description:
          'Optimized CMS architecture reduces page load times, improving user experience and SEO performance, keeping visitors engaged and reducing bounce rates for better site metrics.',
      },
    ],
    heroBackgroundImage: '/images/servicesHero/cms-hero.avif',
  },
  {
    id: 'api-development',
    title: 'API Development & Integration',
    description: 'Building and integrating APIs to simplify data interactions.',
    image: '/images/servicesImages/api.avif',
    details: [
      {
        topic: 'RESTful API development',
        description:
          'We create RESTful APIs with standardized protocols, enabling efficient, scalable data interactions between your applications and external systems, ensuring seamless communication and robust performance consistently.',
        image: '/images/serviceDetails/api-restful.avif',
      },
      {
        topic: 'Third-party API integration',
        description:
          'Our team integrates third-party APIs to extend functionality, connecting your app with tools like payment gateways or social platforms, enhancing features without building from scratch.',
        image: '/images/serviceDetails/api-third-party.avif',
      },
      {
        topic: 'API documentation',
        description:
          'We provide clear, comprehensive API documentation, making it easy for developers to understand and use your APIs, reducing onboarding time and ensuring effective implementation across teams.',
        image: '/images/serviceDetails/api-documentation.avif',
      },
      {
        topic: 'Security implementation',
        description:
          'Advanced security measures like OAuth and rate limiting are embedded into APIs, protecting data exchanges and preventing unauthorized access, ensuring safety and trust in every interaction.',
        image: '/images/serviceDetails/api-security.avif',
      },
      {
        topic: 'Performance optimization',
        description:
          'We optimize API endpoints for speed and efficiency, reducing latency and handling high request volumes, ensuring your applications remain responsive and reliable under all conditions.',
        image: '/images/serviceDetails/api-performance.avif',
      },
    ],
    benefits: [
      {
        title: 'Seamless integrations',
        description:
          'Well-designed APIs connect your applications with external services smoothly, enabling efficient data sharing and functionality enhancements without disrupting existing workflows or user experiences.',
      },
      {
        title: 'Improved scalability',
        description:
          'Modular API architecture supports growth by allowing easy addition of new features or services, ensuring your systems can scale without requiring extensive redevelopment efforts.',
      },
      {
        title: 'Better connectivity',
        description:
          'Efficient data exchange between platforms and services enhances interoperability, enabling your applications to work cohesively with third-party tools and systems for optimal performance.',
      },
      {
        title: 'Reduced development time',
        description:
          'Reusable API components and clear documentation accelerate development cycles, allowing your team to build features faster and deploy updates with less effort and fewer delays.',
      },
      {
        title: 'Enhanced data accuracy',
        description:
          'Standardized API protocols ensure consistent, reliable data transfers across systems, reducing errors and maintaining integrity for better decision-making and user trust in your applications.',
      },
      {
        title: 'Flexible system expansion',
        description:
          'APIs enable quick integration of new tools or services as your needs evolve, providing adaptability to market changes without overhauling your core systems significantly.',
      },
      {
        title: 'Streamlined workflows',
        description:
          'Automation of data interactions via APIs optimizes operational processes, reducing manual work and improving efficiency across your business applications for smoother daily operations.',
      },
      {
        title: 'Cost savings',
        description:
          'Reusing APIs across projects cuts development costs, leveraging existing infrastructure to add capabilities quickly, saving resources while maintaining high-quality functionality throughout your systems.',
      },
      {
        title: 'Improved security',
        description:
          'Secure API designs with authentication and encryption protect sensitive data during exchanges, ensuring compliance and safeguarding your business and users from potential breaches effectively.',
      },
      {
        title: 'Better analytics',
        description:
          'APIs enable integration with analytics tools, providing detailed insights into usage and performance, helping you refine strategies and enhance application effectiveness based on real data.',
      },
    ],
    heroBackgroundImage: '/images/servicesHero/api-hero.avif',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud-based Solutions',
    description:
      'Offering reliable and scalable cloud solutions for your business.',
    image: '/images/servicesImages/cloud.avif',
    details: [
      {
        topic: 'Cloud architecture design',
        description:
          'We design tailored cloud architectures to optimize scalability and performance, ensuring your infrastructure supports current needs and future growth with efficiency and reliability at every step.',
        image: '/images/serviceDetails/cloud-architecture.avif',
      },
      {
        topic: 'AWS/Azure/Google Cloud deployment',
        description:
          'Our experts deploy solutions on leading platforms like AWS, Azure, or Google Cloud, leveraging their strengths to deliver robust, scalable applications tailored to your business requirements.',
        image: '/images/serviceDetails/cloud-deployment.avif',
      },
      {
        topic: 'Cloud migration services',
        description:
          'We manage seamless migrations from on-premises to cloud environments, minimizing downtime and ensuring data integrity, so your business transitions smoothly without operational disruptions.',
        image: '/images/serviceDetails/cloud-migration.avif',
      },
      {
        topic: 'Scalability planning',
        description:
          'Strategic planning ensures your cloud resources scale dynamically with demand, maintaining performance during peak times and optimizing costs during low usage without manual intervention.',
        image: '/images/serviceDetails/cloud-scalability.avif',
      },
      {
        topic: 'Cost optimization',
        description:
          'We analyze usage patterns and implement cost-saving strategies like auto-scaling and reserved instances, ensuring you maximize value from your cloud investment without overspending.',
        image: '/images/serviceDetails/cloud-cost.avif',
      },
    ],
    benefits: [
      {
        title: 'High availability',
        description:
          'Cloud infrastructure ensures your services remain accessible 24/7, minimizing disruptions and providing users with consistent access to critical applications from anywhere with an internet connection.',
      },
      {
        title: 'Cost efficiency',
        description:
          'Pay-as-you-go models reduce upfront investments, allowing you to allocate resources wisely and only pay for what you use, optimizing budgets for other business priorities effectively.',
      },
      {
        title: 'Scalable infrastructure',
        description:
          'Dynamic resource allocation adjusts to demand spikes seamlessly, ensuring performance remains steady as your business grows without the need for costly hardware upgrades or overhauls.',
      },
      {
        title: 'Enhanced security',
        description:
          'Advanced cloud security measures, including encryption and backups, safeguard your data against breaches, ensuring compliance and maintaining customer trust with robust protection protocols.',
      },
      {
        title: 'Disaster recovery support',
        description:
          'Built-in backup and recovery options protect against data loss, enabling quick restoration of services after disruptions and ensuring business continuity with minimal impact or downtime.',
      },
      {
        title: 'Global accessibility',
        description:
          'Cloud solutions enable your team and customers to access services from any location worldwide, supporting remote work and international expansion with ease and reliability.',
      },
      {
        title: 'Reduced hardware costs',
        description:
          'Eliminating on-site servers cuts expenses on equipment, maintenance, and energy, freeing up capital for innovation while leveraging cloud providers’ robust infrastructure efficiently.',
      },
      {
        title: 'Faster deployment',
        description:
          'Pre-configured cloud environments accelerate setup and deployment of applications, reducing time-to-market and enabling your business to launch new services or updates swiftly and effectively.',
      },
      {
        title: 'Eco-friendly operations',
        description:
          'Cloud solutions reduce energy consumption compared to on-site servers, supporting sustainable practices that lower your carbon footprint while maintaining high-performance digital capabilities.',
      },
      {
        title: 'Real-time collaboration',
        description:
          'Cloud-based tools enable teams to collaborate instantly across locations, sharing data and updates in real-time, boosting productivity and ensuring alignment on projects seamlessly.',
      },
    ],
    heroBackgroundImage: '/images/servicesHero/cloud-hero.avif',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description:
      'Harnessing artificial intelligence to create smart, data-driven applications.',
    image: '/images/servicesImages/ai.avif',
    details: [
      {
        topic: 'Machine learning implementation',
        description:
          'We deploy machine learning models to analyze patterns and predict outcomes, enabling your applications to adapt and improve over time based on data-driven insights effectively.',
        image: '/images/serviceDetails/ai-machine-learning.avif',
      },
      {
        topic: 'Natural language processing',
        description:
          'Our NLP solutions enable apps to understand and respond to human language, enhancing user interactions with features like chatbots or voice commands for a smarter experience.',
        image: '/images/serviceDetails/ai-nlp.avif',
      },
      {
        topic: 'Predictive analytics',
        description:
          'Using AI, we forecast trends and behaviors based on historical data, empowering your business with insights to optimize strategies and anticipate market shifts proactively.',
        image: '/images/serviceDetails/ai-predictive.avif',
      },
      {
        topic: 'AI model training',
        description:
          'We train AI models with your data to ensure accuracy and relevance, fine-tuning algorithms to deliver precise results tailored to your specific industry or use case.',
        image: '/images/serviceDetails/ai-training.avif',
      },
      {
        topic: 'Automation solutions',
        description:
          'AI-driven automation streamlines repetitive tasks like data processing or scheduling, reducing manual effort and boosting efficiency across your operations with reliable, intelligent systems.',
        image: '/images/serviceDetails/ai-automation.avif',
      },
    ],
    benefits: [
      {
        title: 'Data-driven decisions',
        description:
          'Advanced analytics and AI insights provide actionable intelligence, enabling your business to make strategic choices based on accurate, real-time data rather than intuition or outdated reports.',
      },
      {
        title: 'Process automation',
        description:
          'AI automates repetitive tasks like data entry or customer queries, freeing your team to focus on high-value work and boosting productivity across departments significantly.',
      },
      {
        title: 'Improved efficiency',
        description:
          'AI-powered optimizations streamline workflows and resource allocation, reducing waste and accelerating task completion, which enhances overall operational efficiency and business performance noticeably.',
      },
      {
        title: 'Competitive advantage',
        description:
          'Cutting-edge AI technology differentiates your offerings, positioning your business as an industry leader and attracting customers seeking innovative, smart solutions over traditional competitors.',
      },
      {
        title: 'Personalized user experiences',
        description:
          'AI analyzes user data to tailor interactions, such as product recommendations or content, increasing satisfaction and engagement by delivering exactly what each customer wants precisely.',
      },
      {
        title: 'Cost reduction through automation',
        description:
          'Automating routine processes with AI lowers labor costs and minimizes errors, providing long-term savings that allow reinvestment into growth initiatives without sacrificing quality.',
      },
      {
        title: 'Real-time insights',
        description:
          'AI delivers instant analysis of data trends and user behavior, empowering your team to respond quickly to opportunities or issues, maintaining agility in dynamic markets.',
      },
      {
        title: 'Scalable AI models',
        description:
          'Flexible AI solutions grow with your data needs, adapting to larger datasets or new use cases, ensuring long-term value without frequent redesigns as your business expands.',
      },
      {
        title: 'Enhanced customer support',
        description:
          'AI chatbots and NLP provide 24/7 support, resolving queries instantly and improving customer satisfaction while reducing the workload on human support teams effectively over time.',
      },
      {
        title: 'Predictive maintenance',
        description:
          'AI predicts equipment or system failures before they occur, minimizing downtime and repair costs, ensuring smooth operations and extending the lifespan of your critical assets.',
      },
    ],
    heroBackgroundImage: '/images/servicesHero/ai-hero.avif',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Implementing result-oriented digital marketing strategies.',
    image: '/images/servicesImages/digital-marketing.avif',
    details: [
      {
        topic: 'SEO optimization',
        description:
          'We optimize your website with keyword strategies and technical enhancements, boosting search rankings to drive organic traffic and connect you with customers searching for your services.',
        image: '/images/serviceDetails/digital-seo.avif',
      },
      {
        topic: 'PPC campaign management',
        description:
          'Our team designs and manages PPC campaigns, targeting high-value audiences with precision to maximize clicks and conversions while optimizing ad spend for the best ROI possible.',
        image: '/images/serviceDetails/digital-ppc.avif',
      },
      {
        topic: 'Social media marketing',
        description:
          'We create engaging social media campaigns to build your audience, foster interaction, and amplify brand reach across platforms, driving engagement and loyalty with strategic content.',
        image: '/images/serviceDetails/digital-social.avif',
      },
      {
        topic: 'Content marketing',
        description:
          'Through compelling blogs, videos, and more, we craft content that educates and attracts your audience, establishing authority and nurturing leads through every stage of their journey.',
        image: '/images/serviceDetails/digital-content.avif',
      },
      {
        topic: 'Analytics and reporting',
        description:
          'We provide detailed analytics to track campaign performance, offering actionable insights that refine strategies and ensure your marketing efforts deliver measurable results consistently over time.',
        image: '/images/serviceDetails/digital-analytics.avif',
      },
    ],
    benefits: [
      {
        title: 'Increased visibility',
        description:
          'Strategic SEO and social media campaigns boost your online presence, ensuring your brand appears prominently in search results and feeds, attracting more potential customers daily.',
      },
      {
        title: 'Higher ROI',
        description:
          'Targeted PPC and content strategies maximize returns by focusing ad spend on high-value audiences, delivering measurable results that outperform traditional marketing with greater efficiency.',
      },
      {
        title: 'Better engagement',
        description:
          'Interactive campaigns on social platforms and personalized content foster deeper connections with your audience, encouraging likes, shares, and comments that amplify your brand’s reach.',
      },
      {
        title: 'Brand awareness',
        description:
          'Consistent digital presence across channels builds recognition, embedding your brand in customers’ minds and establishing trust through repeated, strategic exposure over time.',
      },
      {
        title: 'Targeted audience reach',
        description:
          'Precise demographic and behavioral targeting ensures your marketing efforts hit the right people, increasing relevance and conversion potential with tailored messages for specific groups.',
      },
      {
        title: 'Measurable results',
        description:
          'Detailed analytics track campaign performance in real-time, providing clear insights into what works, allowing data-driven adjustments to optimize impact and budget allocation effectively.',
      },
      {
        title: 'Cost-effective advertising',
        description:
          'Digital channels offer flexible budgeting and high-impact results at lower costs than traditional media, optimizing your ad spend for maximum reach and engagement efficiently.',
      },
      {
        title: 'Improved conversion tracking',
        description:
          'Advanced tools monitor user actions from click to purchase, offering precise data on conversions, enabling refined strategies that boost sales and marketing effectiveness consistently.',
      },
      {
        title: 'Global market access',
        description:
          'Digital campaigns reach audiences worldwide with ease, breaking geographical barriers and allowing your brand to compete in international markets without physical presence or high costs.',
      },
      {
        title: 'Real-time adaptability',
        description:
          'Instant feedback from campaigns allows quick adjustments to messaging or targeting, ensuring your marketing stays relevant and effective in response to trends or audience shifts.',
      },
    ],
    heroBackgroundImage: '/images/servicesHero/digital-marketing-hero.jpg',
  },
  {
    id: 'devops-automation',
    title: 'DevOps & Automation',
    description:
      'Streamlining your software development lifecycle through DevOps practices.',
    image: '/images/servicesImages/dev-ops.avif',
    details: [
      {
        topic: 'CI/CD pipeline setup',
        description:
          'We implement continuous integration and deployment pipelines to automate builds and releases, accelerating development cycles and ensuring your software is delivered quickly and reliably every time.',
        image: '/images/serviceDetails/devops-cicd.avif',
      },
      {
        topic: 'Infrastructure as Code',
        description:
          'Using tools like Terraform, we define infrastructure in code, enabling consistent, repeatable deployments and rapid scaling, reducing manual errors and enhancing environment management efficiency.',
        image: '/images/serviceDetails/devops-iac.avif',
      },
      {
        topic: 'Automated testing',
        description:
          'Our automated testing suites run continuously, catching bugs early in development, ensuring high-quality code, and reducing post-release issues for a more reliable software product consistently.',
        image: '/images/serviceDetails/devops-testing.avif',
      },
      {
        topic: 'Monitoring and logging',
        description:
          'We set up real-time monitoring and detailed logging to track application health, quickly identifying and resolving issues to maintain performance and uptime across all environments effectively.',
        image: '/images/serviceDetails/devops-monitoring.avif',
      },
      {
        topic: 'Containerization',
        description:
          'Using Docker and Kubernetes, we containerize applications for portability and scalability, ensuring consistent performance across development, testing, and production environments with minimal configuration hassles.',
        image: '/images/serviceDetails/devops-containerization.avif',
      },
    ],
    benefits: [
      {
        title: 'Faster deployments',
        description:
          'Automated CI/CD pipelines accelerate release cycles, enabling your team to deploy updates and new features quickly, keeping your software competitive and responsive to user needs.',
      },
      {
        title: 'Improved reliability',
        description:
          'Rigorous automated testing and monitoring ensure consistent performance and catch issues early, reducing bugs and delivering stable software that users can depend on every time.',
      },
      {
        title: 'Reduced costs',
        description:
          'Efficient resource use and automation of repetitive tasks lower development and operational expenses, freeing up budget for innovation and other critical business investments effectively.',
      },
      {
        title: 'Better collaboration',
        description:
          'Integrated DevOps tools and practices align development and operations teams, fostering seamless communication and teamwork that accelerate delivery and improve project outcomes consistently.',
      },
      {
        title: 'Enhanced quality assurance',
        description:
          'Automated tests run continuously throughout development, identifying defects early and ensuring high-quality code, which minimizes post-release fixes and maintains user satisfaction.',
      },
      {
        title: 'Scalable development processes',
        description:
          'Flexible DevOps frameworks adapt to growing project demands, supporting larger teams and complex applications without sacrificing speed or quality as your business expands steadily.',
      },
      {
        title: 'Reduced downtime',
        description:
          'Proactive monitoring and rapid recovery processes minimize service interruptions, ensuring high uptime and reliability that keep your applications running smoothly for users always.',
      },
      {
        title: 'Improved security',
        description:
          'Automated security checks and infrastructure as code integrate protection into every stage, reducing vulnerabilities and ensuring compliance with standards for a safer software lifecycle.',
      },
      {
        title: 'Faster feedback loops',
        description:
          'Continuous monitoring and testing provide instant insights into performance and issues, allowing rapid iterations that refine software quality and meet user expectations more effectively.',
      },
      {
        title: 'Resource optimization',
        description:
          'Containerization and automation maximize server efficiency, reducing waste and ensuring resources are used effectively, which lowers costs and boosts performance across development environments.',
      },
    ],
    heroBackgroundImage: '/images/servicesHero/devops-hero.avif',
  },
];

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  // const router = useRouter();

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-800">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{`${service.title} | AonixGlobalAI`}</title>
        <meta name="description" content={service.description} />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 h-[400px] overflow-hidden">
        <div className="relative h-full container mx-auto px-4 md:px-6 lg:px-8">
          <div
            className="absolute inset-0 mix-blend-overlay w-full bg-fixed bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${service.heroBackgroundImage})`,
              transform: 'scale(1)',
            }}
          />
          <div className="h-full flex flex-col items-start justify-center w-full max-w-[1140px] mx-auto animate-fade-in-left">
            <h1 className="text-white font-black text-[clamp(1.5rem,5vw,3rem)] max-w-[800px] leading-tight">
              {service.title}
            </h1>
            <p className="text-blue-100 text-[clamp(1rem,2vw,1.25rem)] max-w-[600px] mt-4">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Service Image */}
            <div className="relative h-[400px] w-full">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Service Details */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-900">
                What We Offer
              </h2>
              <ul className="space-y-4">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">{detail.topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Approach Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Our Approach
            </h2>
            {service.details.map((detail, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left: Topic and Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-sky-700">
                    {detail.topic}
                  </h3>
                  <p className="text-gray-600">{detail.description}</p>
                </div>
                {/* Right: Image */}
                <div className="relative h-[200px] w-full">
                  <Image
                    src={detail.image}
                    alt={detail.topic}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md ">
                  <p className="text-sky-700 font-semibold">{benefit.title}</p>
                  <p className="text-gray-600 text-sm mt-2">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-800 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started with {service.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Static site generation
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = services.map((service) => ({
    params: { serviceId: service.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ServicePageProps> = async (
  context
) => {
  const serviceId = context.params?.serviceId as string;
  const service = services.find((s) => s.id === serviceId) || null;

  return {
    props: {
      service,
    },
  };
};

export default ServicePage;
