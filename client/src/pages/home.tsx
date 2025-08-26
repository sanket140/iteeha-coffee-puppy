import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ShoppingCart, Heart, Dog, Home as HomeIcon, Coffee, Calendar, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pawTrails, setPawTrails] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [clickCount, setClickCount] = useState(0);

  const carouselImages = [
    {
      id: 1,
      image: "https://iteeha.coffee/images/vfx.png",
      title: "Coffee. Craft. Conversations.",
      subtitle: "let us take care of the rest."
    },
    {
      id: 2,
      image: "https://iteeha.coffee/images/urmi.jpg",
      title: "Step in, relax,",
      subtitle: "enjoy every sip with our furry friends."
    },
    {
      id: 3,
      image: "https://iteeha.coffee/images/e2.jpg",
      title: "Premium Coffee Experience",
      subtitle: "handcrafted with love and puppy magic."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  const createPawTrail = useCallback((e: React.MouseEvent) => {
    const newPaw = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    };
    setPawTrails(prev => [...prev, newPaw]);
    setClickCount(prev => prev + 1);
    
    setTimeout(() => {
      setPawTrails(prev => prev.filter(paw => paw.id !== newPaw.id));
    }, 2000);
  }, []);

  const handleInteractiveClick = useCallback((e: React.MouseEvent) => {
    createPawTrail(e);
    e.currentTarget.classList.add('animate-bounce');
    setTimeout(() => {
      e.currentTarget.classList.remove('animate-bounce');
    }, 600);
  }, [createPawTrail]);

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
      {/* Paw Trails */}
      {pawTrails.map(paw => (
        <div
          key={paw.id}
          className="fixed pointer-events-none z-50 animate-paw-print"
          style={{
            left: paw.x - 16,
            top: paw.y - 16,
          }}
        >
          <Dog className="text-bright-puppy-pink w-8 h-8" />
        </div>
      ))}

      {/* Image Carousel Banner Section */}
      <section className="relative h-screen overflow-hidden" onClick={createPawTrail}>
        <div className="relative w-full h-full">
          {carouselImages.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>
              
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center px-4 bg-black/30 rounded-3xl backdrop-blur-sm p-12 border border-white/20">
                  <h1 className="font-baloo text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
                    <span className="inline-block hover:animate-wiggle transition-all duration-300 cursor-pointer text-white" onClick={handleInteractiveClick}>Coffee.</span>{" "}
                    <span className="inline-block hover:animate-wiggle transition-all duration-300 cursor-pointer text-white" onClick={handleInteractiveClick}>Craft.</span><br />
                    <span className="text-yellow-400 hover:animate-wiggle inline-block transition-all duration-300 cursor-pointer hover:scale-110 drop-shadow-2xl" onClick={handleInteractiveClick}>Conversations</span><br />
                    <span className="text-pink-400 font-pacifico text-4xl lg:text-5xl hover:animate-bounce inline-block transition-all duration-300 cursor-pointer hover:scale-110 drop-shadow-2xl" onClick={handleInteractiveClick}>& Cuddles</span>
                  </h1>
                  
                  <p className="text-xl mb-8 text-white drop-shadow-lg font-medium">
                    Where every cup tells a story and every pup finds a friend.<br />
                    Handcrafted coffee, cozy vibes, and furry companions to warm your heart.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      asChild
                      className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition-all transform hover:scale-110 hover-glow paw-cursor shadow-2xl"
                    >
                      <Link href="/order-landing">
                        <ShoppingCart className="mr-2" size={20} />
                        Order Now
                      </Link>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      className="border-2 border-yellow-400 text-yellow-400 bg-black/20 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-110 hover-bounce paw-cursor shadow-2xl"
                    >
                      <Link href="/about">
                        <Dog className="mr-2" size={20} />
                        Meet Our Pups
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              handleInteractiveClick(e);
              prevSlide();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-bright-puppy-pink bg-opacity-80 text-coffee-brown p-3 rounded-full hover:bg-opacity-100 transition-all hover:scale-125 hover:rotate-12 z-20 group"
          >
            <ChevronLeft size={24} className="group-hover:animate-bounce" />
          </button>
          
          <button
            onClick={(e) => {
              handleInteractiveClick(e);
              nextSlide();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-bright-puppy-pink bg-opacity-80 text-coffee-brown p-3 rounded-full hover:bg-opacity-100 transition-all hover:scale-125 hover:-rotate-12 z-20 group"
          >
            <ChevronRight size={24} className="group-hover:animate-bounce" />
          </button>
          
          {/* Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-bright-puppy-pink'
                    : 'bg-cream-latte bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Heart Separator */}
      <div className="heart-separator my-8"></div>

      {/* Our Favorites */}
      <section className="py-20 bg-cream-latte">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4 hover-wiggle">
              Our <span className="text-bright-puppy-pink">Pup-ular</span> Favorites
            </h2>
            <p className="text-xl text-coffee-brown opacity-80 font-pacifico hover-bounce">
              Handcrafted with premium ingredients and a dash of puppy love
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((item) => (
              <Card 
                key={item.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-rotate-1 hover-glow paw-cursor group cursor-pointer"
                onClick={handleInteractiveClick}
              >
                <CardContent className="p-6">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="relative">
                    <span className={`${item.tagColor} px-3 py-1 rounded-full text-sm font-semibold`}>
                      <Dog className="inline mr-1" size={14} />
                      {item.tag}
                    </span>
                    
                    <h3 className="font-baloo text-2xl font-bold text-coffee-brown mt-4 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-coffee-brown opacity-70 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-caramel hover-wiggle">{item.price}</span>
                      <div className={`${item.iconColor} group-hover:animate-wag hover-bounce`}>
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
              className="bg-warm-golden text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-110 hover-glow paw-cursor"
            >
              <Link href="/menu">
                <Coffee className="mr-2" size={20} />
                See Full Menu
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coffee Bean Separator */}
      <div className="coffee-bean-separator my-8"></div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Beautiful coffee art with heart-shaped latte art"
                className="rounded-3xl shadow-xl w-full"
              />
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Coffee beans arranged in artistic patterns"
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Warm, inviting cafe interior with comfortable seating"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-puppy-pink p-3 rounded-full mr-4">
                  <Heart className="text-cream-latte" size={24} />
                </div>
                <span className="font-pacifico text-xl text-puppy-pink">Our Story</span>
              </div>
              
              <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-6 hover-wiggle">
                Where Tradition Meets <span className="text-warm-golden hover-bounce inline-block">Tail Wags</span>
              </h2>
              
              <p className="text-lg text-coffee-brown opacity-80 mb-6 leading-relaxed">
                As a cozy café in the heart of Mumbai, we are a quiet spot for you amidst the city's turmoil. 
                Now with our furry friends joining the family, we've created an even more special place where 
                coffee lovers and dog lovers unite.
              </p>
              
              <p className="text-lg text-coffee-brown opacity-80 mb-6 leading-relaxed">
                "Iteeha" roughly translates to <em>'as per tradition'</em>, and keeping that in mind, we adopted 
                the virtue of doing <strong>'Basic but Beautiful'</strong> - now with an extra dose of puppy love. 
                We offer light and simple products, but beautifully done, served alongside the warmth of our 
                cafe pups.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="text-center p-4 bg-cream-latte">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-coffee-brown">12+</div>
                    <div className="text-coffee-brown opacity-70">Resident Pups</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-cream-latte">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-coffee-brown">3</div>
                    <div className="text-coffee-brown opacity-70">Mumbai Locations</div>
                  </CardContent>
                </Card>
              </div>
              
              <Button 
                asChild
                className="bg-bright-puppy-pink text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-110 hover-glow paw-cursor"
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
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-6 hover-wiggle">
              Brewing Community, <span className="font-pacifico text-bright-puppy-pink hover-bounce inline-block">One Adoption at a Time</span>
            </h2>
            
            <p className="text-xl text-coffee-brown opacity-80 mb-12 leading-relaxed">
              Every month, we partner with local animal shelters to host adoption events. 
              When you adopt a furry friend, your first month of coffee is on us!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white p-6 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-golden-fur p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <HomeIcon className="text-coffee-brown" size={24} />
                  </div>
                  <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2">Find Your Match</h3>
                  <p className="text-coffee-brown opacity-70">Browse adoptable pets at our monthly events</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white p-6 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-playful-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Coffee className="text-cream-latte" size={24} />
                  </div>
                  <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2">Free Coffee Month</h3>
                  <p className="text-coffee-brown opacity-70">Adopters get unlimited coffee for 30 days</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white p-6 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-puppy-pink p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="text-cream-latte" size={24} />
                  </div>
                  <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2">Ongoing Support</h3>
                  <p className="text-coffee-brown opacity-70">Join our pet parent community</p>
                </CardContent>
              </Card>
            </div>
            
            <Button className="bg-warm-golden text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-110 hover-glow paw-cursor">
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
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4 hover-wiggle">
              Coffee Stories & <span className="font-pacifico text-bright-puppy-pink hover-bounce inline-block">Pup Tales</span>
            </h2>
            <p className="text-xl text-coffee-brown opacity-80">
              What our coffee lovers and dog parents say about their magical experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-cream-latte p-8 shadow-lg text-center hover:shadow-xl transition-all transform hover:scale-105 hover:rotate-1 cursor-pointer group"
                onClick={handleInteractiveClick}
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12"
                    />
                  </div>
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {testimonial.icon}
                  </div>
                  <p className="text-coffee-brown opacity-80 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-coffee-brown font-semibold">{testimonial.name}</div>
                  <div className="text-coffee-brown opacity-60 text-sm">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heart Separator */}
      <div className="heart-separator my-8"></div>

      {/* Final CTA */}
      <section className="py-20 bg-coffee-brown text-cream-latte">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-baloo text-4xl lg:text-5xl font-bold mb-4 hover-wiggle">
            Come Sip & <span className="font-pacifico text-warm-golden hover-bounce inline-block">Snuggle</span> With Us
          </h2>
          <p className="text-xl opacity-90 mb-8">
            We're brewing daily from 7:30 AM to 11:30 PM. Find us in the heart of Mumbai with our furry friends!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-bright-puppy-pink text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-110 hover-glow paw-cursor"
            >
              <Link href="/contact">
                <Dog className="mr-2" size={20} />
                Visit Us
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-2 border-warm-golden text-warm-golden bg-transparent px-8 py-4 rounded-full font-semibold hover:bg-warm-golden hover:text-coffee-brown transition-all transform hover:scale-110 hover-bounce paw-cursor"
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