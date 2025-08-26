import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ShoppingCart, Heart, Dog, Home as HomeIcon, Coffee, Calendar, Star } from "lucide-react";

export default function Home() {
  const favorites = [
    {
      id: 1,
      name: "Golden Retriever Blend",
      description: "Espresso with steamed milk and vanilla, topped with golden caramel swirls",
      price: "₹225",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      tag: "Golden's Choice",
      tagColor: "bg-golden-fur",
      iconColor: "text-golden-fur"
    },
    {
      id: 2,
      name: "Pug's Espresso Delight",
      description: "Rich, bold double shot espresso - small but mighty, just like our pugs!",
      price: "₹160",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      tag: "Pug's Pick",
      tagColor: "bg-coffee-brown text-cream-latte",
      iconColor: "text-coffee-brown"
    },
    {
      id: 3,
      name: "Beagle's Matcha Magic",
      description: "Premium matcha powder with steamed oat milk - energetic and wholesome",
      price: "₹320",
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      tag: "Pup Special",
      tagColor: "bg-playful-teal text-cream-latte",
      iconColor: "text-playful-teal"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Coffee & Dog Enthusiast ✨",
      quote: "This place feels like stepping into a coffee wonderland! The pups make every visit special, and every sip is pure magic.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      icon: <Dog className="text-golden-fur" size={32} />
    },
    {
      name: "Rahul K.",
      role: "Regular Visitor ⭐",
      quote: "The atmosphere here is absolutely enchanting. Charlie the golden retriever has become my coffee buddy. It's my daily dose of happiness!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      icon: <Heart className="text-playful-teal" size={32} />
    },
    {
      name: "Priya S.",
      role: "Business Professional 💼",
      quote: "Perfect blend of tradition and innovation. The pups add such warmth to business meetings. Every visit feels like discovering something new!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      icon: <Star className="text-puppy-pink" size={32} />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-coffee-brown via-caramel to-coffee-brown min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-baloo text-5xl lg:text-7xl font-bold text-cream-latte mb-6 leading-tight" data-testid="text-hero-title">
                Coffee. Craft. <br />
                <span className="text-golden-fur">Conversations</span> <br />
                <span className="text-puppy-pink font-pacifico text-4xl lg:text-5xl">& Cuddles</span>
              </h1>
              
              <p className="text-xl text-cream-latte mb-8 opacity-90" data-testid="text-hero-subtitle">
                Where every cup tells a story and every pup finds a friend. 
                Handcrafted coffee, cozy vibes, and furry companions to warm your heart.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild
                  className="bg-playful-teal text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor relative steam-effect"
                  data-testid="button-order-now-hero"
                >
                  <Link href="/order-landing">
                    <ShoppingCart className="mr-2" size={20} />
                    Order Now
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-2 border-cream-latte text-cream-latte bg-transparent px-8 py-4 rounded-full font-semibold hover:bg-cream-latte hover:text-coffee-brown transition-all transform hover:scale-105 paw-cursor"
                  data-testid="button-meet-pups"
                >
                  <Link href="/about">
                    <Dog className="mr-2" size={20} />
                    Meet Our Pups
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Cozy cafe interior with friendly dogs" 
                className="rounded-3xl shadow-2xl w-full animate-bounce-gentle"
                data-testid="img-hero-cafe"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-golden-fur p-4 rounded-full shadow-lg animate-wag">
                <Dog className="text-coffee-brown" size={32} />
              </div>
              
              <div className="absolute -top-6 -left-6 bg-puppy-pink p-4 rounded-full shadow-lg">
                <Heart className="text-cream-latte animate-pulse" size={24} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream-latte animate-bounce">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </section>

      {/* Paw Print Separator */}
      <div className="paw-separator my-8"></div>

      {/* Our Favorites */}
      <section className="py-20 bg-cream-latte">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4" data-testid="text-favorites-title">
              Our Pup-ular Favorites
            </h2>
            <p className="text-xl text-coffee-brown opacity-80 font-pacifico" data-testid="text-favorites-subtitle">
              Handcrafted with premium ingredients and a dash of puppy love
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((item) => (
              <Card 
                key={item.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 paw-cursor group"
                data-testid={`card-favorite-${item.id}`}
              >
                <CardContent className="p-6">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-2xl mb-4"
                    data-testid={`img-favorite-${item.id}`}
                  />
                  
                  <div className="relative">
                    <span className={`${item.tagColor} px-3 py-1 rounded-full text-sm font-semibold`} data-testid={`tag-favorite-${item.id}`}>
                      <Dog className="inline mr-1" size={14} />
                      {item.tag}
                    </span>
                    
                    <h3 className="font-baloo text-2xl font-bold text-coffee-brown mt-4 mb-2" data-testid={`title-favorite-${item.id}`}>
                      {item.name}
                    </h3>
                    <p className="text-coffee-brown opacity-70 mb-4" data-testid={`description-favorite-${item.id}`}>
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-caramel" data-testid={`price-favorite-${item.id}`}>{item.price}</span>
                      <div className={`${item.iconColor} group-hover:animate-wag`}>
                        <Dog size={20} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild
              className="bg-coffee-brown text-cream-latte px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor"
              data-testid="button-see-full-menu"
            >
              <Link href="/menu">
                <Coffee className="mr-2" size={20} />
                See Full Menu
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Paw Print Separator */}
      <div className="paw-separator my-8"></div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Beautiful coffee art with heart-shaped latte art"
                className="rounded-3xl shadow-xl w-full"
                data-testid="img-about-main"
              />
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Coffee beans arranged in artistic patterns"
                  className="rounded-2xl shadow-lg"
                  data-testid="img-about-beans"
                />
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Warm, inviting cafe interior with comfortable seating"
                  className="rounded-2xl shadow-lg"
                  data-testid="img-about-interior"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-puppy-pink p-3 rounded-full mr-4">
                  <Heart className="text-cream-latte" size={24} />
                </div>
                <span className="font-pacifico text-xl text-puppy-pink" data-testid="text-story-badge">Our Story</span>
              </div>
              
              <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-6" data-testid="text-story-title">
                Where Tradition Meets <span className="text-golden-fur">Tail Wags</span>
              </h2>
              
              <p className="text-lg text-coffee-brown opacity-80 mb-6 leading-relaxed" data-testid="text-story-p1">
                As a cozy café in the heart of Mumbai, we are a quiet spot for you amidst the city's turmoil. 
                Now with our furry friends joining the family, we've created an even more special place where 
                coffee lovers and dog lovers unite.
              </p>
              
              <p className="text-lg text-coffee-brown opacity-80 mb-6 leading-relaxed" data-testid="text-story-p2">
                "Iteeha" roughly translates to <em>'as per tradition'</em>, and keeping that in mind, we adopted 
                the virtue of doing <strong>'Basic but Beautiful'</strong> - now with an extra dose of puppy love. 
                We offer light and simple products, but beautifully done, served alongside the warmth of our 
                cafe pups.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="text-center p-4 bg-cream-latte">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-coffee-brown" data-testid="text-pups-count">12+</div>
                    <div className="text-coffee-brown opacity-70" data-testid="text-pups-label">Resident Pups</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-cream-latte">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-coffee-brown" data-testid="text-locations-count">3</div>
                    <div className="text-coffee-brown opacity-70" data-testid="text-locations-label">Mumbai Locations</div>
                  </CardContent>
                </Card>
              </div>
              
              <Button 
                asChild
                className="bg-playful-teal text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor"
                data-testid="button-learn-more"
              >
                <Link href="/about">
                  <Dog className="mr-2" size={20} />
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Adoption Community Section */}
      <section className="py-20 bg-gradient-to-br from-puppy-pink via-cream-latte to-golden-fur">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-6" data-testid="text-adoption-title">
              Brewing Community, <span className="font-pacifico text-playful-teal">One Adoption at a Time</span>
            </h2>
            
            <p className="text-xl text-coffee-brown opacity-80 mb-12 leading-relaxed" data-testid="text-adoption-description">
              Every month, we partner with local animal shelters to host adoption events. 
              When you adopt a furry friend, your first month of coffee is on us!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white p-6 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-golden-fur p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <HomeIcon className="text-coffee-brown" size={24} />
                  </div>
                  <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2" data-testid="text-adoption-step1-title">Find Your Match</h3>
                  <p className="text-coffee-brown opacity-70" data-testid="text-adoption-step1-desc">Browse adoptable pets at our monthly events</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white p-6 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-playful-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Coffee className="text-cream-latte" size={24} />
                  </div>
                  <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2" data-testid="text-adoption-step2-title">Free Coffee Month</h3>
                  <p className="text-coffee-brown opacity-70" data-testid="text-adoption-step2-desc">Adopters get unlimited coffee for 30 days</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white p-6 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-puppy-pink p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="text-cream-latte" size={24} />
                  </div>
                  <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2" data-testid="text-adoption-step3-title">Ongoing Support</h3>
                  <p className="text-coffee-brown opacity-70" data-testid="text-adoption-step3-desc">Join our pet parent community</p>
                </CardContent>
              </Card>
            </div>
            
            <Button className="bg-coffee-brown text-cream-latte px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor" data-testid="button-next-event">
              <Calendar className="mr-2" size={20} />
              Next Adoption Event: Dec 15th
            </Button>
          </div>
        </div>
      </section>

      {/* Paw Print Separator */}
      <div className="paw-separator my-8"></div>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4" data-testid="text-testimonials-title">
              Coffee Stories & <span className="font-pacifico text-puppy-pink">Pup Tales</span>
            </h2>
            <p className="text-xl text-coffee-brown opacity-80" data-testid="text-testimonials-subtitle">
              What our coffee lovers and dog parents say about their magical experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-cream-latte p-8 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                      data-testid={`img-testimonial-${index}`}
                    />
                  </div>
                  <div className="text-4xl mb-4" data-testid={`icon-testimonial-${index}`}>
                    {testimonial.icon}
                  </div>
                  <p className="text-coffee-brown opacity-80 mb-4 italic" data-testid={`quote-testimonial-${index}`}>
                    "{testimonial.quote}"
                  </p>
                  <div className="text-coffee-brown font-semibold" data-testid={`name-testimonial-${index}`}>{testimonial.name}</div>
                  <div className="text-coffee-brown opacity-60 text-sm" data-testid={`role-testimonial-${index}`}>{testimonial.role}</div>
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
          <h2 className="font-baloo text-4xl lg:text-5xl font-bold mb-4" data-testid="text-cta-title">
            Come Sip & <span className="font-pacifico text-golden-fur">Snuggle</span> With Us
          </h2>
          <p className="text-xl opacity-90 mb-8" data-testid="text-cta-subtitle">
            We're brewing daily from 7:30 AM to 11:30 PM. Find us in the heart of Mumbai with our furry friends!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-playful-teal text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor"
              data-testid="button-visit-us"
            >
              <Link href="/contact">
                <Dog className="mr-2" size={20} />
                Visit Us
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-2 border-cream-latte text-cream-latte bg-transparent px-8 py-4 rounded-full font-semibold hover:bg-cream-latte hover:text-coffee-brown transition-all transform hover:scale-105 paw-cursor"
              data-testid="button-order-online"
            >
              <Link href="/order-landing">
                <ShoppingCart className="mr-2" size={20} />
                Order Online
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
