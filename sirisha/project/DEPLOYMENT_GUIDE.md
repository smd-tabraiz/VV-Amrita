# Deployment Guide
## Jeevan Saathi - Emergency Healthcare Assistant

This guide covers deployment options for the offline-first healthcare PWA.

---

## 📋 Pre-Deployment Checklist

### Code Quality
- [ ] All 32 medical conditions tested
- [ ] No console errors or warnings
- [ ] All translations verified (5 languages)
- [ ] OTP verification working
- [ ] Voice input/output tested
- [ ] Mobile responsive layout verified
- [ ] Offline mode functional
- [ ] Service worker caching tested

### Performance
- [ ] Lighthouse score >90
- [ ] Bundle size optimized
- [ ] Images compressed
- [ ] Lazy loading implemented
- [ ] Code splitting verified

### Security
- [ ] HTTPS enabled (required for PWA)
- [ ] Content Security Policy configured
- [ ] No sensitive data in client code
- [ ] OTP service secured (if using backend)

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

**Pros**: Free tier, automatic HTTPS, global CDN, zero config

#### Steps:

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Build the project**
```bash
cd project
npm run build
```

3. **Deploy**
```bash
vercel
```

4. **Follow prompts**
- Set up and deploy: Yes
- Which scope: Your account
- Link to existing project: No
- Project name: jeevan-saathi
- Directory: ./
- Override settings: No

5. **Production deployment**
```bash
vercel --prod
```

**Result**: Your app will be live at `https://jeevan-saathi.vercel.app`

---

### Option 2: Netlify

**Pros**: Free tier, automatic HTTPS, continuous deployment

#### Steps:

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build the project**
```bash
cd project
npm run build
```

3. **Deploy**
```bash
netlify deploy
```

4. **Production deployment**
```bash
netlify deploy --prod
```

**Alternative**: Connect GitHub repo for automatic deployments

1. Push code to GitHub
2. Go to https://app.netlify.com
3. Click "New site from Git"
4. Select repository
5. Build command: `npm run build`
6. Publish directory: `dist`

---

### Option 3: GitHub Pages

**Pros**: Free, integrated with GitHub

#### Steps:

1. **Update vite.config.js**
```javascript
export default defineConfig({
  base: '/jeevan-saathi/',  // Replace with your repo name
  plugins: [
    // ... existing plugins
  ]
});
```

2. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

3. **Add deploy script to package.json**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable GitHub Pages**
- Go to repository settings
- Pages section
- Source: gh-pages branch
- Save

**Result**: Live at `https://yourusername.github.io/jeevan-saathi/`

---

### Option 4: Firebase Hosting

**Pros**: Google infrastructure, free tier, excellent PWA support

#### Steps:

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**
```bash
firebase login
```

3. **Initialize Firebase**
```bash
firebase init hosting
```

4. **Configuration**
- Public directory: `dist`
- Single-page app: Yes
- Automatic builds: No

5. **Build and deploy**
```bash
npm run build
firebase deploy
```

**Result**: Live at `https://your-project.web.app`

---

### Option 5: Self-Hosted (VPS/Cloud)

**Pros**: Full control, custom domain

#### Requirements:
- Ubuntu/Debian server
- Node.js installed
- Nginx or Apache
- SSL certificate (Let's Encrypt)

#### Steps:

1. **Build locally**
```bash
npm run build
```

2. **Upload dist folder to server**
```bash
scp -r dist/* user@server:/var/www/jeevan-saathi/
```

3. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    root /var/www/jeevan-saathi;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Service worker - no cache
    location /sw.js {
        add_header Cache-Control "no-cache";
    }
}
```

4. **Enable HTTPS with Let's Encrypt**
```bash
sudo certbot --nginx -d yourdomain.com
```

5. **Restart Nginx**
```bash
sudo systemctl restart nginx
```

---

## 🔧 Environment Configuration

### Production Environment Variables

Create `.env.production`:

```env
# API Endpoints (if using backend)
VITE_API_URL=https://api.yourdomain.com
VITE_OTP_SERVICE_URL=https://api.yourdomain.com/otp

# Emergency Contact Numbers
VITE_EMERGENCY_NUMBER=911
VITE_POISON_CONTROL=1-800-222-1222

# Feature Flags
VITE_ENABLE_VOICE_INPUT=true
VITE_ENABLE_ANALYTICS=true

# Analytics (optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

---

## 📊 Post-Deployment Verification

### 1. PWA Installation Test

**Desktop (Chrome/Edge)**:
1. Visit deployed URL
2. Look for install icon in address bar
3. Click and install
4. Verify app opens in standalone window

**Mobile (Chrome/Safari)**:
1. Visit deployed URL
2. Tap "Add to Home Screen"
3. Verify icon appears on home screen
4. Open app and verify standalone mode

