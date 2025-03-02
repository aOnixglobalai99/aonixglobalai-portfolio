import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Service data type
interface Benefit {
  title: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string[];
  benefits: Benefit[];
  heroBackgroundImage: string;
}

interface ServicePageProps {
  service: Service | null;
}

// Service data with 10 benefits per service
const services: Service[] = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Development',
    description:
      'Crafting user-centric designs that focus on functionality and aesthetics.',
    image: '/images/servicesImages/ui.avif',
    details: [
      'User research and analysis',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Responsive design implementation',
      'Usability testing',
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
      'Custom web application development',
      'Frontend and backend development',
      'Database integration',
      'Performance optimization',
      'Security implementation',
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
      'Native app development (iOS & Android)',
      'Cross-platform development',
      'App store deployment',
      'UI/UX for mobile',
      'Maintenance and updates',
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
      'Custom CMS development',
      'WordPress/Shopsify integration',
      'Content workflow management',
      'SEO optimization',
      'User role management',
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
      'RESTful API development',
      'Third-party API integration',
      'API documentation',
      'Security implementation',
      'Performance optimization',
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
      'Cloud architecture design',
      'AWS/Azure/Google Cloud deployment',
      'Cloud migration services',
      'Scalability planning',
      'Cost optimization',
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
      'Machine learning implementation',
      'Natural language processing',
      'Predictive analytics',
      'AI model training',
      'Automation solutions',
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
      'SEO optimization',
      'PPC campaign management',
      'Social media marketing',
      'Content marketing',
      'Analytics and reporting',
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
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Automated testing',
      'Monitoring and logging',
      'Containerization',
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
  const router = useRouter();

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
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
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
