import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Clock, MapPin, Dog, Phone, MessageCircle, Send, Instagram } from "lucide-react";
import { useState, useCallback } from "react";

export default function Contact() {
  const locations = [
    {
      name: "Mahalaxmi",
      address: "Ground Floor, Urmi Axis Building, West, behind Famous studio, opp. Doctor Elijah Moses Road, Mahalakshmi, Mumbai, Maharashtra 400011",
      pups: 5,
      feature: "Dog-Friendly Patio",
      bgColor: "bg-golden-fur",
      textColor: "text-coffee-brown"
    },
    {
      name: "Lower Parel",
      address: "95, Ganpatrao Kadam Marg, Opposite Peninsula Business Park, Lower Parel West, Mumbai, Maharashtra 400013",
      pups: 4,
      feature: "Indoor Play Area",
      bgColor: "bg-playful-teal",
      textColor: "text-cream-latte"
    },
    {
      name: "Bandra West",
      address: "Shop 6, Shanti Vanam, Hill Road, Bandra West, Mumbai",
      pups: 3,
      feature: "Cozy Corner Seating",
      bgColor: "bg-puppy-pink",
      textColor: "text-cream-latte"
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coffee-brown to-caramel text-cream-latte">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <Phone className="text-golden-fur" size={48} />
            <Mail className="text-playful-teal" size={48} />
            <MessageCircle className="text-puppy-pink" size={48} />
          </div>

          <h1 className="font-baloo text-5xl lg:text-6xl font-bold mb-6" data-testid="text-contact-title">
            Contact Us ☕
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto" data-testid="text-contact-subtitle">
            Come experience the warmth of Iteeha Coffee. We're here to serve you the perfect cup. ✨
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-baloo text-3xl font-bold text-coffee-brown mb-8" data-testid="text-message-title">
                Send us a Message
              </h2>

              <Card className="bg-cream-latte bg-opacity-50 p-8 shadow-lg">
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-coffee-brown mb-2 block">
                          Name *
                        </label>
                        <Input 
                          placeholder="Your Name" 
                          className="bg-white border-cream-latte focus:border-golden-fur"
                          data-testid="input-name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-coffee-brown mb-2 block">
                          Email *
                        </label>
                        <Input 
                          type="email"
                          placeholder="Your Email" 
                          className="bg-white border-cream-latte focus:border-golden-fur"
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-coffee-brown mb-2 block">
                        Phone
                      </label>
                      <Input 
                        type="tel"
                        placeholder="Your Phone Number" 
                        className="bg-white border-cream-latte focus:border-golden-fur"
                        data-testid="input-phone"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-coffee-brown mb-2 block">
                        Contact Person *
                      </label>
                      <Select data-testid="select-contact-person">
                        <SelectTrigger className="bg-white border-cream-latte focus:border-golden-fur">
                          <SelectValue placeholder="Please Select Person" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="manager">Store Manager</SelectItem>
                          <SelectItem value="catering">Catering Services</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="partnerships">Partnerships</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-coffee-brown mb-2 block">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us how we can help you..."
                        rows={4}
                        className="bg-white border-cream-latte focus:border-golden-fur resize-none"
                        data-testid="textarea-message"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-golden-fur text-coffee-brown py-4 rounded-2xl font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor"
                      data-testid="button-send-message"
                    >
                      <Send className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-baloo text-3xl font-bold text-coffee-brown mb-8" data-testid="text-get-in-touch-title">
                Get in Touch
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-golden-fur p-3 rounded-full">
                    <Mail className="text-coffee-brown" size={24} />
                  </div>
                  <div>
                    <h4 className="font-baloo text-xl font-bold text-coffee-brown mb-2" data-testid="text-email-title">
                      Email
                    </h4>
                    <p className="text-coffee-brown opacity-80" data-testid="text-email-address">
                      connect@iteeha.coffee
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-playful-teal p-3 rounded-full">
                    <Clock className="text-cream-latte" size={24} />
                  </div>
                  <div>
                    <h4 className="font-baloo text-xl font-bold text-coffee-brown mb-2" data-testid="text-hours-title">
                      Hours
                    </h4>
                    <div className="text-coffee-brown opacity-80">
                      <p data-testid="text-hours-time">7:30 AM - 11:30 PM</p>
                      <p data-testid="text-hours-days">All Days</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-puppy-pink p-3 rounded-full">
                    <Instagram className="text-cream-latte" size={24} />
                  </div>
                  <div>
                    <h4 className="font-baloo text-xl font-bold text-coffee-brown mb-2" data-testid="text-follow-title">
                      Follow Us
                    </h4>
                    <a 
                      href="https://www.instagram.com/iteeha.coffee/" 
                      className="text-coffee-brown opacity-80 hover:text-playful-teal transition-colors"
                      data-testid="link-instagram-handle"
                    >
                      @iteeha.coffee
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-20 bg-cream-latte">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4" data-testid="text-locations-title">
              Our Locations
            </h2>
            <p className="text-xl text-coffee-brown opacity-80" data-testid="text-locations-subtitle">
              Visit us at any of our cozy Mumbai locations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`${location.bgColor} p-3 rounded-full`}>
                      <MapPin className={location.textColor} size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-baloo text-xl font-bold mb-2`} style={{color: location.bgColor.includes('golden') ? '#F7C873' : location.bgColor.includes('teal') ? '#3BB4A1' : '#F4A6B2'}} data-testid={`title-location-${index}`}>
                        {location.name}
                      </h3>
                      <p className="text-coffee-brown opacity-80 text-sm mb-3" data-testid={`address-location-${index}`}>
                        {location.address}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="flex items-center bg-cream-latte px-2 py-1 rounded-full" data-testid={`pups-location-${index}`}>
                          <Dog className="mr-1" size={12} />
                          {location.pups} Resident Pups
                        </span>
                        <span className="flex items-center bg-cream-latte px-2 py-1 rounded-full" data-testid={`feature-location-${index}`}>
                          <span className="mr-1">🐾</span>
                          {location.feature}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Paw Print Separator */}
      <div className="paw-separator my-8"></div>

      {/* Final CTA */}
      <section className="py-20 bg-coffee-brown text-cream-latte">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-baloo text-4xl lg:text-5xl font-bold mb-6" data-testid="text-visit-cta-title">
            Come Sip & <span className="font-pacifico text-golden-fur">Snuggle</span> With Us
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto" data-testid="text-visit-cta-subtitle">
            We're brewing daily from 7:30 AM to 11:30 PM. Find us in the heart of Mumbai with our furry friends!
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Mail className="text-golden-fur mb-2" size={32} />
              <span className="text-sm" data-testid="text-contact-email">connect@iteeha.coffee</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="text-playful-teal mb-2" size={32} />
              <span className="text-sm" data-testid="text-contact-hours">7:30 AM - 11:30 PM</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="text-puppy-pink mb-2" size={32} />
              <span className="text-sm" data-testid="text-contact-locations">3 Mumbai Locations</span>
            </div>
            <div className="flex flex-col items-center">
              <Dog className="text-golden-fur mb-2" size={32} />
              <span className="text-sm" data-testid="text-contact-pups">12+ Resident Pups</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}