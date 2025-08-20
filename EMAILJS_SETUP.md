# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form functionality in your portfolio.

## What is EmailJS?

EmailJS is a service that allows you to send emails directly from client-side JavaScript without needing a backend server. It's perfect for static websites and portfolios.

## Setup Steps

### 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure (HTML format):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">📧 New Contact Message</h1>
            <p style="color: #e8e8e8; margin: 10px 0 0 0; font-size: 14px;">You have received a new message from your portfolio</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px 20px;">
            
            <!-- Sender Info -->
            <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #667eea;">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                        <span style="color: white; font-size: 20px;">👤</span>
                    </div>
                    <div>
                        <h2 style="margin: 0; color: #2c3e50; font-size: 20px; font-weight: 600;">{{name}}</h2>
                        <p style="margin: 5px 0 0 0; color: #6c757d; font-size: 14px;">{{from_email}}</p>
                    </div>
                </div>
                
                <div style="border-top: 1px solid #e9ecef; padding-top: 15px;">
                    <p style="margin: 0; color: #6c757d; font-size: 13px;">
                        <strong>📅 Received:</strong> {{time}}
                    </p>
                    <p style="margin: 8px 0 0 0; color: #6c757d; font-size: 13px;">
                        <strong>📋 Subject:</strong> {{subject}}
                    </p>
                </div>
            </div>
            
            <!-- Message Content -->
            <div style="background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; padding: 25px;">
                <h3 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 16px; font-weight: 600; border-bottom: 2px solid #667eea; padding-bottom: 8px; display: inline-block;">💬 Message</h3>
                <div style="color: #495057; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">{{message}}</div>
            </div>
            
            <!-- Action Buttons -->
            <div style="text-align: center; margin-top: 30px; padding-top: 25px; border-top: 1px solid #e9ecef;">
                <a href="mailto:{{from_email}}?subject=Re: {{subject}}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 25px; font-weight: 600; font-size: 14px; margin: 0 10px; transition: all 0.3s ease;">
                    📧 Reply to {{name}}
                </a>
            </div>
            
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="margin: 0; color: #6c757d; font-size: 12px;">
                This message was sent from your portfolio contact form at 
                <strong>manishkumar.dev</strong>
            </p>
            <p style="margin: 8px 0 0 0; color: #adb5bd; font-size: 11px;">
                Please respond within 24-48 hours for the best experience.
            </p>
        </div>
        
    </div>
</body>
</html>
```

**Subject Line:** `New Contact Form Message: {{subject}}`

**Recommended Template (Clear Sender/Receiver Distinction):**

```html
<div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; background-color: #ffffff; border: 1px solid #e5e7eb;">
    
    <!-- Header -->
    <div style="background-color: #4f46e5; padding: 20px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">📧 New Contact Message</h1>
        <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 14px;">Someone contacted you through your portfolio</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 20px; background-color: #f9fafb;">
        
        <!-- Important Notice -->
        <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px; padding: 15px; margin-bottom: 20px;">
            <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: bold;">
                📬 Message FROM: {{name}} ({{from_email}}) → TO: Manish Kumar (7055ranamanish@gmail.com)
            </p>
        </div>
        
        <!-- Sender Info Card -->
        <table style="width: 100%; background-color: #ffffff; border: 2px solid #4f46e5; border-radius: 8px; margin-bottom: 20px;" cellpadding="0" cellspacing="0">
            <tr>
                <td style="padding: 20px;">
                    <div style="background-color: #eff6ff; padding: 10px; border-radius: 6px; margin-bottom: 15px;">
                        <h3 style="margin: 0 0 5px 0; color: #1e40af; font-size: 14px;">👤 SENDER DETAILS:</h3>
                    </div>
                    <table cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="width: 60px; vertical-align: top;">
                                <div style="width: 50px; height: 50px; background-color: #4f46e5; border-radius: 50%; text-align: center; line-height: 50px; color: white; font-size: 20px;">👤</div>
                            </td>
                            <td style="vertical-align: top; padding-left: 15px;">
                                <h2 style="margin: 0 0 5px 0; color: #1f2937; font-size: 18px; font-weight: bold;">{{name}}</h2>
                                <p style="margin: 0 0 8px 0; color: #4f46e5; font-size: 14px; font-weight: bold;">📧 {{from_email}}</p>
                                <p style="margin: 0; color: #6b7280; font-size: 12px;">
                                    <strong>📅 Sent:</strong> {{time}}<br>
                                    <strong>📋 Subject:</strong> {{subject}}
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        
        <!-- Message Content -->
        <table style="width: 100%; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 20px;" cellpadding="0" cellspacing="0">
            <tr>
                <td style="padding: 20px;">
                    <div style="background-color: #f0f9ff; padding: 10px; border-radius: 6px; margin-bottom: 15px;">
                        <h3 style="margin: 0; color: #0369a1; font-size: 14px;">💬 MESSAGE FROM {{name}}:</h3>
                    </div>
                    <div style="color: #374151; font-size: 15px; line-height: 1.6; background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #4f46e5;">{{message}}</div>
                </td>
            </tr>
        </table>
        
        <!-- Reply Button -->
        <div style="text-align: center; margin: 20px 0;">
            <a href="mailto:{{from_email}}?subject=Re: {{subject}}&body=Hi {{name}},%0D%0A%0D%0AThank you for contacting me through my portfolio.%0D%0A%0D%0A" style="display: inline-block; background-color: #059669; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; font-size: 14px; margin-right: 10px;">
                ✉️ Reply to {{name}}
            </a>
            <a href="mailto:{{from_email}}" style="display: inline-block; background-color: #6b7280; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; font-size: 14px;">
                📧 Send New Email
            </a>
        </div>
        
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f3f4f6; padding: 15px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; color: #6b7280; font-size: 12px;">
            <strong>This message was sent TO you (Manish Kumar) FROM {{name}} via your portfolio contact form</strong>
        </p>
        <p style="margin: 5px 0 0 0; color: #9ca3af; font-size: 11px;">
            Click "Reply to {{name}}" to respond directly to {{from_email}}
        </p>
    </div>
    
