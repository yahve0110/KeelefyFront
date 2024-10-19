"use client";

import {
  BookA,
  BookOpenCheck,
  MessageCircleMore,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@/app/imgs/svgkeelify.svg";
import Image from "next/image";

const navItems = [
  {
    href: "/lessons",
    label: "Уроки",
    icon: BookOpenCheck,
  },
  {
    href: "/dictionary",
    label: "Словарь",
    icon: BookA,
  },
  {
    href: "/profile",
    label: "Профиль",
    icon: User,
  },
  {
    href: "/settings",
    label: "Настройки",
    icon: Settings,
  },
  {
    href: "/chat",
    label: "Чат",
    icon: MessageCircleMore,
  },
];

const NavItem = ({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <li
      className={`group transition-colors duration-200 ${
        isActive ? "text-blue-500 font-bold" : ""
      }`}
    >
      <Link
        href={href}
        className="flex items-center gap-2 transition-colors duration-200"
      >
        <Icon
          className={`group-hover:text-blue-500 transition-colors duration-200 ${
            isActive ? "text-blue-500" : ""
          }`}
        />
        <p
          className={`group-hover:text-blue-500 transition-colors duration-200 ${
            isActive ? "text-blue-500" : ""
          }`}
        >
          {label}
        </p>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <nav className="w-[200px] h-screen border flex justify-center border-r-gray-300 pt-6 text-2xl">
      <div>
        <Link
          href={"/"}
          className="flex items-center gap-1 pb-11 w-[160px] transition-colors duration-200"
        >
          <h1 className="text-4xl font-bold text-blue-500">Keelify</h1>
          <Image
            className="w-10 h-10"
            src={logo}
            alt="Keelify Logo"
            width={20}
            height={20}
          />
        </Link>
        <ul className="flex flex-col gap-5">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              Icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
