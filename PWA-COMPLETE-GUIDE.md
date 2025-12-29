# Progressive Web App (PWA) Implementation - Complete Guide
## Next.js App Router + Pages Router

---

## 📋 Table of Contents
1. [Overview](#overview)
2. [App Router Implementation](#app-router-implementation)
3. [Pages Router Implementation](#pages-router-implementation)
4. [Install Prompt Component](#install-prompt-component)
5. [Browser-Specific Behavior](#browser-specific-behavior)
6. [Testing Guide](#testing-guide)
7. [SEO Safety](#seo-safety)
8. [Troubleshooting](#troubleshooting)

---

## Overview

### What Was Implemented

This PWA implementation provides:
- ✅ **Installable app** on Android, Desktop, and iOS
- ✅ **Custom install prompts** with brand-specific UI
- ✅ **Offline support** with intelligent caching
- ✅ **SEO-safe** configuration (no indexing impact)
- ✅ **Cross-browser** support with graceful degradation

### Critical Browser Rule

**The `beforeinstallprompt` event can ONLY be triggered by a user gesture (click).**

This means:
1. We capture the event and store it
2. We show our custom UI automatically (after 3 seconds)
3. We call `prompt()` **only** when user clicks "Install"
4. The browser's native install dialog then appears

**This is why we need both:**
- Custom banner/modal (can show automatically)
- User click to trigger native prompt (browser requirement)

---

## App Router Implementation

### Your Current Setup (Already Implemented)

#### 1. Package Installation

```bash
npm install @ducanh2912/next-pwa
```

#### 2. next.config.mjs

```javascript
import withPWA from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config
};

const pwaConfig = withPWA({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false, // Set to true for development if needed
  workboxOptions: {
    disableDevLogs: true,
    // Network-first strategy for HTML pages (SEO-safe)
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
          networkTimeoutSeconds: 10,
        },
      },
    ],
  },
});

export default pwaConfig(nextConfig);
```

#### 3. public/manifest.json

```json
{
  "name": "Your App Name - Full Description",
  "short_name": "App Name",
  "description": "Your app description for install prompt",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#8b5cf6",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ],
  "shortcuts": [
    {
      "name": "Contact",
      "url": "/contact",
      "icons": [{"src": "/icons/icon-96x96.png", "sizes": "96x96"}]
    }
  ]
}
```

#### 4. app/layout.tsx

```tsx
import type { Metadata } from "next";
import InstallPrompt from "@/components/InstallPrompt";

export const metadata: Metadata = {
  title: "Your App",
  description: "Your description",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Your App",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Your App" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        {children}
        <InstallPrompt />
      </body>
    </html>
  );
}
```

#### 5. app/offline/page.tsx

```tsx
'use client';

import { WifiOff } from 'lucide-react';
import Link from 'next/link';

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md text-center">
        <WifiOff className="mx-auto mb-6 h-16 w-16 text-purple-400" />
        <h1 className="mb-3 text-3xl font-bold text-white">
          You&apos;re Offline
        </h1>
        <p className="mb-8 text-slate-400">
          Lost your connection. Try again or go home.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-purple-500 px-6 py-3 text-white hover:bg-purple-600"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-lg border border-slate-700 px-6 py-3 text-slate-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
```

---

## Pages Router Implementation

For projects using the Pages Router instead of App Router:

### 1. Package Installation (Same)

```bash
npm install @ducanh2912/next-pwa
```

### 2. next.config.js

```javascript
const withPWA = require('@ducanh2912/next-pwa').default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config
};

module.exports = withPWA({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === 'development', // Disable in dev
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 7 * 24 * 60 * 60,
          },
          networkTimeoutSeconds: 10,
        },
      },
    ],
  },
})(nextConfig);
```

### 3. pages/_document.tsx

```tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Your App" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### 4. pages/_app.tsx

```tsx
import type { AppProps } from 'next/app';
import InstallPrompt from '@/components/InstallPrompt';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <InstallPrompt />
    </>
  );
}
```

### 5. pages/offline.tsx

```tsx
import { WifiOff } from 'lucide-react';
import Link from 'next/link';

export default function OfflinePage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md text-center">
        <WifiOff className="mx-auto mb-6 h-16 w-16 text-purple-400" />
        <h1 className="mb-3 text-3xl font-bold text-white">
          You&apos;re Offline
        </h1>
        <p className="mb-8 text-slate-400">
          Lost your connection. Try again or go home.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleRetry}
            className="rounded-lg bg-purple-500 px-6 py-3 text-white hover:bg-purple-600"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-lg border border-slate-700 px-6 py-3 text-slate-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
```

---

## Install Prompt Component

**File:** `components/InstallPrompt.tsx`

This works for BOTH App Router and Pages Router:

```tsx
'use client';

import { useEffect, useState } from 'react';
import { X, Download, Share2 } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PROMPT_STORAGE_KEY = 'pwa-install-prompt-dismissed';
const DISMISS_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 days

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isInStandaloneMode = () => {
      return (
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true
      );
    };

    setIsStandalone(isInStandaloneMode());

    // Detect iOS
    const detectIOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };

    const ios = detectIOS();
    setIsIOS(ios);

    // Check if user previously dismissed
    const checkDismissed = () => {
      const dismissedTime = localStorage.getItem(PROMPT_STORAGE_KEY);
      if (dismissedTime) {
        const timeElapsed = Date.now() - parseInt(dismissedTime, 10);
        return timeElapsed < DISMISS_DURATION;
      }
      return false;
    };

    // Don't show if already installed or recently dismissed
    if (isInStandaloneMode() || checkDismissed()) {
      return;
    }

    // Handle beforeinstallprompt event (Chrome, Edge, Android)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
      
      // Show custom UI after delay
      setTimeout(() => {
        setShowInstallPrompt(true);
      }, 3000); // 3 seconds
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // For iOS, show install banner
    if (ios && !isInStandaloneMode()) {
      setTimeout(() => {
        setShowInstallPrompt(true);
      }, 3000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // CRITICAL: Must be called in response to user gesture
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    } catch (error) {
      console.error('Error showing install prompt:', error);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };

  const handleDontShowAgain = () => {
    localStorage.setItem(PROMPT_STORAGE_KEY, Date.now().toString());
    setShowInstallPrompt(false);
  };

  // Don't render if already installed
  if (isStandalone || !showInstallPrompt) {
    return null;
  }

  // iOS Install Instructions
  if (isIOS) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
        <div className="mx-auto max-w-2xl p-4">
          <div className="relative rounded-2xl border border-purple-500/20 bg-slate-900 p-6 shadow-2xl">
            <button
              onClick={handleDismiss}
              className="absolute right-4 top-4 text-slate-400 hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500">
                <Download className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Install App</h3>
                <p className="text-sm text-slate-400">Add to your home screen</p>
              </div>
            </div>

            <div className="space-y-3 rounded-xl bg-slate-800/50 p-4">
              <p className="text-sm text-slate-300">
                Install this app on your iPhone:
              </p>
              <ol className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold">
                    1
                  </span>
                  <span>
                    Tap the <Share2 className="mx-1 inline h-4 w-4" /> Share button
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold">
                    2
                  </span>
                  <span>Scroll and tap &quot;Add to Home Screen&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold">
                    3
                  </span>
                  <span>Tap &quot;Add&quot; in the top right</span>
                </li>
              </ol>
            </div>

            <button
              onClick={handleDontShowAgain}
              className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700"
            >
              Don&apos;t show again for 30 days
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Chrome/Edge/Android Install Prompt
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="mx-auto max-w-2xl p-4">
        <div className="relative rounded-2xl border border-purple-500/20 bg-slate-900 p-6 shadow-2xl">
          <button
            onClick={handleDismiss}
            className="absolute right-4 top-4 text-slate-400 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-500">
              <Download className="h-8 w-8 text-white" />
            </div>

            <div className="flex-1">
              <h3 className="mb-1 text-xl font-bold text-white">
                Install App
              </h3>
              <p className="text-sm text-slate-300">
                Get instant access, offline support, and faster experience.
              </p>
            </div>

            <div className="flex gap-3 sm:flex-col">
              <button
                onClick={handleInstallClick}
                className="rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 font-semibold text-white hover:scale-105"
              >
                Install
              </button>

              <button
                onClick={handleDontShowAgain}
                className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Browser-Specific Behavior

### Chrome/Edge/Android

**How it works:**
1. Browser fires `beforeinstallprompt` event
2. We capture and prevent default
3. We store the event
4. We show custom UI after 3 seconds
5. User clicks "Install"
6. We call `deferredPrompt.prompt()`
7. Native browser dialog appears
8. User confirms
9. App installs

**Install criteria:**
- ✅ HTTPS (or localhost)
- ✅ Valid manifest
- ✅ Service worker registered
- ✅ Icons (192px + 512px minimum)

### iOS Safari

**Important:** iOS does NOT support `beforeinstallprompt`.

**How it works:**
1. We detect iOS Safari with user agent
2. We show custom instruction banner
3. User manually:
   - Taps Share button
   - Scrolls to "Add to Home Screen"
   - Confirms

**Install criteria:**
- ✅ Valid manifest
- ✅ `apple-mobile-web-app-capable` meta tag
- ✅ `apple-touch-icon` link

### Firefox/Other Browsers

Gracefully degrades:
- No install prompt shows
- Service worker still works
- Offline functionality intact
- Users can manually add bookmark

---

## Testing Guide

### Local Testing

```bash
# Build production
npm run build

# Start server
npm start

# Open browser
# Visit: http://localhost:3000
```

**Check DevTools (F12):**
1. Application tab → Manifest (verify all fields)
2. Application tab → Service Worker (should be "activated")
3. Console (no errors)

### Production Testing

```bash
git push origin main
# Wait for Vercel deployment
```

**Test on devices:**
1. Desktop Chrome/Edge
2. Android Chrome (real device or remote debugging)
3. iOS Safari (real device)

### Lighthouse Audit

1. F12 → Lighthouse tab
2. Select "Progressive Web App"
3. Generate report
4. Target: 90+ score

---

## SEO Safety

### Why This Implementation is SEO-Safe

**Network-First Caching:**
- HTML pages always fetch from network first
- Crawlers get fresh content
- Cache only used as fallback

**No Blocking:**
- Service worker doesn't block requests
- Manifest doesn't affect crawling
- robots.txt unchanged

**Cache Limits:**
- 7-day maximum age
- 200-entry limit
- Auto-cleanup of old entries

**Verified Safe:**
- `robots: { index: true, follow: true }`
- Lighthouse SEO score unaffected
- Google Search Console compatible

---

## Troubleshooting

### Install Prompt Doesn't Appear

**Check:**
1. Are icons generated?
2. Is site on HTTPS?
3. DevTools → Application → Manifest (errors?)
4. DevTools → Application → Service Worker (registered?)
5. Console (errors?)

**Fix:**
- Clear site data (DevTools → Application → Clear storage)
- Hard reload (Ctrl+Shift+R)
- Generate icons if missing

### Service Worker Not Registering

**Fix:**
```bash
# Delete build cache
rm -rf .next

# Reinstall
npm install

# Rebuild
npm run build
```

### Icons Not Loading

**Fix:**
1. Ensure files exist in `/public/icons/`
2. Check file names match manifest
3. Verify PNG format (not SVG)
4. Rebuild project

### App Opens in Browser

**Check:**
1. Is `display: "standalone"` in manifest?
2. Was app properly installed (not bookmarked)?
3. iOS: Check `apple-mobile-web-app-capable` meta tag

**Fix:**
- Uninstall app
- Clear browser data
- Reinstall

---

## Key Differences: App Router vs Pages Router

| Feature | App Router | Pages Router |
|---------|------------|--------------|
| Config File | `app/layout.tsx` | `pages/_document.tsx` |
| Install Prompt | In `layout.tsx` | In `_app.tsx` |
| Metadata | `export const metadata` | `<Head>` component |
| Client Components | `'use client'` required | Default client-side |
| Offline Page | `app/offline/page.tsx` | `pages/offline.tsx` |

---

## Summary

### What You Get

✅ **Installable PWA** on all major platforms
✅ **Custom install prompts** with branded UI
✅ **Offline support** with smart caching
✅ **SEO-safe** implementation
✅ **Cross-browser** compatibility

### What You Need To Do

1. **Generate icons** (CRITICAL - app won't install without them)
2. **Test locally** with production build
3. **Deploy** to production
4. **Test** on real devices
5. **Run** Lighthouse audit

### Documentation

- **Quick Start:** [PWA-QUICKSTART.md](PWA-QUICKSTART.md)
- **Full Guide:** [PWA-IMPLEMENTATION.md](PWA-IMPLEMENTATION.md)
- **Testing:** [PWA-TESTING-GUIDE.md](PWA-TESTING-GUIDE.md)
- **Icons:** [/public/icons/README.md](/public/icons/README.md)

---

**Your PWA is ready! Just add icons and deploy. 🚀**
