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
const DISMISS_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already installed (standalone mode)
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

    // Check if user previously dismissed the prompt
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
      
      // Show custom install UI after a short delay
      setTimeout(() => {
        setShowInstallPrompt(true);
      }, 3000); // 3 seconds after page load
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // For iOS, show install banner after delay
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

    // CRITICAL: This must be called in response to a user gesture (click)
    // The native browser install prompt can ONLY be triggered by user interaction
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
    localStorage.setItem(PROMPT_STORAGE_KEY, Date.now().toString());
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
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-6 shadow-2xl backdrop-blur-xl">
            {/* Gradient orbs */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
            
            <button
              onClick={handleDismiss}
              className="absolute right-4 top-4 text-slate-400 transition-colors hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Install App</h3>
                  <p className="text-sm text-slate-400">Add to your home screen</p>
                </div>
              </div>

              <div className="space-y-3 rounded-xl bg-slate-800/50 p-4 backdrop-blur">
                <p className="text-sm text-slate-300">
                  Install this app on your iPhone:
                </p>
                <ol className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-300">
                      1
                    </span>
                    <span>
                      Tap the <Share2 className="mx-1 inline h-4 w-4" /> Share button in Safari
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-300">
                      2
                    </span>
                    <span>Scroll down and tap "Add to Home Screen"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-300">
                      3
                    </span>
                    <span>Tap "Add" in the top right corner</span>
                  </li>
                </ol>
              </div>

              <button
                onClick={handleDontShowAgain}
                className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800"
              >
                Don&apos;t show again for 30 days
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Chrome/Edge/Android Install Prompt
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="mx-auto max-w-2xl p-4">
        <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-6 shadow-2xl backdrop-blur-xl">
          {/* Gradient orbs */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
          
          <button
            onClick={handleDismiss}
            className="absolute right-4 top-4 text-slate-400 transition-colors hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
              <Download className="h-8 w-8 text-white" />
            </div>

            <div className="flex-1">
              <h3 className="mb-1 text-xl font-bold text-white">
                Install Moaz Haider App
              </h3>
              <p className="text-sm text-slate-300">
                Get instant access, offline support, and a faster experience. No app store needed!
              </p>
            </div>

            <div className="flex gap-3 sm:flex-col sm:gap-2">
              <button
                onClick={handleInstallClick}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Install
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>

              <button
                onClick={handleDontShowAgain}
                className="whitespace-nowrap rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800"
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
