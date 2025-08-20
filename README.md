# Portfolio Website

A modern, responsive portfolio website built with React.js, Vite, and Tailwind CSS. This portfolio showcases your skills, experience, projects, and provides a way for potential clients or employers to contact you.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Dynamic Content**: Easy to update personal information, skills, projects, and experience
- **Smooth Animations**: Engaging animations and transitions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessible**: WCAG compliant design

## 🛠️ Technologies Used

- **Frontend**: React.js 19, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Icons**: Heroicons, Custom SVG icons
- **Fonts**: Inter, Poppins (Google Fonts)
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── LoadingScreen.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── ScrollToTop.jsx
│   ├── Skills.jsx
│   └── Testimonials.jsx
├── data/               # Data configuration
│   └── portfolioData.js
├── App.jsx            # Main App component
├── index.css          # Global styles
└── main.jsx          # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### 1. Personal Information

Edit the `src/data/portfolioData.js` file to update your personal information:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... other personal details
  },
  // ... rest of the data
};
```

### 2. Skills

Update your technical and soft skills in the `skills` section:

```javascript
skills: {
  technical: [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        // ... add your skills
      ]
    }
  ],
  soft: [
    "Problem Solving",
    // ... add your soft skills
  ]
}
```

### 3. Experience

Add your work experience in the `experience` array:

```javascript
experience: [
  {
    id: 1,
    company: "Company Name",
    position: "Your Position",
    duration: "2022 - Present",
    // ... other details
  }
]
```

### 4. Projects

Showcase your projects in the `projects` array:

```javascript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js"],
    // ... other project details
  }
]
```

### 5. Colors and Styling

Customize the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // ... your primary colors
      },
      secondary: {
        // ... your secondary colors
      }
    }
  }
}
```

### 6. Images

Replace placeholder images with your actual images:

- Profile picture: Update the `avatar` field in personal data
- Project images: Update the `image` field in each project
- Company logos: Update the `logo` field in experience and education

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Run: `npm run deploy`

## 📧 Contact Form

The contact form is currently set up with client-side validation. To make it functional, you can:

1. **Use a form service** like Formspree, Netlify Forms, or EmailJS
2. **Set up a backend** with Node.js/Express
3. **Use serverless functions** with Vercel or Netlify

## 🎯 SEO Optimization

The portfolio includes:

- Meta tags for description, keywords, and author
- Open Graph tags for social media sharing
- Twitter Card tags
- Semantic HTML structure
- Alt tags for images

## 🔒 Security

- No sensitive data is exposed in the frontend
- Form validation to prevent malicious input
- Secure external links with `rel="noopener noreferrer"`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Heroicons
- Fonts from Google Fonts
- Images from Unsplash (for placeholders)

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

**Happy coding! 🚀**