# PWA Testing & Deployment Checklist

## 🚀 Pre-Deployment Setup

### 1. Generate PWA Icons (REQUIRED)

Before deploying, you MUST generate PWA icons. The app will NOT be installable without them.

**Quick Setup Using Online Tool:**
1. Visit https://www.pwabuilder.com/imageGenerator
2. Upload your logo (minimum 512x512px, ideally 1024x1024px)
3. Download the generated icon pack
4. Extract all icons to `/public/icons/` directory
5. Ensure these files exist:
   - icon-72x72.png
   - icon-96x96.png
   - icon-128x128.png
   - icon-144x144.png
   - icon-152x152.png
   - icon-192x192.png ← **Minimum required**
   - icon-384x384.png
   - icon-512x512.png ← **Highly recommended**

See `/public/icons/README.md` for detailed icon generation instructions.

---

## 🧪 Local Testing

### Step 1: Build and Test Locally

```bash
# Build the production version
npm run build

# Start production server
npm start
```

**Why?** PWA features (service worker, install prompt) only work in production builds, NOT in `npm run dev`.

### Step 2: Open Chrome DevTools

1. Open http://localhost:3000 in Chrome
2. Press F12 to open DevTools
3. Go to **Application** tab

#### A) Check Manifest
- Navigate to **Manifest** in the sidebar
- Verify all fields appear correctly:
  - ✅ Name: "Moaz Haider - SEO Consultant & Digital Marketing Expert"
  - ✅ Short name: "Moaz Haider"
  - ✅ Start URL: "/"
  - ✅ Display: "standalone"
  - ✅ Theme color: "#8b5cf6"
  - ✅ Icons: All 8 icons should appear (if you've generated them)

**Common Issues:**
- ❌ "No manifest detected" → Check that `/public/manifest.json` exists
- ❌ Icons showing errors → Generate icons using steps above
- ❌ Manifest not loading → Clear cache and hard reload (Ctrl+Shift+R)

#### B) Check Service Worker
- Navigate to **Service Worker** in the sidebar
- You should see:
  - ✅ Status: "activated and is running"
  - ✅ Source: "sw.js"
- Click "Update" to test service worker updates
- Click "Unregister" to test clean installation

**Common Issues:**
- ❌ No service worker → Ensure you ran `npm run build`
- ❌ Service worker error → Check Console tab for errors
- ❌ Outdated service worker → Click "Update" or "Skip waiting"

---

## 📱 Device-Specific Testing

### Android Chrome Testing

#### Method 1: Test on Real Android Device
1. Deploy your app to Vercel/Netlify (get HTTPS URL)
2. Open the site on Android Chrome
3. **Install Prompt Should Appear:**
   - Wait 3 seconds after page load
   - Custom banner appears at bottom
   - Click "Install" button
   - Native browser prompt appears
   - Click "Install" in browser dialog
   - App installs to home screen

4. **Verify Installation:**
   - Close Chrome
   - Find "Moaz Haider" icon on home screen
   - Tap to launch
   - Should open in standalone mode (no browser UI)

**Alternative Install Method:**
- Tap the 3-dot menu (⋮) in Chrome
- Look for "Install app" or "Add to Home screen"
- Follow prompts

#### Method 2: Chrome Remote Debugging
1. Connect Android device via USB
2. Enable USB debugging on Android
3. Open chrome://inspect in desktop Chrome
4. Select your device
5. Click "Inspect" on your site
6. Use DevTools as described in Local Testing

**Common Issues:**
- ❌ Install button doesn't appear → Check manifest and icons in DevTools
- ❌ "Add to Home screen" only (not "Install app") → Icons missing or manifest incomplete
- ❌ Opens in browser tab instead of standalone → Check `display: "standalone"` in manifest

---

### Desktop Chrome/Edge Testing

1. **Deploy to Production** (PWA requires HTTPS)
   ```bash
   git add .
   git commit -m "Add PWA support"
   git push origin main
   ```

2. **Visit Site in Chrome/Edge:**
   - Navigate to your Vercel URL
   - Wait 3 seconds for custom install banner
   - **OR** look for install icon in address bar (⊕ or install icon)

3. **Install Using Custom Banner:**
   - Click "Install" button in bottom banner
   - Browser's native install dialog appears
   - Click "Install"
   - App opens in its own window

4. **Install Using Browser UI:**
   - Click the install icon in address bar
   - Or: 3-dot menu → "Install Moaz Haider..."
   - App opens in standalone window

5. **Verify Installation:**
   - Windows: Find in Start Menu or Desktop
   - macOS: Find in Applications folder or Dock
   - Launch the app
   - Should open in its own window (no browser tabs/UI)

**Common Issues:**
- ❌ No install icon in address bar → Check Console for manifest/SW errors
- ❌ Install prompt dismissed accidentally → Clear site data and revisit
- ❌ App not appearing after install → Check Chrome Apps (chrome://apps)

---

### iOS Safari Testing

**IMPORTANT:** iOS does NOT support the standard `beforeinstallprompt` event. Manual installation only.

1. **Open Site in iOS Safari:**
   - Navigate to your production URL
   - Wait 3 seconds
   - Custom iOS instruction banner appears

2. **Follow Instructions:**
   - Tap the Share button (square with arrow)
   - Scroll down
   - Tap "Add to Home Screen"
   - Edit name if needed
   - Tap "Add" (top right)

3. **Verify Installation:**
   - Return to home screen
   - Find "Moaz Haider" icon
   - Tap to launch
   - Should open in standalone mode (no Safari UI)

**Testing iOS Install Banner:**
- The custom banner shows iOS-specific instructions
- Includes visual guide with step numbers
- "Don't show again" option works
- Banner dismisses with X button

**Common Issues:**
- ❌ Icon doesn't appear → Check `apple-touch-icon` in layout.tsx
- ❌ Opens in Safari instead of standalone → Check `apple-mobile-web-app-capable` meta tag
- ❌ Wrong app name → Update `apple-mobile-web-app-title` in layout.tsx

---

## 🔍 Lighthouse PWA Audit

### Desktop Lighthouse Test

1. Open your production site in Chrome
2. Press F12 → **Lighthouse** tab
3. Select:
   - ✅ Progressive Web App
   - Device: Desktop
   - Categories: Progressive Web App
4. Click "Analyze page load"

### Expected Results (90+ Score):

✅ **Installable:**
- Registers a service worker
- Manifest includes name, short_name, start_url, display, icons
- Has a 192px and 512px icon
- Fetches start_url in service worker
- Service worker responds to navigation requests

✅ **PWA Optimized:**
- Configured for a custom splash screen
- Sets theme color
- Content is sized correctly for viewport
- Provides apple-touch-icon

### Mobile Lighthouse Test

1. Open DevTools → Toggle device toolbar (Ctrl+Shift+M)
2. Select a mobile device (e.g., iPhone 12 Pro)
3. Run Lighthouse with "Mobile" selected
4. Verify same checks pass

---

## 🧰 Advanced Testing

### Test Service Worker Caching

1. Open site in production
2. Open DevTools → Network tab
3. Check "Offline" box (to simulate offline)
4. Reload page
5. **Expected:** Page should load from cache
6. Navigate to previously visited pages
7. **Expected:** Should work offline

**Test Offline Fallback:**
- Go offline while on a never-visited page
- Should redirect to `/offline` page
- Verify offline page design renders correctly

### Test Install Prompt Dismissal

1. When custom banner appears, click X (dismiss)
2. Refresh page
3. **Expected:** Banner should still appear (localStorage not set)
4. Click "Don't show again"
5. Refresh page
6. **Expected:** Banner should NOT appear
7. Open DevTools → Application → Local Storage
8. Verify `pwa-install-prompt-dismissed` exists with timestamp
9. Delete the key
10. Refresh
11. **Expected:** Banner reappears

### Test Service Worker Updates

1. Make a small change to your site (e.g., change text)
2. Build and deploy
3. Open the site (don't refresh)
4. DevTools → Application → Service Worker
5. Click "Update"
6. New service worker should install
7. Refresh page to activate new version

---

## 🚨 Common Issues & Solutions

### Issue: "Install prompt never appears"

**Solutions:**
1. Verify you're testing on HTTPS (not localhost HTTP)
2. Check DevTools Console for errors
3. Ensure manifest.json is valid (check Application tab)
4. Verify service worker is registered and active
5. Close and reopen the browser tab
6. Clear site data: DevTools → Application → Clear storage

### Issue: "Service worker fails to register"

**Solutions:**
1. Check Console for errors
2. Verify you ran `npm run build` (dev mode doesn't work)
3. Check next.config.mjs is correctly configured
4. Ensure @ducanh2912/next-pwa is installed
5. Try deleting `.next` folder and rebuilding

### Issue: "Manifest shows errors in DevTools"

**Solutions:**
1. Validate JSON syntax in manifest.json
2. Ensure all icon files exist at specified paths
3. Check `start_url` matches your domain
4. Verify `scope` is correct
5. Use JSONLint to validate manifest

### Issue: "Icons not loading"

**Solutions:**
1. Generate icons following `/public/icons/README.md`
2. Ensure icons are PNG format (not SVG)
3. Check file names match manifest exactly
4. Verify icons are in `/public/icons/` directory
5. Clear cache and hard reload

### Issue: "App opens in browser instead of standalone"

**Solutions:**
1. Check `display: "standalone"` in manifest
2. Verify app was installed (not just bookmarked)
3. iOS: Check `apple-mobile-web-app-capable` meta tag
4. Uninstall and reinstall the app
5. Check for manifest errors in DevTools

---

## 📋 Pre-Launch Checklist

Before deploying to production:

- [ ] Icons generated and placed in `/public/icons/`
- [ ] manifest.json updated with your branding
- [ ] Tested local build with `npm run build && npm start`
- [ ] Service worker registers successfully (DevTools check)
- [ ] Manifest loads without errors (DevTools check)
- [ ] Lighthouse PWA score 90+ (both mobile and desktop)
- [ ] Tested on real Android device
- [ ] Tested on real iOS device
- [ ] Tested on Desktop Chrome/Edge
- [ ] Install prompt appears and works correctly
- [ ] Offline page displays properly
- [ ] "Don't show again" functionality works
- [ ] App opens in standalone mode after installation
- [ ] SEO not impacted (run Lighthouse SEO audit)

---

## 🎯 Deployment Commands

```bash
# Build the production version
npm run build

# Test production locally
npm start

# Deploy to Vercel
git add .
git commit -m "Add PWA support with install prompt"
git push origin main

# Vercel will auto-deploy
```

---

## 🔗 Useful Resources

- **Test Your PWA:** https://www.pwa-test.com/
- **Generate Icons:** https://www.pwabuilder.com/imageGenerator
- **Manifest Validator:** https://manifest-validator.appspot.com/
- **Chrome DevTools Guide:** https://developer.chrome.com/docs/devtools/progressive-web-apps/
- **Apple PWA Guide:** https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html

---

## 📊 Monitoring After Launch

### Check Install Metrics

Most PWA analytics require additional setup, but you can:

1. **Google Analytics 4:**
   - Track custom event when install prompt is shown
   - Track when user accepts/dismisses
   - Monitor standalone mode usage

2. **Browser DevTools:**
   - Chrome: Check chrome://apps to see installed PWAs
   - Edge: Check edge://apps

3. **User Feedback:**
   - Ask users if they see install prompts
   - Monitor support tickets for installation issues

---

## ✅ Success Criteria

Your PWA is successfully implemented when:

1. ✅ Lighthouse PWA score is 90+ on both mobile and desktop
2. ✅ Install prompt appears within 3-5 seconds on first visit
3. ✅ App can be installed on Android, iOS, and Desktop
4. ✅ App opens in standalone mode (no browser UI)
5. ✅ Works offline (shows offline page or cached content)
6. ✅ Service worker updates correctly on deployments
7. ✅ "Don't show again" persists for 30 days
8. ✅ No errors in Console or Application tab
9. ✅ SEO not impacted (crawlers can still index)

---

**Remember:** PWA features require HTTPS. They will NOT work on localhost HTTP (only localhost works for testing service workers, but HTTPS is required for production).

**Testing Order:**
1. Local build testing (localhost)
2. Deploy to staging/production (HTTPS)
3. Test on real devices
4. Run Lighthouse audits
5. Monitor for errors
6. Iterate and improve

Good luck! 🚀
