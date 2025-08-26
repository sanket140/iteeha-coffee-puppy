import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Heart, Dog, Coffee, Star, Instagram, Sparkles, Droplets, CloudRain, Leaf } from "lucide-react";

export default function About() {
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
      title: "Simplicity",
      description: "'Basic but Beautiful' - we believe in elegant simplicity that speaks to the heart.",
      icon: <Heart className="text-puppy-pink" size={32} />
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coffee-brown to-caramel text-cream-latte">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-8 text-4xl">
            <Sparkles className="text-golden-fur animate-pulse" size={48} />
            <Leaf className="text-playful-teal" size={48} />
            <Droplets className="text-puppy-pink animate-bounce" size={48} />
            <CloudRain className="text-cream-latte opacity-70" size={48} />
          </div>
          
          <h1 className="font-baloo text-5xl lg:text-6xl font-bold mb-6" data-testid="text-about-title">
            Our Story
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto" data-testid="text-about-subtitle">
            Where tradition meets innovation in every carefully crafted cup ✨
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://iteeha.coffee/images/aboutiteeha.png" 
                alt="About Iteeha Coffee"
                className="rounded-3xl shadow-xl w-full"
                data-testid="img-about-main"
              />
            </div>
            
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-playful-teal p-3 rounded-full mr-4">
                  <Coffee className="text-cream-latte" size={24} />
                </div>
                <h2 className="font-baloo text-3xl lg:text-4xl font-bold text-coffee-brown" data-testid="text-who-we-are-title">
                  Who We Are ☕
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-coffee-brown opacity-80 leading-relaxed">
                <p data-testid="text-story-p1">
                  As a cozy café in the heart of Mumbai, we are a quiet spot for you amidst the city's turmoil. With our thoughtfully curated range of coffees, bakes, artisanal teas, freshly cold-pressed juices and premium sandwiches, Iteeha Coffee is your space to unwind.
                </p>
                
                <p data-testid="text-story-p2">
                  The fact that we are an articulation of Iteeha Corporation, an art studio where creativity and traditions are celebrated, shows in our minimal and elegant ambience.
                </p>
                
                <p data-testid="text-story-p3">
                  <strong>"Iteeha"</strong> roughly translates to <em>'as per tradition'</em>, and keeping that in mind, we adopted the virtue of doing <strong>'Basic but Beautiful'</strong>. We offer light and simple products, but beautifully done. ✨
                </p>
                
                <p data-testid="text-story-p4">
                  We understand the importance of a well-made cup of coffee, and hence focus immensely on sourcing just the right beans, training our staff continually, and equipping our cafes with the best machines.
                </p>
                
                <p data-testid="text-story-p5">
                  Tie that in with our warm service and you've got yourself an experience that will keep you coming back for more. Iteeha Coffee is a sanctuary for all those that are seeking a comforting cuppa and a moment to pause and reflect.
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
              className="rounded-3xl shadow-xl max-w-4xl w-full mb-8"
              data-testid="img-story-detail"
            />
            <div className="flex space-x-4 text-4xl">
              <Coffee className="text-coffee-brown animate-bounce-gentle" size={32} />
              <Heart className="text-puppy-pink animate-pulse" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="bg-golden-fur p-3 rounded-full">
                <Star className="text-coffee-brown" size={32} />
              </div>
            </div>
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4" data-testid="text-values-title">
              Our Values 🌟
            </h2>
            <p className="text-xl text-coffee-brown opacity-80" data-testid="text-values-subtitle">
              The principles that guide us in creating exceptional coffee experiences ✨
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-cream-latte p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-baloo text-2xl font-bold text-coffee-brown mb-4" data-testid={`title-value-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-coffee-brown opacity-80 leading-relaxed" data-testid={`description-value-${index}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Our Journey */}
      <section className="py-20 bg-gradient-to-br from-puppy-pink via-cream-latte to-golden-fur">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-6" data-testid="text-follow-title">
              Follow Our Journey
            </h2>
            <p className="text-xl text-coffee-brown opacity-80 mb-8" data-testid="text-follow-subtitle">
              Stay connected with us and be part of our coffee community
            </p>
            
            <Button 
              asChild
              className="bg-coffee-brown text-cream-latte px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor"
              data-testid="button-follow-instagram"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-puppy-pink p-3 rounded-full mr-4">
                  <Dog className="text-cream-latte" size={24} />
                </div>
                <h2 className="font-baloo text-3xl lg:text-4xl font-bold text-coffee-brown" data-testid="text-puppy-story-title">
                  Our Furry Family 🐕
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-coffee-brown opacity-80 leading-relaxed">
                <p data-testid="text-puppy-story-p1">
                  In our journey to create the perfect sanctuary for coffee lovers, we discovered something magical happens when you add furry friends to the mix. Our resident pups have transformed Iteeha into more than just a coffee shop - it's now a place where hearts connect.
                </p>
                
                <p data-testid="text-puppy-story-p2">
                  Each of our 12+ rescue dogs has their own personality and story. From Charlie the golden retriever who greets everyone at the door, to Luna the gentle beagle who loves to nap by the window - they've all found their forever home with us.
                </p>
                
                <p data-testid="text-puppy-story-p3">
                  We believe that the warmth of a furry friend and the comfort of a perfect cup of coffee create an unmatched experience. Our pups are therapy for the soul, bringing smiles to faces and adding that extra dash of love to every visit.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card className="text-center p-4 bg-cream-latte">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-coffee-brown" data-testid="text-adoption-count">50+</div>
                    <div className="text-coffee-brown opacity-70" data-testid="text-adoption-label">Successful Adoptions</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-cream-latte">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-coffee-brown" data-testid="text-events-count">24</div>
                    <div className="text-coffee-brown opacity-70" data-testid="text-events-label">Monthly Events</div>
                  </CardContent>
                </Card>
              </div>
              
              <Button 
                asChild
                className="bg-playful-teal text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor mt-8"
                data-testid="button-meet-pups"
              >
                <Link href="/contact">
                  <Dog className="mr-2" size={20} />
                  Meet Our Pups
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Cozy cafe with friendly dogs and customers"
                className="rounded-3xl shadow-xl w-full"
                data-testid="img-pups-story"
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
      </section>

      {/* Paw Print Separator */}
      <div className="paw-separator my-8"></div>

      {/* Final CTA */}
      <section className="py-20 bg-coffee-brown text-cream-latte">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-baloo text-4xl lg:text-5xl font-bold mb-6" data-testid="text-cta-title">
            Experience the <span className="font-pacifico text-golden-fur">Magic</span>
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto" data-testid="text-cta-subtitle">
            Come discover what makes Iteeha Coffee & Pups special. Every visit is a new story waiting to unfold.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-playful-teal text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor"
              data-testid="button-visit-us-cta"
            >
              <Link href="/contact">
                <Dog className="mr-2" size={20} />
                Visit Us Today
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-2 border-cream-latte text-cream-latte bg-transparent px-8 py-4 rounded-full font-semibold hover:bg-cream-latte hover:text-coffee-brown transition-all transform hover:scale-105 paw-cursor"
              data-testid="button-see-menu-cta"
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
