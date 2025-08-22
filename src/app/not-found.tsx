"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 font-mono flex flex-col items-center p-8">
      <div className="flex flex-col items-center text-center space-y-4 max-w-xl">
        <h1 className="text-4xl font-bold">404 – Whoops!</h1>
        <p className="text-sm text-neutral-500">
          What are you trying to find out about me?? 😅
        </p>

        <p className="mt-4">
          Maybe go back <Link href="/" className="underline">home</Link> and try again.
        </p>

        <div className="mt-6 space-y-1 text-sm">
          <p>Or contact me directly 😉:</p>
          <ul className="space-y-1">
            <li>
              <Link href="https://t.me/abglnv" target="_blank" className="underline">
                Telegram
              </Link>
            </li>
            <li>
              <Link href="mailto:me@baglanov.com" target="_blank" className="underline">
                Email
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/baglanov/" target="_blank" className="underline">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