### 2. Offline Mode Test

1. Open app in browser
2. Open DevTools → Network tab
3. Check "Offline" checkbox
4. Reload page
5. Verify app loads completely
6. Test navigation and chatbot
7. Verify all 32 conditions accessible

### 3. Performance Test

Run Lighthouse audit:
1. Open DevTools → Lighthouse tab
2. Select "Progressive Web App"
3. Click "Generate report"
4. Verify scores:
   - Performance: >90
   - Accessibility: >90
   - Best Practices: >90
   - SEO: >90
   - PWA: 100

### 4. Multi-Language Test

1. Test all 5 languages
2. Verify translations display correctly
3. Check chatbot responses in each language
4. Verify voice input works (if enabled)

### 5. Security Test

1. Verify HTTPS enabled
2. Check mixed content warnings (none should exist)
3. Test OTP verification
4. Verify no sensitive data in console
5. Check CSP headers

---

## 🔍 Monitoring & Analytics

### Google Analytics Setup (Optional)

1. **Install analytics package**
```bash
npm install react-ga4
```

2. **Initialize in main.jsx**
```javascript
import ReactGA from 'react-ga4';

if (import.meta.env.VITE_GA_TRACKING_ID) {
  ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
}
```

3. **Track page views**
```javascript
useEffect(() => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}, []);
```

### Error Tracking (Sentry)

1. **Install Sentry**
```bash
npm install @sentry/react
```

2. **Initialize**
```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: import.meta.env.MODE,
});
```

---

## 🔄 Continuous Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      working-directory: ./project
      
    - name: Build
      run: npm run build
      working-directory: ./project
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        working-directory: ./project
```

---

## 🐛 Troubleshooting

### Issue: PWA not installable

**Solution**:
- Verify HTTPS enabled
- Check manifest.json is accessible
- Verify service worker registered
- Check Lighthouse PWA audit

### Issue: Offline mode not working

**Solution**:
- Clear browser cache
- Unregister old service workers
- Rebuild with `npm run build`
- Check service worker console logs

### Issue: Voice input not working

**Solution**:
- Verify HTTPS enabled (required for Web Speech API)
- Check browser compatibility
- Test microphone permissions
- Check console for errors

### Issue: Translations not loading

**Solution**:
- Verify translation files in build
- Check language context initialization
- Verify translation keys match
- Check browser console for errors

---

## 📈 Performance Optimization

### 1. Enable Compression

**Nginx**:
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

### 2. Enable HTTP/2

**Nginx**:
```nginx
listen 443 ssl http2;
```

### 3. Add Cache Headers

**Nginx**:
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 4. Preload Critical Resources

Add to `index.html`:
```html
<link rel="preload" href="/assets/main.js" as="script">
<link rel="preload" href="/assets/main.css" as="style">
```

---

## 🔐 Security Hardening

### Content Security Policy

Add to Nginx config:
```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;";
```

### Security Headers

```nginx
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

---

## 📱 App Store Submission (Optional)

### Convert to Native App with Capacitor

1. **Install Capacitor**
```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

2. **Add platforms**
```bash
npx cap add android
npx cap add ios
```

3. **Build and sync**
```bash
npm run build
npx cap sync
```

4. **Open in native IDE**
```bash
npx cap open android
npx cap open ios
```

---

## ✅ Production Checklist

### Before Launch
- [ ] All features tested
- [ ] Performance optimized
- [ ] Security headers configured
- [ ] HTTPS enabled
- [ ] PWA installable
- [ ] Offline mode working
- [ ] Analytics configured
- [ ] Error tracking setup
- [ ] Backup strategy in place
- [ ] Domain configured

### After Launch
- [ ] Monitor error logs
- [ ] Check analytics data
- [ ] Test from different locations
- [ ] Verify mobile performance
- [ ] Monitor server resources
- [ ] Set up alerts
- [ ] Document known issues
- [ ] Plan updates

---

## 🔄 Update Strategy

### Rolling Updates

1. Build new version
2. Deploy to staging
3. Test thoroughly
4. Deploy to production
5. Monitor for issues
6. Rollback if needed

### Service Worker Updates

Users will automatically get updates when:
- They close and reopen the app
- Service worker detects new version
- Manual refresh triggered

---

## 📞 Support & Maintenance

### Regular Tasks
- Weekly: Check error logs
- Monthly: Review analytics
- Quarterly: Update dependencies
- Annually: Security audit

### Emergency Contacts
- Hosting provider support
- Domain registrar support
- SSL certificate provider
- Development team

---

**Deployment Guide Version**: 1.0.0  
**Last Updated**: February 25, 2026  
**Status**: Production Ready ✅
