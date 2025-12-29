'use client';

import { WifiOff } from 'lucide-react';
import Link from 'next/link';

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 px-4">
      <div className="relative max-w-md text-center">
        {/* Background orbs */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
            <WifiOff className="h-12 w-12 text-purple-400" />
          </div>

          {/* Title */}
          <h1 className="mb-3 text-3xl font-bold text-white">
            You&apos;re Offline
          </h1>

          {/* Description */}
          <p className="mb-8 text-slate-400">
            It looks like you&apos;ve lost your internet connection. 
            Don&apos;t worry, you can still browse previously visited pages.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => window.location.reload()}
              className="rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-purple-500/50"
            >
              Try Again
            </button>

            <Link
              href="/"
              className="rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3 font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800"
            >
              Go to Homepage
            </Link>
          </div>

          {/* Status */}
          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur">
            <p className="text-sm text-slate-500">
              <strong className="text-slate-400">Tip:</strong> Once you&apos;re back online, 
              this page will automatically reconnect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
