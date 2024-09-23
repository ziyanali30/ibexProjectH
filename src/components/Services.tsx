import React from 'react';
import { Helmet } from 'react-helmet';
function Services() {
    const services = [
        {
          title: 'Customer Support',
          description: 'Providing exceptional customer support solutions.',
        },
        {
          title: 'Technical Support',
          description: 'Offering reliable and efficient technical support services.',
        },
        {
          title: 'Sales Support',
          description: 'Boosting sales through strategic engagement and management.',
        },
      ];
    
      return (
        <>
        <Helmet>
          <title>Services - Ibex 🐐</title>
        </Helmet>
        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </>
      );
    };
    
    export default Services;