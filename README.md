# Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean and professional design with Tailwind CSS
- **Environment Variables**: Easy configuration without code changes
- **Real-time Competitive Programming Ratings**: Live Codeforces and CodeChef ratings via APIs
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Friendly**: Proper meta tags and structure

## 🛠️ Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your values:
   ```env
   VITE_PORTFOLIO_URL=https://your-portfolio-url.com
   VITE_RESUME_URL=https://your-resume-url.com
   VITE_AVATAR_URL=https://your-avatar-image-url.com
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
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
- Personal information
- Skills
- Projects
- Experience
- Education
- Social links

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # React components
│   ├── data/               # Portfolio data
│   └── assets/             # Static assets
├── public/                 # Public assets
├── .env                    # Environment variables (not in git)
├── .env.example           # Environment variables template
└── README.md              # This file
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

## 🛡️ Security Notes

- Environment variables starting with `VITE_` are exposed to the client
- Don't put sensitive information in these variables
- Use public, shareable URLs for resume links

## 📞 Support

If you need help with setup or deployment, feel free to reach out!

---

Built with ❤️ using React, Vite, and Tailwind CSS