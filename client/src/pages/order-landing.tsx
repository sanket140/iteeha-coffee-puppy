import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Coffee, MapPin, Truck, ShoppingCart, Clock, Utensils, Target } from "lucide-react";

export default function OrderLanding() {
  const steps = [
    {
      step: 1,
      title: "Set your location",
      description: "Tell us where you want to get your items delivered with precision",
      icon: <MapPin size={40} />,
      image: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=80&h=80&fit=crop&crop=center"
    },
    {
      step: 2,
      title: "Choose your items",
      description: "Browse our curated menu and add your favorite treats to cart",
      icon: <Coffee size={40} />,
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=80&h=80&fit=crop&crop=center"
    },
    {
      step: 3,
      title: "Enjoy fresh delivery",
      description: "Sit back and relax while we deliver hot, fresh items to your doorstep",
      icon: <Truck size={40} />,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=80&h=80&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coffee-brown to-caramel text-cream-latte">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=120&h=120&fit=crop&crop=center" 
                  alt="Coffee cup" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-golden-fur"
                  data-testid="img-hero-coffee"
                />
              </div>

              <h1 className="font-baloo text-5xl lg:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Let's get ordering
              </h1>

              <p className="text-xl opacity-90 mb-8" data-testid="text-hero-subtitle">
                Craving something delicious? Let us bring the finest coffee and treats right to your doorstep.
              </p>

              <div className="flex gap-4 justify-center lg:justify-start mb-8">
                <Badge className="bg-playful-teal text-coffee-brown px-4 py-2 text-lg" data-testid="badge-delivery">
                  Delivery
                </Badge>
                <Badge variant="outline" className="border-cream-latte text-cream-latte px-4 py-2 text-lg" data-testid="badge-pickup">
                  Pickup
                </Badge>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://iteeha.coffee/images/vfx.png" 
                alt="Iteeha Coffee"
                className="rounded-3xl shadow-2xl w-full animate-bounce-gentle"
                data-testid="img-hero-iteeha"
              />

              <div className="absolute -bottom-6 -right-6 bg-golden-fur p-4 rounded-full shadow-lg animate-wag">
                <Coffee className="text-coffee-brown" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Input */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-baloo text-4xl font-bold text-coffee-brown mb-4" data-testid="text-location-title">
              Where would you like your order?
            </h2>
            <p className="text-xl text-coffee-brown opacity-80 mb-8" data-testid="text-location-subtitle">
              We'll deliver fresh and hot to your location
            </p>

            <Card className="bg-cream-latte p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="space-y-6">
                  <Button className="w-full bg-playful-teal text-coffee-brown py-4 text-lg font-semibold hover:bg-opacity-90 paw-cursor" data-testid="button-current-location">
                    <Target className="mr-2" size={20} />
                    Use my current location
                  </Button>

                  <div className="text-coffee-brown opacity-60 font-semibold">
                    or enter manually
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 text-coffee-brown opacity-60" size={20} />
                    <Input 
                      placeholder="Enter your delivery address"
                      className="pl-12 py-4 text-lg bg-white border-2 border-cream-latte focus:border-golden-fur"
                      data-testid="input-address"
                    />
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-coffee-brown text-cream-latte py-4 text-lg font-semibold hover:bg-opacity-90 paw-cursor"
                    data-testid="button-confirm-location"
                  >
                    <Link href="/order">
                      <ShoppingCart className="mr-2" size={20} />
                      Confirm Location & Browse Menu
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-cream-latte">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4" data-testid="text-how-it-works-title">
              How it works
            </h2>
            <p className="text-xl text-coffee-brown opacity-80" data-testid="text-how-it-works-subtitle">
              Simple steps to satisfy your cravings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-20 h-20 rounded-full object-cover border-4 border-golden-fur"
                        data-testid={`img-step-${index}`}
                      />
                      <div className="absolute -top-2 -right-2 bg-coffee-brown text-cream-latte w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                  </div>

                  <div className="text-4xl mb-4 text-playful-teal" data-testid={`icon-step-${index}`}>
                    {step.icon}
                  </div>

                  <h3 className="font-baloo text-2xl font-bold text-coffee-brown mb-4" data-testid={`title-step-${index}`}>
                    {step.title}
                  </h3>

                  <p className="text-coffee-brown opacity-80" data-testid={`description-step-${index}`}>
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4" data-testid="text-preview-title">
              What's waiting for you
            </h2>
            <p className="text-xl text-coffee-brown opacity-80" data-testid="text-preview-subtitle">
              A taste of our delicious offerings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-cream-latte p-6 text-center shadow-lg hover:shadow-xl transition-shadow paw-cursor group">
              <CardContent className="p-0">
                <div className="bg-golden-fur p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:animate-wag">
                  <Coffee className="text-coffee-brown" size={24} />
                </div>
                <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2" data-testid="text-preview-coffee-title">
                  Premium Coffee
                </h3>
                <p className="text-coffee-brown opacity-70 text-sm" data-testid="text-preview-coffee-desc">
                  Freshly roasted beans brewed to perfection
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream-latte p-6 text-center shadow-lg hover:shadow-xl transition-shadow paw-cursor group">
              <CardContent className="p-0">
                <div className="bg-playful-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:animate-bounce-gentle">
                  <Utensils className="text-cream-latte" size={24} />
                </div>
                <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2" data-testid="text-preview-food-title">
                  Fresh Food
                </h3>
                <p className="text-coffee-brown opacity-70 text-sm" data-testid="text-preview-food-desc">
                  Sandwiches, bakes & treats made daily
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream-latte p-6 text-center shadow-lg hover:shadow-xl transition-shadow paw-cursor group">
              <CardContent className="p-0">
                <div className="bg-puppy-pink p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="text-cream-latte" size={24} />
                </div>
                <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2" data-testid="text-preview-delivery-title">
                  Fast Delivery
                </h3>
                <p className="text-coffee-brown opacity-70 text-sm" data-testid="text-preview-delivery-desc">
                  Hot & fresh to your doorstep
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream-latte p-6 text-center shadow-lg hover:shadow-xl transition-shadow paw-cursor group">
              <CardContent className="p-0">
                <div className="bg-caramel p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="text-cream-latte" size={24} />
                </div>
                <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2" data-testid="text-preview-quality-title">
                  Quality First
                </h3>
                <p className="text-coffee-brown opacity-70 text-sm" data-testid="text-preview-quality-desc">
                  Basic but beautiful, every time
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Paw Print Separator */}
      <div className="paw-separator my-8"></div>

      {/* Final CTA */}
      <section className="py-20 bg-coffee-brown text-cream-latte">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-baloo text-4xl lg:text-5xl font-bold mb-6" data-testid="text-final-cta-title">
            Ready to <span className="font-pacifico text-golden-fur">satisfy your cravings</span>?
          </h2>
          <p className="text-xl opacity-90 mb-8" data-testid="text-final-cta-subtitle">
            Fresh coffee, delicious food, and puppy love delivered to your door
          </p>

          <Button 
            asChild
            className="bg-playful-teal text-coffee-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 paw-cursor text-lg"
            data-testid="button-start-ordering"
          >
            <Link href="/order">
              <ShoppingCart className="mr-2" size={24} />
              Start Ordering Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}