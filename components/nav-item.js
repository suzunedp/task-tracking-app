"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, label, icon }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const baseClasses = "flex items-center gap-2 p-2 rounded hover:bg-gray-200";
  const activeClasses = isActive ? "bg-gray-200 font-bold" : "text-gray-600";

  return <li></li>;
}
