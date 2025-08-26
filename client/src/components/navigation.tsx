import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Coffee, Heart, Menu, ShoppingCart, Dog } from "lucide-react";

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
    <nav className="bg-coffee-brown text-cream-latte sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 paw-cursor hover-bounce" data-testid="logo-link">
            <div className="relative">
              <Coffee className="text-2xl text-warm-golden hover-wiggle" size={28} />
              <Heart className="text-xs text-bright-puppy-pink absolute -top-1 -right-1 animate-pulse hover-shake" size={12} />
            </div>
            <span className="font-baloo text-xl font-bold hover-wiggle">Iteeha Coffee & Pups</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
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
              className="bg-bright-puppy-pink text-coffee-brown px-4 py-2 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-110 hover-glow paw-cursor"
              data-testid="button-order-now"
            >
              <Link href="/order-landing">
                <ShoppingCart className="mr-2" size={16} />
                Order Now
              </Link>
            </Button>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden text-cream-latte hover-wiggle" data-testid="button-mobile-menu">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-coffee-brown text-cream-latte border-golden-fur">
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
                  className="bg-bright-puppy-pink text-coffee-brown mt-4 paw-cursor hover-glow"
                  data-testid="button-mobile-order"
                >
                  <Link href="/order-landing" onClick={() => setIsOpen(false)}>
                    <ShoppingCart className="mr-2" size={16} />
                    Order Now
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
