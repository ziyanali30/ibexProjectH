import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import supabaseClient from '../helper/supabase';
import { sendemail } from '../helper/sendmail';
import { toast } from 'react-toastify';
import AnalyticsComponent from './analytics';

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

    // Define an inner async function to handle the Supabase query
    const submitData = async () => {
      try {
        console.log("called submit data")
        if (formData.name !=null){
            const { data, error } = await supabaseClient
              .from("ContactFormData")
              .insert({
                name: formData.name,
                email: formData.email,
                message: formData.message,
              });
            const emails= await sendemail(formData.name,formData.email,formData.message);
          }
          toast.success('Form submitted successfully!', {
            position: 'top-right', // Use string literals for position
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          // console.log('Inserted data:', data);
          // Clear the form after successful submission
          setFormData({ name: '', email: '', message: '' });
      } catch (err) {
        console.error('Unexpected error:', err);
        alert('An unexpected error occurred. Please try again.');
      }
    };

    // Call the inner async function
    submitData();
  };

  return (
    <>
      <Helmet>
        <title>Contact US - AXIMO 🐐</title>
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
                required
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
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
