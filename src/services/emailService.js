import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  } else {
    console.warn('EmailJS public key not found in environment variables');
  }
};

// Initialize EmailJS when the module loads
initEmailJS();

/**
 * Send email using EmailJS
 * @param {Object} formData - The form data to send
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.subject - Email subject
 * @param {string} formData.message - Email message
 * @returns {Promise<Object>} - Promise that resolves with success/error status
 */
export const sendEmail = async (formData) => {
  try {
    // Validate environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
    }

    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      throw new Error('All form fields are required.');
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address.');
    }

    // Prepare template parameters to match your email template
    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      }),
      to_name: 'Manish Kumar', // Your name
      reply_to: formData.email,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Email sent successfully!',
        data: response
      };
    } else {
      throw new Error('Failed to send email. Please try again.');
    }

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Return user-friendly error messages
    let errorMessage = 'Failed to send email. Please try again.';
    
    if (error.message.includes('configuration')) {
      errorMessage = 'Email service is not properly configured.';
    } else if (error.message.includes('required')) {
      errorMessage = error.message;
    } else if (error.message.includes('valid email')) {
      errorMessage = error.message;
    } else if (error.text) {
      // EmailJS specific error
      errorMessage = `Email service error: ${error.text}`;
    }

    return {
      success: false,
      message: errorMessage,
      error: error
    };
  }
};

/**
 * Validate email configuration
 * @returns {boolean} - True if configuration is valid
 */
export const validateEmailConfig = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  return !!(serviceId && templateId && publicKey);
};

/**
 * Get email configuration status
 * @returns {Object} - Configuration status object
 */
export const getEmailConfigStatus = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  return {
    isConfigured: !!(serviceId && templateId && publicKey),
    hasServiceId: !!serviceId,
    hasTemplateId: !!templateId,
    hasPublicKey: !!publicKey,
  };
};