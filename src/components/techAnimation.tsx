'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack1 = [
  { name: 'Vue', src: '/images/line1/vuejs.webp' },
  { name: 'Next.js', src: '/images/line1/nextjs.webp' },
  { name: 'CSS', src: '/images/line1/css3.webp' },
  { name: 'HTML', src: '/images/line1/html5.webp' },
  { name: 'Figma', src: '/images/line1/figma.webp' },
  { name: 'GraphQL', src: '/images/line1/graphql.webp' },
  { name: 'Angular', src: '/images/line1/angular.png' },
  { name: 'React', src: '/images/line1/reactjs.webp' },
  { name: 'Tailwind', src: '/images/line1/tailwind.png' },
  { name: 'Svelte', src: '/images/line1/Svelte.png' },
  { name: 'Bootstrap', src: '/images/line1/bootstrap.png' },
];

const techStack2 = [
  { name: 'AzureSQL', src: '/images/line2/azureSQL.webp' },
  { name: 'Django', src: '/images/line2/django.webp' },
  { name: 'Flask', src: '/images/line2/flask.webp' },
  { name: 'Mongodb', src: '/images/line2/mongodb.webp' },
  { name: 'MySQL', src: '/images/line2/mySQL.webp' },
  { name: 'PostgreSQL', src: '/images/line2/postgreSQL.webp' },
  { name: 'Python', src: '/images/line2/python.webp' },
  { name: 'Ruby', src: '/images/line2/ruby.webp' },
  { name: 'Elasticsearch', src: '/images/line2/Elasticsearch.png' },
  { name: 'Redis', src: '/images/line2/redis.png' },
  { name: 'SQLite', src: '/images/line2/SQLite.png' },
];

const techStack3 = [
  { name: 'AmazonRDS', src: '/images/line3/amazonRDS.webp' },
  { name: 'Ansible', src: '/images/line3/ansible.webp' },
  { name: 'AWS', src: '/images/line3/aws.webp' },
  { name: 'Docker', src: '/images/line3/docker.webp' },
  { name: 'IBM Cloud', src: '/images/line3/ibm-cloud.webp' },
  { name: 'Kubernetes', src: '/images/line3/kubernetes.webp' },
  { name: 'Microsoft Azure', src: '/images/line3/microsoft-azure.webp' },
  { name: 'Saltstack', src: '/images/line3/saltstack.webp' },
  { name: 'Google Cloud', src: '/images/line3/google-cloud.png' },
  { name: 'Terraform', src: '/images/line3/terraform.png' },
  { name: 'Open Shift', src: '/images/line3/open-shift.png' },
];

const AnimatedRow = ({
  items,
  direction,
  duration,
}: {
  items: { name: string; src: string }[];
  direction: 'left' | 'right';
  duration: number;
}) => {
  return (
    <motion.div
      className="flex w-max"
      animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
    >
      {[...items, ...items].map((tech, index) => (
        <div
          key={index}
          className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex justify-center items-center w-24 h-24 md:w-32 md:h-32 mx-1 md:mx-2"
        >
          <Image
            src={tech.src}
            alt={tech.name}
            width={96}
            height={96}
            draggable="false"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default function TechIcons() {
  return (
    <div className="overflow-hidden bg-gray-100 py-4 md:py-6 space-y-2 md:space-y-4 mb-[100px]">
      <AnimatedRow items={techStack1} direction="left" duration={20} />
      <AnimatedRow items={techStack2} direction="right" duration={24} />
      <AnimatedRow items={techStack3} direction="left" duration={20} />
    </div>
  );
}
