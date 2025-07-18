"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import Link from "next/link";
import LogoDigitalLiveHub from "../../public/logo.svg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className=" backdrop-blur  sticky top-0 z-50">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LogoDigitalLiveHub className="w-36 h-auto" />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span className="text-sm">ENG</span>
          </div>

          {/* Mobile Menu Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded"></div>
                  <span>Digital LiveHub</span>
                </SheetTitle>
                <SheetDescription>
                  Navigate through our services and solutions
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors py-2 px-4 rounded-lg hover:bg-pink-50"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center space-x-2 py-2 px-4">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm">English</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                    GET STARTED
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
