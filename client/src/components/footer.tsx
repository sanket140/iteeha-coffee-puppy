
import { Link } from "wouter";
import { Coffee, Dog, Mail, Phone, MapPin, Instagram, Heart, Gamepad2, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-brown text-cream-latte pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-bright-puppy-pink p-3 rounded-full">
                <Coffee className="text-coffee-brown" size={28} />
              </div>
              <h3 className="font-baloo text-2xl font-bold">Iteeha Coffee & Pet Paradise</h3>
            </div>
            <p className="text-lg mb-6 opacity-90 leading-relaxed">
              Mumbai's premier pet-friendly coffee destination. Where tradition meets tail wags, 
              offering premium coffee, delicious food, and everything your furry friends need for a pawsome experience.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/iteeha.coffee/" 
                className="bg-bright-puppy-pink p-2 rounded-full hover:bg-opacity-80 transition-colors paw-cursor hover-bounce"
                data-testid="link-instagram"
              >
                <Instagram className="text-coffee-brown" size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-baloo text-lg font-bold mb-4 text-bright-puppy-pink">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="opacity-80 hover:opacity-100 hover:text-bright-puppy-pink transition-colors paw-cursor hover-bounce" data-testid="link-home">Home</Link></li>
              <li><Link href="/about" className="opacity-80 hover:opacity-100 hover:text-bright-puppy-pink transition-colors paw-cursor hover-bounce" data-testid="link-about">About Us</Link></li>
              <li><Link href="/menu" className="opacity-80 hover:opacity-100 hover:text-bright-puppy-pink transition-colors paw-cursor hover-bounce" data-testid="link-menu">Menu</Link></li>
              <li><Link href="/order-landing" className="opacity-80 hover:opacity-100 hover:text-bright-puppy-pink transition-colors paw-cursor hover-bounce" data-testid="link-order">Order Online</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:opacity-100 hover:text-bright-puppy-pink transition-colors paw-cursor hover-bounce" data-testid="link-contact">Contact</Link></li>
            </ul>
          </div>
          
          {/* Pet Services */}
          <div>
            <h4 className="font-baloo text-lg font-bold mb-4 text-bright-puppy-pink">Pet Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-bright-puppy-pink transition-colors paw-cursor hover-bounce flex items-center" data-testid="link-pet-food">
                <Dog className="mr-2" size={14} />
                Premium Pet Food
              </a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-bright-puppy-pink transition-colors paw-cursor hover-bounce flex items-center" data-testid="link-pet-toys">
                <Gamepad2 className="mr-2" size={14} />
                Interactive Pet Toys
              </a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-bright-puppy-pink transition-colors paw-cursor hover-bounce flex items-center" data-testid="link-pet-friendly">
                <Heart className="mr-2" size={14} />
                Pet-Friendly Space
              </a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-bright-puppy-pink transition-colors paw-cursor hover-bounce flex items-center" data-testid="link-pet-care">
                <Star className="mr-2" size={14} />
                Pet Care Tips
              </a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-bright-puppy-pink transition-colors paw-cursor hover-bounce flex items-center" data-testid="link-pet-community">
                <Coffee className="mr-2" size={14} />
                Pet Parent Community
              </a></li>
            </ul>
          </div>
        </div>
        
        {/* Contact Info Section */}
        <div className="border-t border-cream-latte border-opacity-20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="text-bright-puppy-pink" size={20} />
              <div>
                <h5 className="font-semibold">Email Us</h5>
                <p className="opacity-80 text-sm" data-testid="text-email">connect@iteeha.coffee</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="text-warm-golden" size={20} />
              <div>
                <h5 className="font-semibold">Call Us</h5>
                <p className="opacity-80 text-sm" data-testid="text-phone">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="text-playful-teal" size={20} />
              <div>
                <h5 className="font-semibold">Visit Us</h5>
                <p className="opacity-80 text-sm" data-testid="text-locations">3 Locations in Mumbai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hours & Bottom */}
        <div className="border-t border-cream-latte border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="font-baloo text-lg font-bold text-warm-golden mb-2">Hours</h5>
              <p className="opacity-80" data-testid="text-hours">Daily: 7:30 AM - 11:30 PM</p>
              <p className="opacity-60 text-sm">Pet-friendly all day, every day!</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="opacity-60 text-sm mb-2" data-testid="text-copyright">
                © 2024 Iteeha Coffee & Pet Paradise. All rights reserved.
              </p>
              <p className="text-xs opacity-40">
                Made with <Heart className="inline text-bright-puppy-pink" size={12} /> for coffee lovers and their furry friends
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
