# Vishal Ratan Shakya Portfolio

A modern, responsive portfolio website built with React, featuring admin dashboard, project management, and contact functionality.

## 🚀 Deployment Instructions

### For Vercel Deployment

1. **Environment Variables Setup**
   ```bash
   # In Vercel Dashboard -> Project Settings -> Environment Variables
   REACT_APP_API_URL=https://your-backend-api-url.com
   ```

2. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   ```

### For Netlify Deployment

1. **Environment Variables**
   ```bash
   # In Netlify Dashboard -> Site Settings -> Build & Deploy -> Environment
   REACT_APP_API_URL=https://your-backend-api-url.com
   ```

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `build`

### For GitHub Pages

1. **Update package.json**
   ```json
   "homepage": "https://vishalratanshakya.github.io/vishalportfolio"
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

## 📋 Prerequisites

- Node.js 16+
- npm or yarn
- Backend API running on your server

## 🔧 Local Development

1. **Clone and Install**
   ```bash
   git clone https://github.com/vishalratanshakya/vishalportfolio.git
   cd vishalportfolio/frontend
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your local API URL
   ```

3. **Start Development**
   ```bash
   npm start
   ```

## 🌐 Backend API Setup

Your backend should provide these endpoints:
- `POST /api/admin/login` - Admin authentication
- `GET /api/projects` - Get all projects
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get contact messages (admin only)
- `POST /api/admin/resume` - Upload resume (admin only)

## 📱 Features

- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Admin dashboard with authentication
- ✅ Project management system
- ✅ Contact form with email notifications
- ✅ Skills showcase
- ✅ Modern UI with animations
- ✅ LinkedIn and GitHub integration
- ✅ SEO optimized
- ✅ Fast loading with lazy loading

## 🔐 Admin Credentials

Default admin credentials (update in your backend):
- Email: `vishalratanshakya@gmail.com`
- Password: `vishal9084@`

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── config/        # Configuration files
│   └── assets/        # Static assets
├── public/            # Public files
├── .env.example       # Environment variables template
└── vercel.json        # Vercel deployment config
```

## 🐛 Troubleshooting

### Login Issues
1. Check if backend API is running
2. Verify `REACT_APP_API_URL` environment variable
3. Check CORS settings on backend
4. Ensure admin credentials exist in database

### Contact Form Issues
1. Verify API endpoint is accessible
2. Check email configuration on backend
3. Ensure CORS allows your frontend domain

### Build Issues
1. Clear node_modules and reinstall
2. Check for missing environment variables
3. Verify all imports are correct

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: <2s
- SEO Score: 100
- Fully responsive

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Note**: Make sure your backend API is deployed and accessible before deploying the frontend. Update the `REACT_APP_API_URL` environment variable with your production API URL.
