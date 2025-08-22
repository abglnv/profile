// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "about", href: "/" },
  { label: "experience", href: "/experience" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  const showNavbar = !pathname?.startsWith("/blog/");

  if (!showNavbar){
    return (
        <div></div>
    )
  }

  return (
    <nav className="flex space-x-6 text-sm mb-10">
      {tabs.map((tab) => {
        const isActive =
          tab.href === "/"
            ? pathname === "/"
            : pathname.startsWith(tab.href);

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`hover:underline transition ${
              isActive ? "font-bold" : ""
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
