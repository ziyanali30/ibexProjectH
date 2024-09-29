import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
function About() {
  const aboutCard = [
    {
      title: "Global Presence",
      description:
        "With operations in over 20 countries, we are truly a global leader.",
    },
    {
      title: "Innovative Solutions",
      description:
        "Our cutting-edge technology drives efficiency in all sectors.",
    },
    {
      title: "Award-Winning Support",
      description:
        "Our customer support has won numerous awards across the globe.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>About US - Ibex 🐐</title>
      </Helmet>
      <section className="py-12 bg-gray-100 dark:bg-darkBg">
        <div className="container mx-auto px-4 dark:text-darkText">
          <motion.h2
            className="text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Ibex
          </motion.h2>
          <motion.p
            className="text-lg text-center text-gray-600  dark:text-darkText max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            At Ibex, we redefine customer engagement strategies to ensure the
            success of our partners. Our solutions are crafted to deliver
            innovation, efficiency, and outstanding customer experiences.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutCard.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 dark:text-darkText shadow-lg rounded-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
