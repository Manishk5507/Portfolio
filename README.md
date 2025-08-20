# Portfolio Website

A modern, responsive portfolio website built with React 19, Vite, and Tailwind CSS. This is a personal portfolio showcasing skills, projects, experience, and achievements with real-time competitive programming ratings.

## 🚀 Features

- **Modern React 19**: Built with the latest React features and hooks
- **Responsive Design**: Fully responsive design that works perfectly on all devices
- **Modern UI/UX**: Clean and professional design with Tailwind CSS and smooth animations
- **Real-time Competitive Programming Ratings**: Live Codeforces and CodeChef ratings via APIs
- **Contact Form**: Functional contact form with EmailJS integration
- **Environment Variables**: Easy configuration without code changes
- **Fast Performance**: Built with Vite for optimal loading speeds and hot module replacement
- **SEO Friendly**: Proper meta tags and structure for better search engine visibility
- **Loading Screen**: Professional loading animation for better user experience
- **Smooth Scrolling**: Smooth navigation between sections
- **Timeline Component**: Interactive timeline for showcasing career progression

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript ES6+
- **Build Tool**: Vite 7.x
- **Styling**: Tailwind CSS 3.x with Typography plugin
- **Email Service**: EmailJS for contact form
- **APIs**: Codeforces API, CodeChef API (via proxy)
- **Development**: ESLint for code quality
- **Package Manager**: npm/yarn

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manishk5507/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your values:
   ```env
   # Portfolio Configuration
   VITE_PORTFOLIO_URL=https://your-portfolio-url.com
   VITE_RESUME_URL=https://your-resume-url.com
   VITE_AVATAR_URL=https://your-avatar-image-url.com
   
   # Competitive Programming Handles
   VITE_CODEFORCES_HANDLE=your-codeforces-handle
   VITE_CODECHEF_HANDLE=your-codechef-handle
   
   # EmailJS Configuration (see EMAILJS_SETUP.md)
   VITE_EMAILJS_SERVICE_ID=your-service-id
   VITE_EMAILJS_TEMPLATE_ID=your-template-id
   VITE_EMAILJS_PUBLIC_KEY=your-public-key
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 📝 Updating Content Without Redeployment

### Problem Solved
Previously, updating the resume or profile image required code changes and redeployment. Now you can update these URLs without touching the code!

### How it Works
The portfolio uses environment variables (`VITE_RESUME_URL`, `VITE_AVATAR_URL`) to load content URLs dynamically.

### Update Process

#### For Development:
1. Update the `.env` file with your new URLs (resume, avatar, etc.)
2. Restart the development server: `npm run dev`

#### For Production (depends on your hosting platform):

**Vercel:**
1. Go to your Vercel dashboard
2. Select your project → Settings → Environment Variables
3. Update `VITE_RESUME_URL`, `VITE_AVATAR_URL`, etc. with your new URLs
4. Redeploy (automatic in most cases)

**Netlify:**
1. Go to your Netlify dashboard
2. Site Settings → Environment Variables
3. Update the environment variables (`VITE_RESUME_URL`, `VITE_AVATAR_URL`)
4. Trigger a new deploy

**Other Platforms:**
- Update environment variables in your hosting platform's dashboard
- Most platforms will auto-redeploy when environment variables change

### URL Formats

**Resume URLs:**

*Google Drive (View Mode):*
```
https://drive.google.com/file/d/YOUR_FILE_ID/view
```

*Google Drive (Download Mode):*
```
https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
```

*Other Cloud Storage:*
- Dropbox: Use direct share links
- OneDrive: Use direct share links
- AWS S3: Use public bucket URLs

**Avatar Image URLs:**

*Cloudinary:*
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/image_id.jpg
```

*Other Image Hosting:*
- Imgur: Direct image links
- AWS S3: Public bucket image URLs
- GitHub: Raw file URLs from repositories
- Any CDN with direct image access

## 🔧 Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_PORTFOLIO_URL` | Your portfolio website URL | `https://manishkumar.dev` |
| `VITE_RESUME_URL` | Direct link to your resume | `https://drive.google.com/file/d/...` |
| `VITE_AVATAR_URL` | Direct link to your profile image | `https://cloudinary.com/...` |
| `VITE_CODEFORCES_HANDLE` | Your Codeforces username | `_.Manish._` |
| `VITE_CODECHEF_HANDLE` | Your CodeChef username | `manishk5507` |

### Updating Portfolio Data

Edit `/src/data/portfolioData.js` to update:
- **Personal Information**: Name, title, bio, contact details
- **Skills**: Technical skills with proficiency levels and categories
- **Projects**: Project showcase with descriptions, technologies, and links
- **Experience**: Work experience and responsibilities
- **Education**: Educational background and achievements
- **Social Links**: GitHub, LinkedIn, Twitter, Instagram, YouTube, Medium
- **Navigation**: Customize navigation menu items
- **Competitive Programming**: Handles for Codeforces and CodeChef

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── About.jsx       # About section component
│   │   ├── Contact.jsx     # Contact form with EmailJS
│   │   ├── Education.jsx   # Education section
│   │   ├── Experience.jsx  # Experience/Responsibility section
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Hero.jsx        # Hero/Landing section
│   │   ├── LoadingScreen.jsx # Loading animation
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── ScrollToTop.jsx # Scroll to top functionality
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Testimonials.jsx # Testimonials section
│   │   └── Timeline.jsx    # Career timeline
│   ├── data/
│   │   └── portfolioData.js # Main portfolio data configuration
│   ├── hooks/
│   │   └── useCompetitiveProgramming.js # Custom hook for CP ratings
│   ├── services/
│   │   ├── competitiveProgramming.js # API services for CP platforms
│   │   └── emailService.js # EmailJS service configuration
│   ├── assets/             # Static assets and images
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles with Tailwind
├── public/
│   ├── images/            # Public images
│   └── vite.svg          # Vite logo
├── .env                   # Environment variables (not in git)
├── .env.example          # Environment variables template
├── EMAILJS_SETUP.md      # Detailed EmailJS setup guide
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Set environment variables** in your hosting platform