</div>
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Important: Understanding Email Flow

**Why sender and receiver appear the same:**
- EmailJS uses YOUR email service (Gmail) to send emails
- The "From" field will always show your email (7055ranamanish@gmail.com) for security reasons
- The visitor's email goes in the "Reply-To" field
- This is normal behavior for email services like Gmail, Outlook, etc.

**How the email flow works:**
1. Visitor fills form with their email (e.g., john@example.com)
2. EmailJS sends email FROM your Gmail TO your Gmail
3. The template shows the visitor's details clearly
4. When you click "Reply", it goes to the visitor's email (john@example.com)

**To make it clear who contacted you:**
- Use the updated template above which clearly shows sender details
- The template highlights: "Message FROM: [Visitor Name] ([Visitor Email]) → TO: Manish Kumar"
- Reply buttons are pre-configured to respond to the visitor's email

### 5. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_abcdefghijk123456`)

### 5. Update Environment Variables

Update your `.env` file with the following values:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your-service-id-here
VITE_EMAILJS_TEMPLATE_ID=your-template-id-here
VITE_EMAILJS_PUBLIC_KEY=your-public-key-here
```

Replace the placeholder values with your actual EmailJS credentials.

### 6. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Template Variables

The following variables are available in your EmailJS template:

- `{{name}}` - Sender's name (displayed in the message)
- `{{time}}` - Timestamp when the message was sent (formatted as: "Monday, January 15, 2024 at 02:30 PM EST")
- `{{message}}` - Email message content
- `{{subject}}` - Email subject (used in subject line)
- `{{from_name}}` - Sender's name (alternative reference)
- `{{from_email}}` - Sender's email address
- `{{to_name}}` - Your name (hardcoded as "Manish Kumar")
- `{{reply_to}}` - Sender's email (for easy replies)

## Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- 2 email services
- 2 email templates
- Basic support

## Troubleshooting

### Common Issues:

1. **"Email service is not configured" error**
   - Check that all environment variables are set correctly
   - Ensure the `.env` file is in the project root
   - Restart the development server after updating `.env`

2. **"Failed to send email" error**
   - Verify your EmailJS service is active
   - Check that your email template exists and is published
   - Ensure your public key is correct

3. **Emails not being received**
   - Check your spam/junk folder
   - Verify the email service configuration
   - Test with a different email address

### Debug Mode:

To enable debug logging, open the browser console when testing the contact form. Error messages will be logged there.

## Security Notes

- The public key is safe to expose in client-side code
- EmailJS handles rate limiting automatically
- Consider implementing additional client-side validation for better UX

## Support

For more help, visit:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS FAQ](https://www.emailjs.com/docs/faq/)
- [EmailJS Support](https://www.emailjs.com/support/)