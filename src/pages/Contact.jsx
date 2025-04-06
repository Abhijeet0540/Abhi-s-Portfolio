import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form validation function
  const validateForm = () => {
    const { name, email, subject, message } = formData;
    return name.trim() !== '' &&
      email.trim() !== '' &&
      subject.trim() !== '' &&
      message.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email validation
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Function to send email using mailto link
  const sendEmail = () => {
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:abhijeetd439@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
    return true;
  };

  // Form submission handler with validation and email functionality
  const handleSubmitWithEmail = (e) => {
    e.preventDefault();

    // Validate form before sending
    if (validateForm()) {
      const emailSent = sendEmail();

      if (emailSent) {
        setFormStatus('success');

        // Reset form after submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setFormStatus(null);
        }, 3000);
      }
    } else {
      // Show validation error
      setFormStatus('error');

      // Clear error message after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen pt-5 pb-20 px-6 md:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#CDEA68]">Get In Touch</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-1/3"
        >
          <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>

            <motion.div variants={itemVariants} className="flex items-start mb-6">
              <FaMapMarkerAlt className="text-[#CDEA68] text-xl mt-1 mr-4" />
              <div>
                <h3 className="font-bold text-white">Location</h3>
                <p className="text-zinc-400">Mumbai, India</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start mb-6">
              <FaEnvelope className="text-[#CDEA68] text-xl mt-1 mr-4" />
              <div>
                <h3 className="font-bold text-white">Email</h3>
                <a href="mailto:abhijeetd439@gmail.com" className="text-zinc-400 hover:text-[#CDEA68] transition-colors">
                  abhijeetd439@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start mb-8">
              <FaPhone className="text-[#CDEA68] text-xl mt-1 mr-4" />
              <div>
                <h3 className="font-bold text-white">Phone</h3>
                <p className="text-zinc-400">+91 XXXXXXXXXX</p>
              </div>
            </motion.div>

            <motion.h3 variants={itemVariants} className="font-bold text-white mb-4">
              Connect With Me
            </motion.h3>

            <motion.div variants={itemVariants} className="flex space-x-4">
              <a
                href="https://github.com/Abhijeet0540"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#CDEA68] transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#CDEA68] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#CDEA68] transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:w-2/3"
        >
          <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
            <h2 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h2>

            {formStatus === 'success' && (
              <div className="bg-green-900 text-green-100 p-4 rounded-lg mb-6">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {formStatus === 'error' && (
              <div className="bg-red-900 text-red-100 p-4 rounded-lg mb-6">
                Please fill out all fields correctly before submitting.
              </div>
            )}

            <form onSubmit={handleSubmitWithEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-zinc-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#CDEA68]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-zinc-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#CDEA68]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-zinc-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#CDEA68]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-zinc-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-zinc-700 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#CDEA68]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#CDEA68] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#b8d356] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
