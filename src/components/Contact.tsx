import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted!'); // Just a simple placeholder for now.
    // You can log formData to check its values
    console.log(formData);
  };
    return (
      <>
      <Helmet>
        <title>Contact US - Ibex 🐐</title>
      </Helmet>
        <section id="contact" className="py-16 bg-gray-100 dark:bg-darkBg" w-full>
        <div className="container-fluid mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-darkText">Contact Us</h2>
          <p className="text-gray-700 mb-12 max-w-lg mx-auto dark:text-darkText">
            Have questions or need assistance? Feel free to reach out to us!
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
            <div className="mb-6">
              <label className="block text-left font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 p-3 block w-full border border-gray-300 rounded-md"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-left font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                  id="email"
            name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-left font-medium text-gray-700 mb-2">Message</label>
              <textarea
              id="message"
              name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
            onChange={handleChange}
            required
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      </>
    );
};

export default Contact;