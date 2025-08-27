
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, ShoppingCart, Plus, Minus, Coffee, Leaf, Heart, Dog, Sandwich, GlassWater, Sparkles, Star } from "lucide-react";

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
  const [selectedCategory, setSelectedCategory] = useState("coffee");
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number}>>([]);

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

  const categories = [
    {
      id: "coffee",
      name: "Coffee & Espresso",
      icon: <Coffee size={20} />,
      color: "bg-coffee-brown text-cream-latte"
    },
    {
      id: "matcha",
      name: "Matcha Specials",
      icon: <Leaf size={20} />,
      color: "bg-playful-teal text-cream-latte"
    },
    {
      id: "food",
      name: "Food & Sandwiches",
      icon: <Sandwich size={20} />,
      color: "bg-golden-fur text-coffee-brown"
    },
    {
      id: "beverages",
      name: "Other Beverages",
      icon: <GlassWater size={20} />,
      color: "bg-puppy-pink text-coffee-brown"
    }
  ];

  const menuItems = {
    coffee: [
      {
        id: "espresso",
        name: "Espresso",
        description: "Rich, bold, concentrated shot",
        price: 160,
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=300&h=200&fit=crop"
      },
      {
        id: "americano",
        name: "Americano",
        description: "Espresso diluted with hot water for a classic coffee experience",
        price: 180,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop"
      },
      {
        id: "latte",
        name: "Latte",
        description: "Smooth espresso with steamed milk and light foam",
        price: 200,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop"
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        description: "Perfect balance of espresso, steamed milk, and foam",
        price: 190,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop"
      },
      {
        id: "mocha",
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk",
        price: 220,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
      },
      {
        id: "cold-brew",
        name: "Vietnamese Cold Brew",
        description: "Smooth, refreshing cold coffee with a unique brewing method",
        price: 220,
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=300&h=200&fit=crop"
      }
    ],
    matcha: [
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
    ],
    food: [
      {
        id: "chicken-sandwich",
        name: "Classic Spiced Chicken Sandwich",
        description: "Tender spiced chicken with fresh vegetables and house sauce",
        price: 330,
        image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=200&fit=crop"
      },
      {
        id: "ham-cheese-sandwich",
        name: "Chicken Ham & Cheese Sandwich",
        description: "Premium ham and cheese with crisp vegetables",
        price: 380,
        image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=300&h=200&fit=crop"
      },
      {
        id: "tomato-sandwich",
        name: "Tomato Cream Cheese Sandwich",
        description: "Fresh tomatoes with creamy cheese spread",
        price: 300,
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300&h=200&fit=crop"
      },
      {
        id: "pesto-sandwich",
        name: "Grilled Veg Pesto Sandwich",
        description: "Grilled vegetables with house-made pesto",
        price: 350,
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300&h=200&fit=crop"
      },
      {
        id: "chocolate-cookie",
        name: "White Chocolate & Hazelnut Cookie",
        description: "Soft cookie with white chocolate and hazelnuts",
        price: 150,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=200&fit=crop"
      },
      {
        id: "croissant",
        name: "Caramel & Chocolate Croissant",
        description: "Buttery croissant with caramel and chocolate",
        price: 520,
        image: "https://images.unsplash.com/photo-1555507036-ab794f1484e0?w=300&h=200&fit=crop"
      },
      {
        id: "chocolate-cake",
        name: "Chocolate Cake",
        description: "Rich, moist chocolate cake slice",
        price: 280,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop"
      }
    ],
    beverages: [
      {
        id: "hot-chocolate",
        name: "Hot Chocolate",
        description: "House-made 54% dark chocolate ganache with steamed milk",
        price: 200,
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=300&h=200&fit=crop"
      },
      {
        id: "fresh-juice",
        name: "Fresh Cold-Pressed Juice",
        description: "Daily selection of fresh fruit and vegetable juices",
        price: 180,
        image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=200&fit=crop"
      },
      {
        id: "lemonade",
        name: "Artisanal Lemonade",
        description: "Fresh lemon with a hint of herbs",
        price: 150,
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300&h=200&fit=crop"
      },
      {
        id: "green-tea",
        name: "Green Tea Pure Joy",
        description: "Pure green tea leaves for a refreshing experience",
        price: 150,
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=300&h=200&fit=crop"
      }
    ]
  };

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

      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-coffee-brown to-caramel text-cream-latte">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-bright-puppy-pink p-4 rounded-full animate-pulse hover:animate-spin cursor-pointer" onClick={createSparkles}>
              <Coffee className="text-coffee-brown" size={32} />
            </div>
          </div>
          
          <h1 className="font-baloo text-4xl lg:text-5xl font-bold text-center mb-4 hover:text-golden-fur transition-colors cursor-pointer" data-testid="text-order-title" onClick={createSparkles}>
            Iteeha Coffee & Pet Paradise
          </h1>
          
          <div className="text-center space-y-2">
            <p className="text-lg animate-bounce" data-testid="text-location-info">Iteeha Coffee • Mahalaxmi</p>
            <div className="flex justify-center space-x-2">
              <Badge className="bg-playful-teal text-coffee-brown animate-pulse hover:animate-bounce cursor-pointer" data-testid="badge-veg-only" onClick={createSparkles}>
                Veg & Non-Veg
              </Badge>
              <Badge className="bg-golden-fur text-coffee-brown animate-pulse hover:animate-bounce cursor-pointer" onClick={createSparkles}>
                <Dog className="mr-1" size={12} />
                Pet Friendly
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-playful-teal p-2 rounded-full animate-pulse hover:animate-spin cursor-pointer" onClick={createSparkles}>
                <MapPin className="text-cream-latte" size={20} />
              </div>
              <div>
                <p className="font-semibold text-coffee-brown" data-testid="text-delivery-to">Delivery to:</p>
                <p className="text-sm text-coffee-brown opacity-80" data-testid="text-delivery-address">{deliveryLocation}</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="border-golden-fur text-golden-fur hover:bg-golden-fur hover:text-coffee-brown paw-cursor transform hover:scale-105 transition-all"
              data-testid="button-change-location"
              onClick={createSparkles}
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
              <h2 className="font-baloo text-3xl font-bold text-coffee-brown mb-6 text-center hover:text-bright-puppy-pink transition-colors cursor-pointer" data-testid="text-menu-title" onClick={createSparkles}>
                Our Delicious Menu ✨
              </h2>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={(e) => {
                      setSelectedCategory(category.id);
                      createSparkles(e);
                    }}
                    className={`${
                      selectedCategory === category.id ? category.color : "bg-cream-latte text-coffee-brown"
                    } px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg flex items-center space-x-2`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                {menuItems[selectedCategory as keyof typeof menuItems].map((item, index) => (
                  <Card key={item.id} className="bg-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:rotate-1 paw-cursor group cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-bright-puppy-pink/10 via-transparent to-golden-fur/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-6 relative z-10">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                        data-testid={`img-${selectedCategory}-${index}`}
                      />
                      
                      <div className="flex items-start justify-between mb-2">
                        <Badge className="bg-playful-teal text-cream-latte group-hover:animate-pulse" data-testid={`badge-veg-${index}`}>
                          ● Veg
                        </Badge>
                        <span className="text-xl font-bold text-caramel group-hover:text-bright-puppy-pink transition-colors" data-testid={`price-${selectedCategory}-${index}`}>
                          ₹{item.price}
                        </span>
                      </div>
                      
                      <h4 className="font-baloo text-xl font-bold text-coffee-brown mb-2 group-hover:text-bright-puppy-pink transition-colors" data-testid={`title-${selectedCategory}-${index}`}>
                        {item.name}
                      </h4>
                      <p className="text-coffee-brown opacity-70 mb-4 text-sm" data-testid={`description-${selectedCategory}-${index}`}>
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Heart className="text-puppy-pink group-hover:animate-pulse" size={16} />
                          <Star className="text-golden-fur group-hover:animate-spin" size={16} />
                        </div>
                        <Button 
                          onClick={(e) => {
                            addToCart({
                              id: item.id,
                              name: item.name,
                              price: item.price,
                              description: item.description
                            });
                            createSparkles(e);
                          }}
                          className="bg-golden-fur text-coffee-brown hover:bg-opacity-90 font-semibold paw-cursor transform hover:scale-105 transition-all"
                          data-testid={`button-add-cart-${index}`}
                        >
                          ADD TO CART
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-cream-latte shadow-xl border-2 border-bright-puppy-pink">
              <CardHeader className="bg-coffee-brown text-cream-latte rounded-t-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-baloo text-xl font-bold flex items-center" data-testid="text-cart-title">
                    <Heart className="mr-2 animate-pulse" size={20} />
                    Your Order
                  </h3>
                  <div className="flex items-center space-x-2">
                    <ShoppingCart size={20} />
                    <span className="bg-golden-fur text-coffee-brown px-2 py-1 rounded-full text-sm font-bold animate-bounce" data-testid="text-cart-count">
                      {getTotalItems()}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <Coffee className="mx-auto text-coffee-brown opacity-50 mb-4 animate-bounce" size={48} />
                    <p className="text-coffee-brown opacity-70 mb-4" data-testid="text-empty-cart">
                      Your cart is empty. Add some delicious items!
                    </p>
                    <Dog className="mx-auto text-puppy-pink animate-wag" size={32} />
                    <p className="text-puppy-pink text-sm mt-2">Our pups are waiting for your order! 🐾</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={item.id} className="flex items-center justify-between border-b border-cream-latte pb-3 hover:bg-white/50 transition-colors rounded-lg p-2" data-testid={`cart-item-${index}`}>
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
                            onClick={(e) => {
                              updateQuantity(item.id, -1);
                              createSparkles(e);
                            }}
                            className="w-8 h-8 p-0 border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-cream-latte transform hover:scale-110 transition-all"
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
                            onClick={(e) => {
                              updateQuantity(item.id, 1);
                              createSparkles(e);
                            }}
                            className="w-8 h-8 p-0 border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-cream-latte transform hover:scale-110 transition-all"
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
                        <span className="font-baloo text-xl font-bold text-caramel animate-pulse" data-testid="text-total-amount">
                          ₹{getTotalPrice()}
                        </span>
                      </div>
                      
                      <Button 
                        className="w-full bg-playful-teal text-coffee-brown py-3 font-semibold hover:bg-opacity-90 paw-cursor transform hover:scale-105 transition-all animate-pulse hover:animate-none"
                        data-testid="button-proceed-checkout"
                        onClick={createSparkles}
                      >
                        <Heart className="mr-2 animate-beat" size={16} />
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
      <div className="flex justify-center py-8">
        <Dog className="text-bright-puppy-pink animate-wag cursor-pointer hover:animate-spin hover:text-golden-fur transition-colors" size={48} onClick={createSparkles} />
      </div>

      {/* Additional Info */}
      <section className="py-12 bg-gradient-to-br from-puppy-pink via-cream-latte to-golden-fur">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:rotate-2 cursor-pointer group" onClick={createSparkles}>
              <CardContent className="p-6">
                <Coffee className="mx-auto text-coffee-brown mb-4 group-hover:animate-bounce" size={32} />
                <h3 className="font-baloo text-lg font-bold text-coffee-brown mb-2 group-hover:text-bright-puppy-pink transition-colors" data-testid="text-fresh-title">
                  Fresh & Hot
                </h3>
                <p className="text-coffee-brown opacity-80 text-sm" data-testid="text-fresh-description">
                  All items made fresh to order and delivered hot with love
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:-rotate-2 cursor-pointer group" onClick={createSparkles}>
              <CardContent className="p-6">
                <Dog className="mx-auto text-puppy-pink mb-4 group-hover:animate-wag" size={32} />
                <h3 className="font-baloo text-lg font-bold text-coffee-brown mb-2 group-hover:text-puppy-pink transition-colors" data-testid="text-love-title">
                  Made with Puppy Love
                </h3>
                <p className="text-coffee-brown opacity-80 text-sm" data-testid="text-love-description">
                  Every order comes with extra care and tail wags from our furry team
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:rotate-2 cursor-pointer group" onClick={createSparkles}>
              <CardContent className="p-6">
                <Heart className="mx-auto text-playful-teal mb-4 group-hover:animate-pulse" size={32} />
                <h3 className="font-baloo text-lg font-bold text-coffee-brown mb-2 group-hover:text-playful-teal transition-colors" data-testid="text-quality-title">
                  Basic but Beautiful
                </h3>
                <p className="text-coffee-brown opacity-80 text-sm" data-testid="text-quality-description">
                  Simple ingredients, beautifully crafted as per tradition ✨
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
