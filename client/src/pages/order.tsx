import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, ShoppingCart, Plus, Minus, Coffee, Leaf, Heart, Dog } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

export default function Order() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [deliveryLocation, setDeliveryLocation] = useState("Mahalaxmi Temple, 26/A, Mahalaxmi West, Central West");

  const matchaSpecials = [
    {
      id: "classic-matcha",
      name: "Classic Hot Matcha Latte",
      description: "A Smooth Blend Of Matcha And Steamed Milk",
      price: 320,
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=200&fit=crop"
    },
    {
      id: "ginger-matcha",
      name: "Spiced Ginger Matcha Latte",
      description: "Matcha And Steamed Milk With House Made Ginger Syrup",
      price: 340,
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=300&h=200&fit=crop"
    },
    {
      id: "blueberry-matcha",
      name: "Blueberry Matcha Latte",
      description: "Matcha And Milk With Blueberry Compote",
      price: 380,
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=200&fit=crop"
    },
    {
      id: "iced-matcha",
      name: "Signature Iced Matcha",
      description: "Classic Matcha And Milk Over Ice",
      price: 350,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop"
    },
    {
      id: "golden-matcha",
      name: "Golden Glow Matcha Latte",
      description: "Matcha with turmeric and steamed milk",
      price: 370,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop"
    },
    {
      id: "vanilla-matcha",
      name: "Vanilla Matcha Latte",
      description: "Matcha with vanilla syrup and steamed milk",
      price: 360,
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=200&fit=crop"
    }
  ];

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: string, change: number) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity <= 0 ? null : { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-coffee-brown to-caramel text-cream-latte">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="https://iteeha.coffee/images/vfx.png" 
              alt="Iteeha Coffee"
              className="h-16 w-auto"
              data-testid="img-logo"
            />
          </div>
          
          <h1 className="font-baloo text-4xl lg:text-5xl font-bold text-center mb-4" data-testid="text-order-title">
            Iteeha Coffee
          </h1>
          
          <div className="text-center space-y-2">
            <p className="text-lg" data-testid="text-location-info">Iteeha Coffee • Mahalaxmi</p>
            <Badge className="bg-playful-teal text-coffee-brown" data-testid="badge-veg-only">
              Veg only
            </Badge>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-playful-teal p-2 rounded-full">
                <MapPin className="text-cream-latte" size={20} />
              </div>
              <div>
                <p className="font-semibold text-coffee-brown" data-testid="text-delivery-to">Delivery to:</p>
                <p className="text-sm text-coffee-brown opacity-80" data-testid="text-delivery-address">{deliveryLocation}</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="border-golden-fur text-golden-fur hover:bg-golden-fur hover:text-coffee-brown paw-cursor"
              data-testid="button-change-location"
            >
              Change
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="font-baloo text-3xl font-bold text-coffee-brown mb-2" data-testid="text-menu-title">
                Menu
              </h2>
            </div>

            {/* Matcha Specials */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-playful-teal p-3 rounded-full">
                  <Leaf className="text-cream-latte" size={24} />
                </div>
                <h3 className="font-baloo text-2xl font-bold text-coffee-brown" data-testid="text-matcha-specials-title">
                  Matcha Specials
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {matchaSpecials.map((item, index) => (
                  <Card key={item.id} className="bg-white shadow-lg hover:shadow-xl transition-all paw-cursor group">
                    <CardContent className="p-6">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-2xl mb-4"
                        data-testid={`img-matcha-${index}`}
                      />
                      
                      <div className="flex items-start justify-between mb-2">
                        <Badge className="bg-playful-teal text-cream-latte" data-testid={`badge-veg-${index}`}>
                          ● Veg
                        </Badge>
                        <span className="text-xl font-bold text-caramel" data-testid={`price-matcha-${index}`}>
                          ₹{item.price}
                        </span>
                      </div>
                      
                      <h4 className="font-baloo text-xl font-bold text-coffee-brown mb-2" data-testid={`title-matcha-${index}`}>
                        {item.name}
                      </h4>
                      <p className="text-coffee-brown opacity-70 mb-4 text-sm" data-testid={`description-matcha-${index}`}>
                        {item.description}
                      </p>
                      
                      <Button 
                        onClick={() => addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          description: item.description
                        })}
                        className="w-full bg-golden-fur text-coffee-brown hover:bg-opacity-90 font-semibold paw-cursor"
                        data-testid={`button-add-cart-${index}`}
                      >
                        ADD TO CART
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-cream-latte shadow-xl">
              <CardHeader className="bg-coffee-brown text-cream-latte rounded-t-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-baloo text-xl font-bold" data-testid="text-cart-title">
                    Your Order
                  </h3>
                  <div className="flex items-center space-x-2">
                    <ShoppingCart size={20} />
                    <span className="bg-golden-fur text-coffee-brown px-2 py-1 rounded-full text-sm font-bold" data-testid="text-cart-count">
                      {getTotalItems()}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <Coffee className="mx-auto text-coffee-brown opacity-50 mb-4" size={48} />
                    <p className="text-coffee-brown opacity-70" data-testid="text-empty-cart">
                      Your cart is empty. Add some delicious items!
                    </p>
                    <Dog className="mx-auto text-puppy-pink mt-4 animate-wag" size={32} />
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={item.id} className="flex items-center justify-between border-b border-cream-latte pb-3" data-testid={`cart-item-${index}`}>
                        <div className="flex-1">
                          <h4 className="font-semibold text-coffee-brown text-sm" data-testid={`cart-item-name-${index}`}>
                            {item.name}
                          </h4>
                          <p className="text-xs text-coffee-brown opacity-60" data-testid={`cart-item-price-${index}`}>
                            ₹{item.price} each
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 p-0 border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-cream-latte"
                            data-testid={`button-decrease-${index}`}
                          >
                            <Minus size={12} />
                          </Button>
                          
                          <span className="font-bold text-coffee-brown w-8 text-center" data-testid={`quantity-${index}`}>
                            {item.quantity}
                          </span>
                          
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 p-0 border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-cream-latte"
                            data-testid={`button-increase-${index}`}
                          >
                            <Plus size={12} />
                          </Button>
                        </div>
                        
                        <div className="text-right ml-3">
                          <span className="font-bold text-caramel" data-testid={`item-total-${index}`}>
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    <div className="border-t border-coffee-brown pt-4 mt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-baloo text-lg font-bold text-coffee-brown" data-testid="text-total-label">
                          Total
                        </span>
                        <span className="font-baloo text-xl font-bold text-caramel" data-testid="text-total-amount">
                          ₹{getTotalPrice()}
                        </span>
                      </div>
                      
                      <Button 
                        className="w-full bg-playful-teal text-coffee-brown py-3 font-semibold hover:bg-opacity-90 paw-cursor"
                        data-testid="button-proceed-checkout"
                      >
                        <Heart className="mr-2" size={16} />
                        Proceed to Checkout
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Paw Print Separator */}
      <div className="paw-separator my-8"></div>

      {/* Additional Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-cream-latte p-6 text-center shadow-lg">
              <CardContent className="p-6">
                <Coffee className="mx-auto text-coffee-brown mb-4" size={32} />
                <h3 className="font-baloo text-lg font-bold text-coffee-brown mb-2" data-testid="text-fresh-title">
                  Fresh & Hot
                </h3>
                <p className="text-coffee-brown opacity-80 text-sm" data-testid="text-fresh-description">
                  All items made fresh to order and delivered hot
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-cream-latte p-6 text-center shadow-lg">
              <CardContent className="p-6">
                <Dog className="mx-auto text-puppy-pink mb-4 animate-wag" size={32} />
                <h3 className="font-baloo text-lg font-bold text-coffee-brown mb-2" data-testid="text-love-title">
                  Made with Love
                </h3>
                <p className="text-coffee-brown opacity-80 text-sm" data-testid="text-love-description">
                  Every order comes with extra care and puppy love
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-cream-latte p-6 text-center shadow-lg">
              <CardContent className="p-6">
                <Heart className="mx-auto text-playful-teal mb-4 animate-pulse" size={32} />
                <h3 className="font-baloo text-lg font-bold text-coffee-brown mb-2" data-testid="text-quality-title">
                  Basic but Beautiful
                </h3>
                <p className="text-coffee-brown opacity-80 text-sm" data-testid="text-quality-description">
                  Simple ingredients, beautifully crafted as per tradition
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
