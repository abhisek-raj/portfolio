# Deployment Guide for Abhisek Raj Portfolio

## 🚀 Deploy to Render (Recommended)

### Prerequisites
- GitHub repository with your code
- Render account (free tier available)

### Steps to Deploy

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Render**
   - Go to [render.com](https://render.com)
   - Sign up/Login with GitHub
   - Click "New +" → "Static Site"

3. **Configure the deployment**
   - **Name**: `abhisek-portfolio` (or your preferred name)
   - **Repository**: Select your GitHub repo
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Environment Variables**: 
     - `NODE_VERSION`: `18.0.0`

4. **Deploy**
   - Click "Create Static Site"
   - Wait for build to complete
   - Your site will be available at `https://your-site-name.onrender.com`

## 🌐 Alternative Deployment Options

### Vercel
- Connect your GitHub repo to [vercel.com](https://vercel.com)
- Automatic deployment with `vercel.json` configuration

### Netlify
- Connect your GitHub repo to [netlify.com](https://netlify.com)
- Build command: `npm run build`
- Publish directory: `dist`

## 🔧 Build Commands

```bash
# Development build
npm run build:dev

# Production build
npm run build:prod

# Deploy to Render
npm run deploy:render
```

## 📁 Important Files

- `render.yaml` - Render deployment configuration
- `vercel.json` - Vercel deployment configuration
- `public/_redirects` - SPA routing support
- `env.production` - Production environment variables

## ⚠️ Important Notes

1. **Environment Variables**: Update any API keys or environment variables in Render dashboard
2. **Build Output**: The build creates a `dist/` folder with optimized production files
3. **Routing**: SPA routing is configured to work properly on all platforms
4. **Performance**: Production build includes code splitting and optimization

## 🐛 Troubleshooting

- **Build fails**: Check if all dependencies are in `package.json`
- **Routing issues**: Ensure `_redirects` file is in `public/` folder
- **Environment variables**: Verify they're set in Render dashboard

## 📊 Performance Optimization

Your production build includes:
- Code splitting for better loading
- Minified CSS and JavaScript
- Optimized bundle sizes
- Source maps disabled in production
