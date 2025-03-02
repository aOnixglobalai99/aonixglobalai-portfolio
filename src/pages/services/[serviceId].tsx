import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

// service data type
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string[];
  benefits: string[];
  heroBackgroundImage: string;
}

interface ServicePageProps {
  service: Service | null;
}

// Service data
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
      'Improved user satisfaction',
      'Increased conversion rates',
      'Better brand perception',
      'Reduced development costs',
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
      'Scalable architecture',
      'High performance',
      'Secure applications',
      'Easy maintenance',
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
      'Wider audience reach',
      'Enhanced user engagement',
      'Better performance',
      'Offline capabilities',
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
      'Easy content updates',
      'Improved SEO rankings',
      'Reduced maintenance time',
      'Team collaboration',
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
      'Seamless integrations',
      'Improved scalability',
      'Better connectivity',
      'Reduced development time',
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
      'High availability',
      'Cost efficiency',
      'Scalable infrastructure',
      'Enhanced security',
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
      'Data-driven decisions',
      'Process automation',
      'Improved efficiency',
      'Competitive advantage',
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
      'Increased visibility',
      'Higher ROI',
      'Better engagement',
      'Brand awareness',
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
      'Faster deployments',
      'Improved reliability',
      'Reduced costs',
      'Better collaboration',
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
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-gray-800 font-medium">{benefit}</p>
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
