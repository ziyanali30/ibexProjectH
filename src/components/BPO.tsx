import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Testimonials from './Testimonials'; // Import Testimonials component
import Contact from './Contact'; // Import Contact component

const BPOServices: React.FC = () => {
  const bpoServices = [
    {
      title: 'Customer Support',
      description: '24/7 call center services, multi-channel support including phone, email, and chat, along with technical support and troubleshooting.',
      icon: '📞',
    },
    {
      title: 'Data Entry and Management',
      description: 'Accurate data entry, processing, analysis, and database management solutions tailored to your business needs.',
      icon: '💾',
    },
    {
      title: 'Telemarketing & Lead Generation',
      description: 'Outbound calling services, market research, surveys, and appointment scheduling to boost your sales pipeline.',
      icon: '📊',
    },
    {
      title: 'HR Outsourcing',
      description: 'Recruitment, payroll processing, and employee benefits management handled by experts.',
      icon: '👥',
    },
    {
      title: 'Accounting and Finance',
      description: 'Comprehensive bookkeeping, financial reporting, and tax preparation services for your business.',
      icon: '📈',
    },
  ];

  const whyChooseUsPoints = [
    'Expert team with deep industry knowledge and expertise.',
    'Cost-effective pricing models that help reduce operational costs.',
    'Tailored solutions designed to meet your specific business needs.',
    'State-of-the-art technology ensuring reliable and efficient service delivery.',
  ];

  const processSteps = [
    'Consultation: We begin by understanding your business needs thoroughly.',
    'Proposal: We offer a tailored proposal outlining services and pricing.',
    'Implementation: Our team closely collaborates with you to implement the solutions.',
    'Ongoing Support: We provide continuous optimization and support to ensure satisfaction.',
  ];

  const faqItems = [
    { question: 'Which industries do you serve?', answer: 'We provide BPO services to industries such as retail, healthcare, finance, technology, and more.' },
    { question: 'Can your team work with our in-house software?', answer: 'Yes, we can adapt to your existing systems or suggest new tools for efficiency.' },
    { question: 'What pricing models do you offer?', answer: 'We provide flexible pricing models based on your specific business requirements and volume.' },
    { question: 'How secure is your data management service?', answer: 'We implement advanced security protocols and ensure compliance with data protection regulations.' },
  ];

  return (
    <>
      <Helmet>
        <title>BPO Services - AXIMO </title>
      </Helmet>

      <section className="py-16 bg-gray-100 w-full dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* BPO Services Section */}
          <motion.h2
            className="text-4xl font-bold text-center mb-8 text-black dark:text-darkText"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            BPO Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bpoServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg text-center dark:bg-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}>
                <div className="text-6xl mb-4">{service.icon}</div>
                <h5 className="text-2xl font-semibold mb-2 text-black dark:text-white">{service.title}</h5>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <motion.h2
            className="text-4xl font-bold text-center mt-16 mb-8 text-black dark:text-darkText"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Why Choose Us
          </motion.h2>

          <ul className="list-disc pl-6 md:pl-16 space-y-4 text-gray-700 dark:text-gray-300">
            {whyChooseUsPoints.map((point, index) => (
              <motion.li
                key={index}
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}>
                {point}
              </motion.li>
            ))}
          </ul>

          {/* Our Process Section */}
          <motion.h2
            className="text-4xl font-bold text-center mt-16 mb-8 text-black dark:text-darkText"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Our Process
          </motion.h2>

          <ul className="list-disc pl-6 md:pl-16 space-y-4 text-gray-700 dark:text-gray-300">
            {processSteps.map((step, index) => (
              <motion.li
                key={index}
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}>
                {step}
              </motion.li>
            ))}
          </ul>

          {/* FAQ Section */}
          <motion.h2
            className="text-4xl font-bold text-center mt-16 mb-8 text-black dark:text-darkText"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg dark:bg-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}>
                <h5 className="text-2xl font-semibold mb-2 text-black dark:text-white">{item.question}</h5>
                <p className="text-gray-700 dark:text-gray-300">{item.answer}</p>
              </motion.div>
            ))}
          </div>

          <Testimonials />
          <Contact />
        </div>
      </section>
    </>
  );
};

export default BPOServices;
