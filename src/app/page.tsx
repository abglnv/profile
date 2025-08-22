'use client'

import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 font-mono flex flex-col items-center p-8">
      <div className="flex flex-col items-center text-center space-y-2 max-w-xl">
        <Image
          src="/me.jpeg"
          alt="profile picture"
          width={160}
          height={160}
          className="rounded-full border border-neutral-300 shadow-sm"
        />
        <h1 className="text-2xl font-bold">ALIKHAN BAGLANOV</h1>
        <p className="text-sm text-neutral-500">AKTOBE, KZ</p>
      </div>

      <div className="mt-10 max-w-2xl space-y-8">
            <section>
              <h2 className="uppercase text-sm font-semibold mb-2">today</h2>
              <p>
                senior at <a href="https://nis.edu.kz" target="_blank" className="underline">nazarbayev school</a>. <br />
              </p>
            </section>

            <section>
              <h2 className="uppercase text-sm font-semibold mb-2">tech stack</h2>
              <p>react, next.js, nest.js, js, ts, go, py</p>
            </section>

            <section>
              <h2 className="uppercase text-sm font-semibold mb-2">favourite quote</h2>
              <blockquote className="italic">
                {'"what the hell is work-life-balance, you should have work-work-balance."'}
              </blockquote>
            </section>

            <section>
              <h2 className="uppercase text-sm font-semibold mb-2">links</h2>
              <ul className="space-y-1">
                <li><a href="https://github.com/abglnv" target="_blank" className="underline">github</a></li>
                <li><a href="https://t.me/abglnv" target="_blank" className="underline">telegram</a></li>
                <li><a href="https://www.linkedin.com/in/baglanov/" target="_blank" className="underline">linkedin</a></li>
                <li><a href="mailto:me@baglanov.com" target="_blank" className="underline">email</a></li>
              </ul>
            </section>
      </div>
    </main>
  )
}
