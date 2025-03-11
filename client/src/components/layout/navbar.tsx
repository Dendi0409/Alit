import { Link } from "wouter";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Početna" },
  { href: "/about", label: "O nama" },
  { href: "/products", label: "Proizvodi" },
  { href: "/contact", label: "Kontakt" }
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/">
          <a className="mr-8 flex items-center space-x-2">
            <img 
              src="/WhatsApp_Image_2025-03-06_at_17.01.57__1_-removebg-preview.png" 
              alt="Alit Logo" 
              className="h-8"
            />
          </a>
        </Link>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
              )}>
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}