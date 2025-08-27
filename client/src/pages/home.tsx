
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ShoppingCart, Heart, Dog, Home as HomeIcon, Coffee, Star, ChevronLeft, ChevronRight, Sparkles, Gamepad2, Music, Zap } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pawTrails, setPawTrails] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [confetti, setConfetti] = useState<Array<{id: number, x: number, y: number, color: string}>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    
    setTimeout(() => {
      setPawTrails(prev => prev.filter(paw => paw.id !== newPaw.id));
    }, 2000);
  }, []);

  const createSparkles = useCallback((e: React.MouseEvent) => {
    const newSparkle = {
      id: Date.now() + Math.random(),
      x: e.clientX + Math.random() * 100 - 50,
      y: e.clientY + Math.random() * 100 - 50
    };
    setSparkles(prev => [...prev, newSparkle]);
    
    setTimeout(() => {
      setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
    }, 1500);
  }, []);

  const createConfetti = useCallback((e: React.MouseEvent) => {
    const colors = ['#F4A6B2', '#3BB4A1', '#F7C873', '#D4A574'];
    for (let i = 0; i < 5; i++) {
      const newConfetti = {
        id: Date.now() + Math.random() + i,
        x: e.clientX + Math.random() * 200 - 100,
        y: e.clientY + Math.random() * 200 - 100,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      setConfetti(prev => [...prev, newConfetti]);
    }
    
    setTimeout(() => {
      setConfetti(prev => prev.slice(5));
    }, 3000);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleInteractiveClick = useCallback((e: React.MouseEvent) => {
    createPawTrail(e);
    createSparkles(e);
    createConfetti(e);
    e.currentTarget.classList.add('animate-bounce');
    setTimeout(() => {
      e.currentTarget.classList.remove('animate-bounce');
    }, 600);
  }, [createPawTrail, createSparkles, createConfetti]);

  const favorites = [
    {
      id: 1,
      name: "Golden Retriever Blend",
      description: "Espresso with steamed milk and vanilla, topped with golden caramel swirls",
      price: "₹225",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      tag: "Golden's Choice",
      tagColor: "bg-golden-fur",
      iconColor: "text-golden-fur"
    },
    {
      id: 2,
      name: "Pug's Espresso Delight",
      description: "Rich, bold double shot espresso - small but mighty, just like our pugs!",
      price: "₹160",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      tag: "Pup's Pick",
      tagColor: "bg-coffee-brown text-cream-latte",
      iconColor: "text-coffee-brown"
    },
    {
      id: 3,
      name: "Beagle's Matcha Magic",
      description: "Premium matcha powder with steamed oat milk - energetic and wholesome",
      price: "₹320",
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      tag: "Pup Special",
      tagColor: "bg-playful-teal text-cream-latte",
      iconColor: "text-playful-teal"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Coffee & Dog Enthusiast ✨",
      quote: "This place feels like stepping into a coffee wonderland! The pups make every visit special, and they even have amazing pet toys and treats!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      icon: <Dog className="text-golden-fur" size={32} />
    },
    {
      name: "Rahul K.",
      role: "Pet Parent & Regular Visitor ⭐",
      quote: "Perfect place to bring my furry friend! Great coffee for me, delicious pet food for my dog, and toys to keep him entertained. Charlie loves it here!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      icon: <Heart className="text-playful-teal" size={32} />
    },
    {
      name: "Priya S.",
      role: "Business Professional 💼",
      quote: "Amazing pet-friendly environment! I can work here with my laptop while my dog enjoys their special treats and toys. The staff is so welcoming to pets!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      icon: <Star className="text-puppy-pink" size={32} />
    }
  ];

  return (
    <div className="min-h-screen" onMouseMove={handleMouseMove}>
      {/* Floating cursor effect */}
      <div 
        className="fixed pointer-events-none z-50 w-8 h-8 bg-gradient-to-r from-bright-puppy-pink to-golden-fur rounded-full opacity-50 blur-sm transition-all duration-300"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `scale(${1 + Math.sin(Date.now() * 0.01) * 0.2})`
        }}
      />

      {/* Paw Trails */}
      {pawTrails.map(paw => (
        <div
          key={paw.id}
          className="fixed pointer-events-none z-40 animate-paw-print"
          style={{
            left: paw.x - 16,
            top: paw.y - 16,
          }}
        >
          <Dog className="text-bright-puppy-pink w-8 h-8" />
        </div>
      ))}

      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none z-40 animate-ping"
          style={{
            left: sparkle.x - 8,
            top: sparkle.y - 8,
          }}
        >
          <Sparkles className="text-golden-fur w-4 h-4" />
        </div>
      ))}

      {/* Confetti */}
      {confetti.map(conf => (
        <div
          key={conf.id}
          className="fixed pointer-events-none z-40 animate-bounce"
          style={{
            left: conf.x - 4,
            top: conf.y - 4,
            backgroundColor: conf.color,
            width: '8px',
            height: '8px',
            borderRadius: '50%'
          }}
        />
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
                <div className="text-center px-4 bg-black/30 rounded-3xl backdrop-blur-sm p-12 border border-white/20 transform hover:scale-105 transition-all duration-500">
                  <h1 className="font-baloo text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
                    <span className="inline-block hover:animate-wiggle transition-all duration-300 cursor-pointer text-white hover:text-bright-puppy-pink" onClick={handleInteractiveClick}>Coffee.</span>{" "}
                    <span className="inline-block hover:animate-wiggle transition-all duration-300 cursor-pointer text-white hover:text-golden-fur" onClick={handleInteractiveClick}>Craft.</span><br />
                    <span className="text-yellow-400 hover:animate-wiggle inline-block transition-all duration-300 cursor-pointer hover:scale-110 drop-shadow-2xl" onClick={handleInteractiveClick}>Conversations</span><br />
                    <span className="text-pink-400 font-pacifico text-4xl lg:text-5xl hover:animate-bounce inline-block transition-all duration-300 cursor-pointer hover:scale-110 drop-shadow-2xl" onClick={handleInteractiveClick}>& Cuddles</span>
                  </h1>
                  
                  <p className="text-xl mb-8 text-white drop-shadow-lg font-medium animate-slideInUp">
                    Where every cup tells a story and every pup finds a friend.<br />
                    Pet-friendly space with toys, treats, and endless tail wags.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      asChild
                      className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition-all transform hover:scale-110 hover-glow paw-cursor shadow-2xl hover:shadow-pink-500/50"
                      onClick={handleInteractiveClick}
                    >
                      <Link href="/order-landing">
                        <ShoppingCart className="mr-2" size={20} />
                        Order Now
                      </Link>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      className="border-2 border-yellow-400 text-yellow-400 bg-black/20 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-110 hover-bounce paw-cursor shadow-2xl hover:shadow-yellow-400/50"
                      onClick={handleInteractiveClick}
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-bright-puppy-pink bg-opacity-80 text-coffee-brown p-3 rounded-full hover:bg-opacity-100 transition-all hover:scale-125 hover:rotate-12 z-20 group shadow-lg hover:shadow-bright-puppy-pink/50"
          >
            <ChevronLeft size={24} className="group-hover:animate-bounce" />
          </button>
          
          <button
            onClick={(e) => {
              handleInteractiveClick(e);
              nextSlide();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-bright-puppy-pink bg-opacity-80 text-coffee-brown p-3 rounded-full hover:bg-opacity-100 transition-all hover:scale-125 hover:-rotate-12 z-20 group shadow-lg hover:shadow-bright-puppy-pink/50"
          >
            <ChevronRight size={24} className="group-hover:animate-bounce" />
          </button>
          
          {/* Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  handleInteractiveClick(e);
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-all hover:scale-150 ${
                  index === currentSlide
                    ? 'bg-bright-puppy-pink shadow-lg'
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
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4 hover-wiggle animate-slideInLeft">
              Our <span className="text-bright-puppy-pink hover:animate-pulse cursor-pointer" onClick={handleInteractiveClick}>Pup-ular</span> Favorites
            </h2>
            <p className="text-xl text-coffee-brown opacity-80 font-pacifico hover-bounce animate-slideInRight">
              Handcrafted with premium ingredients and a dash of puppy love
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((item, index) => (
              <Card 
                key={item.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-rotate-1 hover-glow paw-cursor group cursor-pointer relative overflow-hidden"
                onClick={handleInteractiveClick}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-bright-puppy-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="relative">
                    <span className={`${item.tagColor} px-3 py-1 rounded-full text-sm font-semibold group-hover:animate-pulse`}>
                      <Dog className="inline mr-1" size={14} />
                      {item.tag}
                    </span>
                    
                    <h3 className="font-baloo text-2xl font-bold text-coffee-brown mt-4 mb-2 group-hover:text-bright-puppy-pink transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-coffee-brown opacity-70 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-caramel hover-wiggle group-hover:scale-110 transition-transform">{item.price}</span>
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
              className="bg-warm-golden text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-110 hover-glow paw-cursor shadow-lg hover:shadow-warm-golden/50"
              onClick={handleInteractiveClick}
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
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Beautiful coffee art with heart-shaped latte art"
                className="rounded-3xl shadow-xl w-full group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Coffee beans arranged in artistic patterns"
                  className="rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                  onClick={handleInteractiveClick}
                />
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Warm, inviting cafe interior with comfortable seating"
                  className="rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                  onClick={handleInteractiveClick}
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-puppy-pink p-3 rounded-full mr-4 animate-pulse">
                  <Heart className="text-cream-latte" size={24} />
                </div>
                <span className="font-pacifico text-xl text-puppy-pink">Our Story</span>
              </div>
              
              <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-6 hover-wiggle">
                Where Tradition Meets <span className="text-warm-golden hover-bounce inline-block cursor-pointer" onClick={handleInteractiveClick}>Tail Wags</span>
              </h2>
              
              <p className="text-lg text-coffee-brown opacity-80 mb-6 leading-relaxed">
                As a cozy café in the heart of Mumbai, we are a quiet spot for you amidst the city's turmoil. 
                Now with our furry friends joining the family, we've created an even more special place where 
                coffee lovers and dog lovers unite in a pet-friendly paradise.
              </p>
              
              <p className="text-lg text-coffee-brown opacity-80 mb-6 leading-relaxed">
                "Iteeha" roughly translates to <em>'as per tradition'</em>, and keeping that in mind, we adopted 
                the virtue of doing <strong>'Basic but Beautiful'</strong> - now with an extra dose of puppy love. 
                We offer premium pet foods, engaging toys, and a welcoming space for all furry friends.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="text-center p-4 bg-cream-latte hover:bg-playful-teal hover:text-cream-latte transition-all duration-300 cursor-pointer group" onClick={handleInteractiveClick}>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-coffee-brown group-hover:text-cream-latte group-hover:animate-bounce">12+</div>
                    <div className="text-coffee-brown opacity-70 group-hover:text-cream-latte">Resident Pups</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-cream-latte hover:bg-golden-fur hover:text-coffee-brown transition-all duration-300 cursor-pointer group" onClick={handleInteractiveClick}>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-coffee-brown group-hover:animate-bounce">3</div>
                    <div className="text-coffee-brown opacity-70">Mumbai Locations</div>
                  </CardContent>
                </Card>
              </div>
              
              <Button 
                asChild
                className="bg-bright-puppy-pink text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-110 hover-glow paw-cursor shadow-lg hover:shadow-bright-puppy-pink/50"
                onClick={handleInteractiveClick}
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

      {/* Pet-Friendly Services Section */}
      <section className="py-20 bg-gradient-to-br from-puppy-pink via-cream-latte to-golden-fur">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-6 hover-wiggle animate-slideInUp">
              Pet Paradise, <span className="font-pacifico text-bright-puppy-pink hover-bounce inline-block cursor-pointer" onClick={handleInteractiveClick}>Every Day</span>
            </h2>
            
            <p className="text-xl text-coffee-brown opacity-80 mb-12 leading-relaxed animate-slideInDown">
              We provide everything your furry friend needs! Premium pet foods, engaging toys, 
              and a completely pet-friendly environment where tails wag and hearts are happy.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:rotate-2 cursor-pointer group" onClick={handleInteractiveClick}>
                <CardContent className="p-6 text-center">
                  <div className="bg-golden-fur p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:animate-spin">
                    <Gamepad2 className="text-coffee-brown" size={24} />
                  </div>
                  <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2 group-hover:text-bright-puppy-pink transition-colors">Premium Pet Toys</h3>
                  <p className="text-coffee-brown opacity-70">Engaging toys to keep your furry friends entertained</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:-rotate-2 cursor-pointer group" onClick={handleInteractiveClick}>
                <CardContent className="p-6 text-center">
                  <div className="bg-playful-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:animate-bounce">
                    <Coffee className="text-cream-latte" size={24} />
                  </div>
                  <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2 group-hover:text-playful-teal transition-colors">Nutritious Pet Food</h3>
                  <p className="text-coffee-brown opacity-70">High-quality food and treats for happy, healthy pets</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:rotate-2 cursor-pointer group" onClick={handleInteractiveClick}>
                <CardContent className="p-6 text-center">
                  <div className="bg-puppy-pink p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:animate-pulse">
                    <Heart className="text-cream-latte" size={24} />
                  </div>
                  <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2 group-hover:text-puppy-pink transition-colors">Pet-Friendly Environment</h3>
                  <p className="text-coffee-brown opacity-70">Welcoming space where pets feel at home</p>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              className="bg-warm-golden text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-110 hover-glow paw-cursor shadow-lg hover:shadow-warm-golden/50 animate-pulse"
              onClick={handleInteractiveClick}
            >
              <Music className="mr-2" size={20} />
              Visit Our Pet Paradise!
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
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4 hover-wiggle animate-slideInUp">
              Coffee Stories & <span className="font-pacifico text-bright-puppy-pink hover-bounce inline-block cursor-pointer" onClick={handleInteractiveClick}>Pup Tales</span>
            </h2>
            <p className="text-xl text-coffee-brown opacity-80 animate-slideInDown">
              What our coffee lovers and pet parents say about their magical experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-cream-latte p-8 shadow-lg text-center hover:shadow-xl transition-all transform hover:scale-105 hover:rotate-1 cursor-pointer group relative overflow-hidden"
                onClick={handleInteractiveClick}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-bright-puppy-pink/10 via-transparent to-golden-fur/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12 border-2 border-bright-puppy-pink"
                    />
                  </div>
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {testimonial.icon}
                  </div>
                  <p className="text-coffee-brown opacity-80 mb-4 italic group-hover:text-coffee-brown transition-opacity">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-coffee-brown font-semibold group-hover:text-bright-puppy-pink transition-colors">{testimonial.name}</div>
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
      <section className="py-20 bg-coffee-brown text-cream-latte relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bright-puppy-pink/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-baloo text-4xl lg:text-5xl font-bold mb-4 hover-wiggle">
            Come Sip & <span className="font-pacifico text-warm-golden hover-bounce inline-block cursor-pointer" onClick={handleInteractiveClick}>Snuggle</span> With Us
          </h2>
          <p className="text-xl opacity-90 mb-8">
            We're brewing daily from 7:30 AM to 11:30 PM. Find us in the heart of Mumbai with our furry friends and pet paradise!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-bright-puppy-pink text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-110 hover-glow paw-cursor shadow-lg hover:shadow-bright-puppy-pink/50"
              onClick={handleInteractiveClick}
            >
              <Link href="/contact">
                <Dog className="mr-2" size={20} />
                Visit Us
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-2 border-warm-golden text-warm-golden bg-transparent px-8 py-4 rounded-full font-semibold hover:bg-warm-golden hover:text-coffee-brown transition-all transform hover:scale-110 hover-bounce paw-cursor shadow-lg hover:shadow-warm-golden/50"
              onClick={handleInteractiveClick}
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