3. **Deploy the `dist` folder** to your hosting service

### Recommended Hosting Platforms
- **Vercel** (Recommended for React apps)
- **Netlify** (Great for static sites)
- **GitHub Pages** (Free option)
- **AWS S3 + CloudFront** (Scalable option)

## 🔄 Content Update Workflow

### Resume Update:
1. **Upload new resume** to your cloud storage (Google Drive, Dropbox, etc.)
2. **Copy the new URL**
3. **Update `VITE_RESUME_URL`** in your hosting platform
4. **Wait for auto-deployment** (usually 1-2 minutes)
5. **Verify the change** on your live website

### Avatar Image Update:
1. **Upload new profile image** to your image hosting service (Cloudinary, Imgur, etc.)
2. **Copy the direct image URL**
3. **Update `VITE_AVATAR_URL`** in your hosting platform
4. **Wait for auto-deployment** (usually 1-2 minutes)
5. **Verify the change** on your live website

No code changes or manual redeployment needed! 🎉

## 📊 Real-time Competitive Programming Ratings

### How It Works
The portfolio automatically fetches your current ratings from Codeforces and CodeChef APIs every time someone visits your site. This ensures your competitive programming achievements are always up-to-date.

### Features:
- **Live Data**: Fetches current ratings from official APIs
- **Smart Caching**: Caches results for 5 minutes to avoid excessive API calls
- **Fallback System**: Uses static ratings if APIs are unavailable
- **Loading States**: Shows "..." while fetching data
- **Error Handling**: Gracefully handles API failures

### Supported Platforms:
- **Codeforces**: Uses official Codeforces API
- **CodeChef**: Uses community API with CORS support

### Configuration:
Update your competitive programming handles in `.env`:
```env
VITE_CODEFORCES_HANDLE=your-codeforces-handle
VITE_CODECHEF_HANDLE=your-codechef-handle
```

### API Endpoints Used:
- **Codeforces**: `https://codeforces.com/api/user.info?handles={handle}`
- **CodeChef**: `https://codechef-api.vercel.app/{handle}`

## � EmailJS Configuration

The contact form uses EmailJS to send emails directly from the client-side without a backend server.

### Quick Setup:

1. **Create EmailJS Account**: Sign up at [EmailJS.com](https://www.emailjs.com/)

2. **Add Email Service**: 
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Note the **Service ID**

3. **Create Email Template**:
   - Go to Email Templates → Create New Template
   - Use these template variables: `{{name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{time}}`
   - Note the **Template ID**

4. **Get Public Key**: 
   - Go to Account → General
   - Copy your **Public Key**

5. **Update Environment Variables**:
   ```env
   VITE_EMAILJS_SERVICE_ID=your-service-id-here
   VITE_EMAILJS_TEMPLATE_ID=your-template-id-here
   VITE_EMAILJS_PUBLIC_KEY=your-public-key-here
   ```

6. **Test**: Start dev server and test the contact form

### Template Variables Available:
- `{{name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Email subject
- `{{message}}` - Email message content
- `{{time}}` - Timestamp when message was sent
- `{{to_name}}` - Your name (hardcoded as "Manish Kumar")

### Free Plan Limits:
- 200 emails per month
- 2 email services
- 2 email templates

For detailed setup instructions with email templates, see [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

## �🛡️ Security Notes

- Environment variables starting with `VITE_` are exposed to the client
- Don't put sensitive information in these variables
- Use public, shareable URLs for resume links

## 🧪 Testing

This project uses Playwright for E2E testing to ensure all features work correctly across different browsers and devices.

### Setup Testing Environment

```bash
# Install dependencies (includes Playwright)
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests
npm run test:e2e

# Run tests with UI mode (interactive)
npm run test:e2e:ui

# Run tests in headed mode (see browser)
npm run test:e2e:headed

# Run tests for specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Test Coverage

The test suite covers:
- ✅ Homepage loading and basic functionality
- ✅ Navigation between sections
- ✅ Contact form validation and functionality
- ✅ Responsive design on mobile devices
- ✅ Competitive programming ratings loading
- ✅ Social links functionality
- ✅ Cross-browser compatibility

### Viewing Test Reports

```bash
# View HTML test report
npx playwright show-report
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact & Support

- **Email**: 7055ranamanish@gmail.com
- **LinkedIn**: [Manish Kumar](https://www.linkedin.com/in/manish-kumar-257580291)
- **GitHub**: [Manishk5507](https://github.com/Manishk5507)

For detailed EmailJS setup, see [EMAILJS_SETUP.md](EMAILJS_SETUP.md)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- Tailwind CSS for the utility-first CSS framework
- EmailJS for the email service
- Codeforces and CodeChef for their APIs

---

Built with ❤️ using React 19, Vite, and Tailwind CSS by [Manish Kumar](https://manishkumar.dev)