import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white text-coffee-brown sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO IMAGE ONLY */}
          <Link
            href="/"
            className="flex items-center paw-cursor hover-bounce"
            data-testid="logo-link"
          >
            <img
              src="https://iteeha.coffee/images/iteeha%20logo.png"
              alt="Iteeha Logo"
              className="h-14 md:h-20 w-auto object-contain hover-wiggle"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-warm-golden transition-colors paw-cursor hover-bounce ${
                  location === item.href ? "text-warm-golden" : ""
                }`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="border-2 border-coffee-brown text-coffee-brown px-6 py-2 rounded-md hover:bg-coffee-brown hover:text-white transition-all"
              data-testid="button-order-now"
            >
              <Link href="/order-landing">ORDER NOW</Link>
            </Button>
          </div>

          {/* MOBILE NAVIGATION */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden text-coffee-brown hover-wiggle"
                data-testid="button-mobile-menu"
              >
                <Menu size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white text-coffee-brown border-l border-gray-200"
            >
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg hover:text-warm-golden transition-colors paw-cursor hover-bounce ${
                      location === item.href ? "text-warm-golden" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="border-2 border-coffee-brown text-coffee-brown mt-4 rounded-md hover:bg-coffee-brown hover:text-white"
                  data-testid="button-mobile-order"
                >
                  <Link href="/order-landing" onClick={() => setIsOpen(false)}>
                    ORDER NOW
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
