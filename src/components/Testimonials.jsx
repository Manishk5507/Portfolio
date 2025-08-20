import React, { useState, useEffect } from 'react';

const Testimonials = ({ data }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my colleagues and clients have to say about working with me.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-100 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-50 rounded-full translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10">
              {/* Quote icon */}
              <div className="text-6xl text-primary-200 mb-6">❝</div>
              
              {/* Testimonial content */}
              <blockquote className="text-xl lg:text-2xl text-secondary-700 leading-relaxed mb-8 font-medium">
                {data[currentTestimonial].content}
              </blockquote>
              
              {/* Author info */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <img
                  src={data[currentTestimonial].avatar}
                  alt={data[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-secondary-900 text-lg">
                    {data[currentTestimonial].name}
                  </h4>
                  <p className="text-secondary-600">
                    {data[currentTestimonial].position}
                  </p>
                  <p className="text-primary-600 font-medium">
                    {data[currentTestimonial].company}
                  </p>
                </div>
              </div>
              
              {/* Rating */}
              <StarRating rating={data[currentTestimonial].rating} />
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-3 mb-12">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary-600 w-8'
                  : 'bg-secondary-300 hover:bg-secondary-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card p-6 transition-all duration-300 cursor-pointer ${
                index === currentTestimonial
                  ? 'ring-2 ring-primary-600 shadow-xl scale-105'
                  : 'hover:shadow-lg hover:scale-102'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-secondary-600">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-primary-600 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-secondary-700 text-sm leading-relaxed mb-4 line-clamp-4">
                {testimonial.content}
              </blockquote>
              
              <StarRating rating={testimonial.rating} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card p-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join these satisfied clients and let's create something amazing together. 
              I'm committed to delivering exceptional results for every project.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-300"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;