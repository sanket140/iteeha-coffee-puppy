import { Link } from "wouter";
import { Coffee, Heart, Instagram, Facebook, Twitter, Mail, Clock, MapPin, Dog } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-brown border-t-4 border-golden-fur text-cream-latte py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Coffee className="text-2xl text-golden-fur" size={28} />
                <Heart className="text-xs text-puppy-pink absolute -top-1 -right-1 animate-pulse" size={12} />
              </div>
              <span className="font-baloo text-xl font-bold">Iteeha Coffee & Pups</span>
            </div>
            <p className="opacity-80 mb-4">
              Where tradition meets tail wags. Mumbai's coziest coffee shop with the friendliest furry companions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/iteeha.coffee/" 
                className="text-golden-fur hover:text-puppy-pink transition-colors text-xl paw-cursor"
                data-testid="link-instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-golden-fur hover:text-puppy-pink transition-colors text-xl paw-cursor"
                data-testid="link-facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-golden-fur hover:text-puppy-pink transition-colors text-xl paw-cursor"
                data-testid="link-twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-baloo text-lg font-bold mb-4 text-golden-fur">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="opacity-80 hover:opacity-100 hover:text-golden-fur transition-colors paw-cursor" data-testid="footer-link-home">Home</Link></li>
              <li><Link href="/menu" className="opacity-80 hover:opacity-100 hover:text-golden-fur transition-colors paw-cursor" data-testid="footer-link-menu">Menu</Link></li>
              <li><Link href="/about" className="opacity-80 hover:opacity-100 hover:text-golden-fur transition-colors paw-cursor" data-testid="footer-link-about">About</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:opacity-100 hover:text-golden-fur transition-colors paw-cursor" data-testid="footer-link-contact">Contact</Link></li>
              <li><Link href="/order-landing" className="opacity-80 hover:opacity-100 hover:text-golden-fur transition-colors paw-cursor" data-testid="footer-link-order">Order Online</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-baloo text-lg font-bold mb-4 text-playful-teal">Pup Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-playful-teal transition-colors paw-cursor" data-testid="link-adoption">Adoption Events</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-playful-teal transition-colors paw-cursor" data-testid="link-meet-pups">Meet Our Pups</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-playful-teal transition-colors paw-cursor" data-testid="link-community">Pet Parent Community</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-playful-teal transition-colors paw-cursor" data-testid="link-training">Dog Training Tips</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-playful-teal transition-colors paw-cursor" data-testid="link-volunteer">Volunteer Program</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-baloo text-lg font-bold mb-4 text-puppy-pink">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="text-golden-fur" size={16} />
                <span data-testid="text-email">connect@iteeha.coffee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-golden-fur" size={16} />
                <span data-testid="text-hours">7:30 AM - 11:30 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-golden-fur" size={16} />
                <span data-testid="text-locations">3 Mumbai Locations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Dog className="text-golden-fur" size={16} />
                <span data-testid="text-pups">12+ Resident Pups</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream-latte border-opacity-20 mt-8 pt-8 text-center">
          <div className="paw-separator mb-4"></div>
          <p className="opacity-70">
            © 2024 Iteeha Coffee & Pups. All rights reserved. Made with{" "}
            <Heart className="inline text-puppy-pink mx-1" size={16} /> and lots of{" "}
            <Coffee className="inline text-golden-fur mx-1" size={16} />
          </p>
          <p className="opacity-60 text-sm mt-2 font-pacifico">
            "Basic but Beautiful" - As per tradition, with extra tail wags ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
