import React from 'react';
import { Helmet } from 'react-helmet';
function Testimonials(){
    const testimonials = [
        {
          name: 'John Doe',
          position: 'CEO, Acme Corp',
          feedback: 'Ibex has transformed the way we engage with our customers. Their solutions are top-notch!',
        },
        {
          name: 'Jane Smith',
          position: 'CTO, Beta Inc',
          feedback: 'The level of innovation and efficiency Ibex brings to the table is unmatched.',
        },
        {
          name: 'Emily Johnson',
          position: 'CMO, Gamma LLC',
          feedback: 'Our customer satisfaction has increased dramatically thanks to Ibex.',
        },
      ];
    return(
        <>
        <Helmet>
          <title>Testimonials - Ibex 🐐</title>
        </Helmet>
         <section className="py-12 bg-white">
         <div className="container mx-auto px-4">
           <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((testimonial, index) => (
               <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-6">
                 <p className="text-lg text-gray-700 mb-4">"{testimonial.feedback}"</p>
                 <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                 <p className="text-sm text-gray-500">{testimonial.position}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
       </>
    );
};

export default Testimonials;