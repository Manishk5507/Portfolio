import React, { useState } from 'react';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
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
    <section id="contact" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-secondary-700 leading-relaxed mb-8">
                I'm always interested in new opportunities, interesting projects, and meeting new people. 
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="card p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900">{method.title}</h4>
                      <p className="text-sm text-secondary-600">{method.description}</p>
                    </div>
                  </div>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-secondary-700 font-medium">{method.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Availability Status */}
            <div className="card p-6 bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-green-800">Currently Available</h4>
                  <p className="text-green-700 text-sm">{data.availability}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-secondary-400 text-secondary-600 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700 text-white transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-secondary-600 border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-800 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;