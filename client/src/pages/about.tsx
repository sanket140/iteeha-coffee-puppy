
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Heart, Dog, Coffee, Star, Instagram, Sparkles, Droplets, CloudRain, Leaf, Gamepad2, Music, Zap, PawPrint } from "lucide-react";
import { useState, useCallback } from "react";

export default function About() {
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [pawPrints, setPawPrints] = useState<Array<{id: number, x: number, y: number}>>([]);

  const createSparkles = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newSparkle = {
      id: Date.now() + Math.random(),
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
    setSparkles(prev => [...prev, newSparkle]);
    
    setTimeout(() => {
      setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
    }, 1500);
  }, []);

  const createPawPrint = useCallback((e: React.MouseEvent) => {
    const newPaw = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY
    };
    setPawPrints(prev => [...prev, newPaw]);
    
    setTimeout(() => {
      setPawPrints(prev => prev.filter(paw => paw.id !== newPaw.id));
    }, 2000);
  }, []);

  const handleInteractiveClick = useCallback((e: React.MouseEvent) => {
    createSparkles(e);
    createPawPrint(e);
    e.currentTarget.classList.add('animate-bounce');
    setTimeout(() => {
      e.currentTarget.classList.remove('animate-bounce');
    }, 600);
  }, [createSparkles, createPawPrint]);

  const values = [
    {
      title: "Tradition",
      description: "'As per tradition' - we honor time-tested methods while embracing innovation in our craft.",
      icon: <Coffee className="text-golden-fur" size={32} />
    },
    {
      title: "Quality",
      description: "From sourcing the finest beans to training our staff - excellence in every detail.",
      icon: <Star className="text-playful-teal" size={32} />
    },
    {
      title: "Pet-Friendly",
      description: "'Paws Welcome' - we believe every furry friend deserves love, treats, and a warm welcome.",
      icon: <Heart className="text-puppy-pink" size={32} />
    }
  ];

  const petServices = [
    {
      title: "Premium Pet Foods",
      description: "Nutritious meals and treats specially curated for your furry friends' health and happiness.",
      icon: <Dog className="text-golden-fur" size={32} />,
      color: "bg-golden-fur"
    },
    {
      title: "Interactive Pet Toys",
      description: "Engaging toys and games to keep your pets entertained while you enjoy your coffee.",
      icon: <Gamepad2 className="text-playful-teal" size={32} />,
      color: "bg-playful-teal"
    },
    {
      title: "Pet-Friendly Space",
      description: "Dedicated areas where pets can roam freely, socialize, and feel completely at home.",
      icon: <PawPrint className="text-puppy-pink" size={32} />,
      color: "bg-puppy-pink"
    }
  ];

  return (
    <div className="min-h-screen pt-8 relative">
      

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

      {/* Paw Prints */}
      {pawPrints.map(paw => (
        <div
          key={paw.id}
          className="fixed pointer-events-none z-40 animate-bounce"
          style={{
            left: paw.x - 16,
            top: paw.y - 16,
          }}
        >
          <PawPrint className="text-bright-puppy-pink w-8 h-8" />
        </div>
      ))}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coffee-brown to-caramel text-cream-latte relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bright-puppy-pink/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center space-x-4 mb-8 text-4xl">
            <Sparkles className="text-golden-fur animate-pulse hover:animate-spin cursor-pointer" size={48} onClick={handleInteractiveClick} />
            <Leaf className="text-playful-teal animate-spin-slow hover:animate-bounce cursor-pointer" size={48} onClick={handleInteractiveClick} />
            <Droplets className="text-puppy-pink animate-bounce hover:animate-pulse cursor-pointer" size={48} onClick={handleInteractiveClick} />
            <CloudRain className="text-cream-latte opacity-70 animate-drift hover:animate-wiggle cursor-pointer" size={48} onClick={handleInteractiveClick} />
          </div>

          <h1 className="font-baloo text-5xl lg:text-6xl font-bold mb-6 hover:text-bright-puppy-pink transition-colors cursor-pointer" data-testid="text-about-title" onClick={handleInteractiveClick}>
            Our Story
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto animate-slideInUp" data-testid="text-about-subtitle">
            Where tradition meets innovation in every carefully crafted cup and every wagging tail ✨
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img
                src="https://iteeha.coffee/images/aboutiteeha.png"
                alt="About Iteeha Coffee"
                className="rounded-3xl shadow-xl w-full transform transition-transform duration-500 hover:scale-105 cursor-pointer"
                data-testid="img-about-main"
                onClick={handleInteractiveClick}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-bright-puppy-pink/20 via-transparent to-golden-fur/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>

            <div>
              <div className="flex items-center mb-8">
                <div className="bg-playful-teal p-3 rounded-full mr-4 animate-pulse">
                  <Coffee className="text-cream-latte" size={24} />
                </div>
                <h2 className="font-baloo text-3xl lg:text-4xl font-bold text-coffee-brown hover:text-playful-teal transition-colors cursor-pointer" data-testid="text-who-we-are-title" onClick={handleInteractiveClick}>
                  Who We Are ☕
                </h2>
              </div>

              <div className="space-y-6 text-lg text-coffee-brown opacity-80 leading-relaxed">
                <p data-testid="text-story-p1" className="hover:opacity-100 transition-opacity cursor-pointer" onClick={handleInteractiveClick}>
                  As a cozy café in the heart of Mumbai, we are a quiet spot for you amidst the city's turmoil. With our thoughtfully curated range of coffees, bakes, artisanal teas, freshly cold-pressed juices and premium sandwiches, Iteeha Coffee is your space to unwind - now with your furry friends!
                </p>

                <p data-testid="text-story-p2" className="hover:opacity-100 transition-opacity cursor-pointer" onClick={handleInteractiveClick}>
                  The fact that we are an articulation of Iteeha Corporation, an art studio where creativity and traditions are celebrated, shows in our minimal and elegant ambience - enhanced by the joyful presence of our pet community.
                </p>

                <p data-testid="text-story-p3" className="hover:opacity-100 transition-opacity cursor-pointer" onClick={handleInteractiveClick}>
                  <strong>"Iteeha"</strong> roughly translates to <em>'as per tradition'</em>, and keeping that in mind, we adopted the virtue of doing <strong>'Basic but Beautiful'</strong>. We offer light and simple products, but beautifully done - now with premium pet foods and toys for our four-legged guests. ✨
                </p>

                <p data-testid="text-story-p4" className="hover:opacity-100 transition-opacity cursor-pointer" onClick={handleInteractiveClick}>
                  We understand the importance of a well-made cup of coffee and a happy pet, hence we focus immensely on sourcing just the right beans, training our staff continually, and equipping our cafes with the best machines and pet-friendly amenities.
                </p>

                <p data-testid="text-story-p5" className="hover:opacity-100 transition-opacity cursor-pointer" onClick={handleInteractiveClick}>
                  Tie that in with our warm service and pet-welcoming atmosphere, and you've got yourself an experience that will keep both you and your furry friend coming back for more. Iteeha Coffee is a sanctuary for all those seeking a comforting cuppa and quality time with their pets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Image */}
      <section className="py-20 bg-cream-latte">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <img
              src="https://iteeha.coffee/images/aboutimg.png"
              alt="Iteeha Coffee Story"
              className="rounded-3xl shadow-xl max-w-4xl w-full mb-8 transform transition-transform duration-500 hover:scale-105 hover:rotate-2 cursor-pointer"
              data-testid="img-story-detail"
              onClick={handleInteractiveClick}
            />
            <div className="flex space-x-4 text-4xl">
              <Coffee className="text-coffee-brown animate-bounce-gentle cursor-pointer hover:animate-spin" size={32} onClick={handleInteractiveClick} />
              <Heart className="text-puppy-pink animate-pulse cursor-pointer hover:animate-bounce" size={32} onClick={handleInteractiveClick} />
              <Dog className="text-golden-fur animate-wag cursor-pointer hover:animate-pulse" size={32} onClick={handleInteractiveClick} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-golden-fur p-3 rounded-full animate-pulse cursor-pointer hover:animate-spin" onClick={handleInteractiveClick}>
                <Star className="text-coffee-brown" size={32} />
              </div>
            </div>
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4 hover:text-bright-puppy-pink transition-colors cursor-pointer" data-testid="text-values-title" onClick={handleInteractiveClick}>
              Our Values 🌟
            </h2>
            <p className="text-xl text-coffee-brown opacity-80 animate-slideInUp" data-testid="text-values-subtitle">
              The principles that guide us in creating exceptional coffee experiences and pet paradise ✨
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-cream-latte p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden" onClick={handleInteractiveClick}>
                <div className="absolute inset-0 bg-gradient-to-br from-bright-puppy-pink/10 via-transparent to-golden-fur/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex justify-center mb-6 group-hover:animate-bounce">
                    {value.icon}
                  </div>
                  <h3 className="font-baloo text-2xl font-bold text-coffee-brown mb-4 group-hover:text-bright-puppy-pink transition-colors" data-testid={`title-value-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-coffee-brown opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity" data-testid={`description-value-${index}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Services Section */}
      <section className="py-20 bg-gradient-to-br from-puppy-pink via-cream-latte to-golden-fur">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4 animate-slideInUp hover:text-bright-puppy-pink transition-colors cursor-pointer" onClick={handleInteractiveClick}>
              Pet Paradise Services 🐾
            </h2>
            <p className="text-xl text-coffee-brown opacity-80 animate-slideInDown">
              Everything your furry friends need for a pawsome experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {petServices.map((service, index) => (
              <Card key={index} className="bg-white p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-2 cursor-pointer group relative overflow-hidden" onClick={handleInteractiveClick}>
                <div className={`absolute inset-0 ${service.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex justify-center mb-6 group-hover:animate-bounce">
                    {service.icon}
                  </div>
                  <h3 className="font-baloo text-2xl font-bold text-coffee-brown mb-4 group-hover:text-bright-puppy-pink transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-coffee-brown opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Our Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-6 hover:text-playful-teal transition-colors cursor-pointer" data-testid="text-follow-title" onClick={handleInteractiveClick}>
              Follow Our Journey
            </h2>
            <p className="text-xl text-coffee-brown opacity-80 mb-8 animate-slideInUp" data-testid="text-follow-subtitle">
              Stay connected with us and be part of our coffee and pet-loving community
            </p>

            <Button
              asChild
              className="bg-coffee-brown text-cream-latte px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor shadow-lg hover:shadow-coffee-brown/50"
              data-testid="button-follow-instagram"
              onClick={handleInteractiveClick}
            >
              <a href="https://www.instagram.com/iteeha.coffee/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2" size={20} />
                Follow Us on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Puppy Addition Story */}
      <section className="py-20 bg-cream-latte">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-puppy-pink p-3 rounded-full mr-4 animate-pulse">
                  <Dog className="text-cream-latte" size={24} />
                </div>
                <h2 className="font-baloo text-3xl lg:text-4xl font-bold text-coffee-brown hover:text-puppy-pink transition-colors cursor-pointer" data-testid="text-puppy-story-title" onClick={handleInteractiveClick}>
                  Our Furry Family 🐕
                </h2>
              </div>

              <div className="space-y-6 text-lg text-coffee-brown opacity-80 leading-relaxed">
                <p data-testid="text-puppy-story-p1" className="hover:opacity-100 transition-opacity cursor-pointer" onClick={handleInteractiveClick}>
                  In our journey to create the perfect sanctuary for coffee lovers, we discovered something magical happens when you add furry friends to the mix. Our resident pups have transformed Iteeha into more than just a coffee shop - it's now a place where hearts and tails connect.
                </p>

                <p data-testid="text-puppy-story-p2" className="hover:opacity-100 transition-opacity cursor-pointer" onClick={handleInteractiveClick}>
                  Each of our 12+ resident dogs has their own personality and story. From Charlie the golden retriever who greets everyone at the door, to Luna the gentle beagle who loves to nap by the window - they've all found their forever home with us, creating a truly pet-friendly paradise.
                </p>

                <p data-testid="text-puppy-story-p3" className="hover:opacity-100 transition-opacity cursor-pointer" onClick={handleInteractiveClick}>
                  We believe that the warmth of a furry friend and the comfort of a perfect cup of coffee create an unmatched experience. Our comprehensive pet services - from premium foods to interactive toys - ensure every pet feels loved and cared for during their visit.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card className="text-center p-4 bg-white transform transition-all duration-300 hover:scale-105 hover:bg-playful-teal hover:text-cream-latte cursor-pointer group" onClick={handleInteractiveClick}>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-coffee-brown group-hover:text-cream-latte group-hover:animate-bounce" data-testid="text-toys-count">100+</div>
                    <div className="text-coffee-brown opacity-70 group-hover:text-cream-latte" data-testid="text-toys-label">Pet Toys Available</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-white transform transition-all duration-300 hover:scale-105 hover:bg-golden-fur hover:text-coffee-brown cursor-pointer group" onClick={handleInteractiveClick}>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-coffee-brown group-hover:animate-bounce" data-testid="text-food-varieties-count">20+</div>
                    <div className="text-coffee-brown opacity-70" data-testid="text-food-varieties-label">Pet Food Varieties</div>
                  </CardContent>
                </Card>
              </div>

              <Button
                asChild
                className="bg-playful-teal text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor mt-8 shadow-lg hover:shadow-playful-teal/50"
                data-testid="button-meet-pups"
                onClick={handleInteractiveClick}
              >
                <Link href="/contact">
                  <Dog className="mr-2" size={20} />
                  Visit Our Pet Paradise
                </Link>
              </Button>
            </div>

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Cozy cafe with friendly dogs and customers"
                className="rounded-3xl shadow-xl w-full group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                data-testid="img-pups-story"
                onClick={handleInteractiveClick}
              />

              <div className="absolute -bottom-6 -right-6 bg-golden-fur p-4 rounded-full shadow-lg animate-wag cursor-pointer hover:animate-spin" onClick={handleInteractiveClick}>
                <Dog className="text-coffee-brown" size={32} />
              </div>

              <div className="absolute -top-6 -left-6 bg-puppy-pink p-4 rounded-full shadow-lg animate-beat cursor-pointer hover:animate-bounce" onClick={handleInteractiveClick}>
                <Heart className="text-cream-latte animate-pulse" size={24} />
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-playful-teal p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer" onClick={handleInteractiveClick}>
                <Gamepad2 className="text-cream-latte animate-bounce" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paw Print Separator */}
      <div className="paw-separator my-8 flex justify-center items-center">
        <Dog className="text-coffee-brown opacity-50 animate-wag cursor-pointer hover:animate-spin hover:text-bright-puppy-pink" size={48} onClick={handleInteractiveClick} />
      </div>

      {/* Final CTA */}
      <section className="py-20 bg-coffee-brown text-cream-latte relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bright-puppy-pink/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-baloo text-4xl lg:text-5xl font-bold mb-6 hover:text-golden-fur transition-colors cursor-pointer" data-testid="text-cta-title" onClick={handleInteractiveClick}>
            Experience the <span className="font-pacifico text-golden-fur transform hover:scale-110 transition-transform duration-300 cursor-pointer" onClick={handleInteractiveClick}>Magic</span>
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto animate-slideInUp" data-testid="text-cta-subtitle">
            Come discover what makes Iteeha Coffee & Pet Paradise special. Every visit is a new story waiting to unfold.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-playful-teal text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor shadow-lg hover:shadow-playful-teal/50"
              data-testid="button-visit-us-cta"
              onClick={handleInteractiveClick}
            >
              <Link href="/contact">
                <Dog className="mr-2" size={20} />
                Visit Us Today
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-cream-latte text-cream-latte bg-transparent px-8 py-4 rounded-full font-semibold hover:bg-cream-latte hover:text-coffee-brown transition-all transform hover:scale-105 paw-cursor shadow-lg hover:shadow-cream-latte/50"
              data-testid="button-see-menu-cta"
              onClick={handleInteractiveClick}
            >
              <Link href="/menu">
                <Coffee className="mr-2" size={20} />
                See Our Menu
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
