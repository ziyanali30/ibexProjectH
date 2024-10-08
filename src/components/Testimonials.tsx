import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Acme Corp",
      feedback:
        "AXIMO has transformed the way we engage with our customers. Their solutions are top-notch!",
    },
    {
      name: "Jane Smith",
      position: "CTO, Beta Inc",
      feedback:
        "The level of innovation and efficiency AXIMO brings to the table is unmatched.",
    },
    {
      name: "Emily Johnson",
      position: "CMO, Gamma LLC",
      feedback:
        "Our customer satisfaction has increased dramatically thanks to AXIMO.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Testimonials - AXIMO 🐐</title>
      </Helmet>
      <section
        className="py-12 bg-white dark:bg-darkBg w-full"
      >
        <div className="container-fluid mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-black dark:text-darkText">
            What Our Clients Say
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-1 "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 shadow-lg rounded-lg mx-4">
                <p className="text-lg text-gray-700 mb-4">
                  "{testimonial.feedback}"
                </p>
                <h4 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
