import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendEmail, validateEmailConfig } from '../services/emailService';
import { 
  AnimatedSection, 
  StaggeredContainer,
  MagneticButton,
  FloatingElement
} from './AnimatedComponents';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  staggerItem,
  cardHover,
  pulseAnimation
} from '../utils/animations';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isEmailConfigured, setIsEmailConfigured] = useState(false);

  // Check email configuration on component mount
  useEffect(() => {
    setIsEmailConfigured(validateEmailConfig());
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      // Check if email service is configured
      if (!isEmailConfigured) {
        throw new Error('Email service is not configured. Please contact the administrator.');
      }

      // Send email using EmailJS
      const result = await sendEmail(formData);

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: data.email,
      href: `mailto:${data.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: data.phone,
      href: `tel:${data.phone}`,
      description: 'Call me for urgent matters'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: data.address,
      description: 'Based in'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Response Time',
      value: data.responseTime,
      description: 'Average response time'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement className="absolute top-20 right-10">
          <div className="w-32 h-32 bg-primary-100 rounded-full opacity-20" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-32 left-16">
          <div className="w-24 h-24 bg-primary-200 rounded-full opacity-30" />
        </FloatingElement>
        <motion.div
          className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full opacity-10"
          {...pulseAnimation}
        />
      </div>

      <div className="container-custom px-3 sm:px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16" animation="fadeInUp">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-2 sm:mb-3 lg:mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's <span className="text-gradient gradient-text">Connect</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-secondary-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {data.subtitle}
          </motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          {/* Contact Information */}
          <AnimatedSection animation="fadeInLeft">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.h3 
                  className="text-lg sm:text-xl lg:text-2xl font-display font-semibold text-secondary-900 mb-3 sm:mb-4 lg:mb-6"
                  whileHover={{ color: "#2563eb" }}
                  transition={{ duration: 0.2 }}
                >
                  Get in Touch
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-secondary-700 leading-relaxed mb-4 sm:mb-6 lg:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  I'm always interested in new opportunities, interesting projects, and meeting new people. 
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you.
                </motion.p>
              </motion.div>

              {/* Contact Methods */}
              <StaggeredContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {contactMethods.map((method, index) => (
                  <motion.div 
                    key={index} 
                    variants={staggerItem}
                    className="card p-3 sm:p-4 lg:p-6 group cursor-pointer"
                    {...cardHover}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    onClick={() => method.href && window.open(method.href, '_self')}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 mb-2 sm:mb-3">
                      <motion.div 
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0"
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: "#3b82f6",
                          color: "#ffffff"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {method.icon}
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <motion.h4 
                          className="font-semibold text-secondary-900 text-xs sm:text-sm lg:text-base group-hover:text-primary-600 transition-colors duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {method.title}
                        </motion.h4>
                        <motion.p 
                          className="text-xs sm:text-sm text-secondary-600"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                        >
                          {method.description}
                        </motion.p>
                      </div>
                    </div>
                    {method.href ? (
                      <motion.a
                        href={method.href}
                        className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 text-xs sm:text-sm lg:text-base break-all"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {method.value}
                      </motion.a>
                    ) : (
                      <motion.p 
                        className="text-secondary-700 font-medium text-xs sm:text-sm lg:text-base"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      >
                        {method.value}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </StaggeredContainer>

              {/* Availability Status */}
              <motion.div 
                className="card p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-green-50 to-green-100 border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <motion.div 
                    className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div>
                    <h4 className="font-semibold text-green-800 text-xs sm:text-sm lg:text-base">Currently Available</h4>
                    <p className="text-green-700 text-xs sm:text-sm">{data.availability}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fadeInRight">
            <motion.div 
              className="card p-4 sm:p-6 lg:p-8"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl font-display font-semibold text-secondary-900 mb-3 sm:mb-4 lg:mb-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ color: "#2563eb" }}
              >
                Send a Message
              </motion.h3>
              
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-3 sm:space-y-4 lg:space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
                  variants={staggerItem}
                >
                  <motion.div variants={staggerItem}>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2">
                      Your Name *
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 lg:py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-sm sm:text-base"
                      placeholder="John Doe"
                      whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                  <motion.div variants={staggerItem}>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2">
                      Email Address *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 lg:py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-sm sm:text-base"
                      placeholder="john@example.com"
                      whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div variants={staggerItem}>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2">
                    Subject *
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 lg:py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Project Inquiry"
                    whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                
                <motion.div variants={staggerItem}>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 lg:py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                    whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                
                <motion.div variants={staggerItem}>
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting || !isEmailConfigured}
                    className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                      isSubmitting || !isEmailConfigured
                        ? 'bg-secondary-400 text-secondary-600 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 text-white neon-glow-hover'
                    }`}
                    as="button"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <motion.div 
                          className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-secondary-600 border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </span>
                    ) : !isEmailConfigured ? (
                      'Email Service Not Configured'
                    ) : (
                      'Send Message'
                    )}
                  </MagneticButton>
                </motion.div>
              </motion.form>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    className="mt-6 p-4 bg-green-100 border border-green-200 rounded-lg"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-2">
                      <motion.svg 
                        className="w-5 h-5 text-green-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                      <motion.p 
                        className="text-green-800 font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {submitMessage || 'Thank you! Your message has been sent successfully.'}
                      </motion.p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    className="mt-6 p-4 bg-red-100 border border-red-200 rounded-lg"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-2">
                      <motion.svg 
                        className="w-5 h-5 text-red-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </motion.svg>
                      <motion.p 
                        className="text-red-800 font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {submitMessage || 'Failed to send message. Please try again.'}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Configuration Warning */}
              {!isEmailConfigured && (
                <motion.div 
                  className="mt-6 p-4 bg-yellow-100 border border-yellow-200 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.svg 
                      className="w-5 h-5 text-yellow-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </motion.svg>
                    <p className="text-yellow-800 font-medium">
                      Email service is not configured. Please use the direct email link above.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatedSection>
        </div>


      </div>
    </section>
  );
};

export default Contact;