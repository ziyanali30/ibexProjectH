import React from 'react';

function Contact() {
    return (
        <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-gray-700 mb-12 max-w-lg mx-auto">
            Have questions or need assistance? Feel free to reach out to us!
          </p>
          
          <form className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
            <div className="mb-6">
              <label className="block text-left font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-left font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-left font-medium text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                placeholder="Your Message"
              />
            </div>
  
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
};

export default Contact;