import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Coffee, Sandwich, Leaf, GlassWater, ShoppingCart, Heart } from "lucide-react";

export default function Menu() {
  const menuCategories = [
    {
      id: "coffee",
      title: "Coffee & Espresso",
      icon: <Coffee size={24} />,
      bgColor: "bg-coffee-brown",
      iconColor: "text-cream-latte",
      items: [
        { name: "Espresso", description: "Rich, bold, concentrated shot", price: "₹160" },
        { name: "Doppio (Double Espresso)", description: "Double shot of our signature espresso", price: "₹160" },
        { name: "Americano", description: "Espresso diluted with hot water for a classic coffee experience", price: "₹180" },
        { name: "Latte", description: "Smooth espresso with steamed milk and light foam", price: "₹200" },
        { name: "Cortado", description: "Equal parts espresso and warm milk", price: "₹190" },
        { name: "Cappuccino", description: "Perfect balance of espresso, steamed milk, and foam", price: "₹190" },
        { name: "Mocha", description: "Espresso with chocolate and steamed milk", price: "₹220" },
        { name: "Vietnamese Cold Brew", description: "Smooth, refreshing cold coffee with a unique brewing method", price: "₹220" },
        { name: "House Cold Coffee", description: "Our signature cold coffee blend", price: "₹250" },
        { name: "Coffee Lemonade", description: "Refreshing combination of coffee and citrus", price: "₹250" },
        { name: "Pallonji's Cold Brew (300ml)", description: "Premium cold brew in our signature bottle", price: "₹450" }
      ]
    },
    {
      id: "food",
      title: "Food & Bakes",
      icon: <Sandwich size={24} />,
      bgColor: "bg-caramel",
      iconColor: "text-cream-latte",
      items: [
        { name: "Classic Spiced Chicken Sandwich", description: "Tender spiced chicken with fresh vegetables", price: "₹330" },
        { name: "Chicken Ham & Cheese Sandwich", description: "Premium ham and cheese with crisp vegetables", price: "₹380" },
        { name: "Tomato Cream Cheese Sandwich", description: "Fresh tomatoes with creamy cheese spread", price: "₹300" },
        { name: "Grilled Veg Pesto Sandwich", description: "Grilled vegetables with house-made pesto", price: "₹350" },
        { name: "White Chocolate & Hazelnut Cookie", description: "Soft cookie with white chocolate and hazelnuts", price: "₹150" },
        { name: "Caramel & Chocolate Croissant", description: "Buttery croissant with caramel and chocolate", price: "₹520" },
        { name: "Chocolate Cake", description: "Rich, moist chocolate cake slice", price: "₹280" }
      ]
    },
    {
      id: "tea",
      title: "Artisanal Teas",
      icon: <Leaf size={24} />,
      bgColor: "bg-playful-teal",
      iconColor: "text-cream-latte",
      items: [
        { name: "Green Tea Pure Joy", description: "Pure green tea leaves for a refreshing experience", price: "₹150" },
        { name: "Black Tea Orange Blossom", description: "Black tea infused with orange blossom notes", price: "₹160" },
        { name: "Oolong Rose", description: "Delicate oolong tea with rose petals", price: "₹170" },
        { name: "Black Tea Fleur Lemon", description: "Black tea with lemon and floral notes", price: "₹160" }
      ]
    },
    {
      id: "beverages",
      title: "Other Beverages",
      icon: <GlassWater size={24} />,
      bgColor: "bg-golden-fur",
      iconColor: "text-coffee-brown",
      items: [
        { name: "Hot Chocolate", description: "House-made 54% dark chocolate ganache with steamed milk", price: "₹200" },
        { name: "Fresh Cold-Pressed Juice", description: "Daily selection of fresh fruit and vegetable juices", price: "₹180" },
        { name: "Artisanal Lemonade", description: "Fresh lemon with a hint of herbs", price: "₹150" }
      ]
    }
  ];

  const matchaSpecials = [
    { name: "Classic Hot Matcha Latte", description: "A Smooth Blend Of Matcha And Steamed Milk", price: "₹320", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=200&fit=crop" },
    { name: "Spiced Ginger Matcha Latte", description: "Matcha And Steamed Milk With House Made Ginger Syrup", price: "₹340", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=300&h=200&fit=crop" },
    { name: "Blueberry Matcha Latte", description: "Matcha And Milk With Blueberry Compote", price: "₹380", image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=200&fit=crop" },
    { name: "Signature Iced Matcha", description: "Classic Matcha And Milk Over Ice", price: "₹350", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" },
    { name: "Golden Glow Matcha Latte", description: "Matcha with turmeric and steamed milk", price: "₹370", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop" },
    { name: "Vanilla Matcha Latte", description: "Matcha with vanilla syrup and steamed milk", price: "₹360", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=200&fit=crop" }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coffee-brown to-caramel text-cream-latte">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-golden-fur rounded-full flex items-center justify-center">
              <Coffee className="text-coffee-brown" size={64} />
            </div>
          </div>
          
          <h1 className="font-baloo text-5xl lg:text-6xl font-bold mb-6" data-testid="text-menu-title">
            Our Menu
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto" data-testid="text-menu-subtitle">
            Thoughtfully curated coffee, bakes, artisanal teas, and premium sandwiches - Basic but Beautiful
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-playful-teal text-coffee-brown px-6 py-2 text-lg" data-testid="badge-cost">₹500-1050 Cost for Two</Badge>
            <Badge className="bg-golden-fur text-coffee-brown px-6 py-2 text-lg" data-testid="badge-hours">7:30 AM - 11:30 PM All Days</Badge>
          </div>
        </div>
      </section>

      {/* Matcha Specials */}
      <section className="py-20 bg-cream-latte">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4" data-testid="text-matcha-title">
              Matcha Specials
            </h2>
            <p className="text-xl text-coffee-brown opacity-80 font-pacifico" data-testid="text-matcha-subtitle">
              Premium matcha creations crafted with love
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {matchaSpecials.map((item, index) => (
              <Card key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 paw-cursor group">
                <CardContent className="p-6">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-2xl mb-4"
                    data-testid={`img-matcha-${index}`}
                  />
                  
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-playful-teal text-cream-latte" data-testid={`badge-matcha-${index}`}>
                      ● Veg
                    </Badge>
                    <span className="text-2xl font-bold text-caramel" data-testid={`price-matcha-${index}`}>{item.price}</span>
                  </div>
                  
                  <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-2" data-testid={`title-matcha-${index}`}>
                    {item.name}
                  </h3>
                  <p className="text-coffee-brown opacity-70 mb-4" data-testid={`description-matcha-${index}`}>
                    {item.description}
                  </p>
                  
                  <Button className="w-full bg-golden-fur text-coffee-brown hover:bg-opacity-90 paw-cursor" data-testid={`button-add-cart-matcha-${index}`}>
                    ADD TO CART
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Paw Print Separator */}
      <div className="paw-separator my-8"></div>

      {/* Main Menu */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl lg:text-5xl font-bold text-coffee-brown mb-4" data-testid="text-main-menu-title">
              Complete Menu
            </h2>
            <p className="text-xl text-coffee-brown opacity-80" data-testid="text-main-menu-subtitle">
              Fresh • Made to Order ✨
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {menuCategories.map((category) => (
              <Card key={category.id} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow" data-testid={`card-category-${category.id}`}>
                <CardHeader className="text-center pb-6">
                  <div className={`${category.bgColor} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                    <div className={category.iconColor}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="font-baloo text-2xl font-bold text-coffee-brown" data-testid={`title-category-${category.id}`}>
                    {category.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {category.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-start border-b border-cream-latte pb-3 last:border-b-0" data-testid={`item-${category.id}-${index}`}>
                      <div className="flex-1">
                        <h4 className="font-semibold text-coffee-brown mb-1" data-testid={`name-${category.id}-${index}`}>
                          {item.name}
                        </h4>
                        <p className="text-sm text-coffee-brown opacity-70" data-testid={`description-${category.id}-${index}`}>
                          {item.description}
                        </p>
                        <div className="flex items-center mt-1">
                          <Heart className="text-puppy-pink mr-1" size={12} />
                          <span className="text-xs text-coffee-brown opacity-60">Fresh • Made to Order ✨</span>
                        </div>
                      </div>
                      <div className="ml-4 flex flex-col items-end">
                        <span className="font-bold text-caramel text-lg" data-testid={`price-${category.id}-${index}`}>
                          {item.price}
                        </span>
                        <Coffee className="text-golden-fur mt-1" size={16} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Good to Know */}
      <section className="py-20 bg-cream-latte">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl font-bold text-coffee-brown mb-4" data-testid="text-good-to-know-title">
              Good to Know
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white p-6 text-center shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-4" data-testid="text-payment-title">
                  Payment Options
                </h3>
                <p className="text-coffee-brown opacity-80" data-testid="text-payment-description">
                  We accept card payments via PayEazy for your convenience
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white p-6 text-center shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-4" data-testid="text-dietary-title">
                  Dietary Options
                </h3>
                <p className="text-coffee-brown opacity-80" data-testid="text-dietary-description">
                  Vegetarian and non-vegetarian options available. No alcohol served.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white p-6 text-center shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-baloo text-xl font-bold text-coffee-brown mb-4" data-testid="text-order-title">
                  Order Online
                </h3>
                <p className="text-coffee-brown opacity-80 mb-4" data-testid="text-order-description">
                  Skip the wait and order online for pickup or delivery
                </p>
                <Button 
                  asChild
                  className="bg-playful-teal text-coffee-brown hover:bg-opacity-90 paw-cursor"
                  data-testid="button-order-online-now"
                >
                  <Link href="/order-landing">
                    <ShoppingCart className="mr-2" size={16} />
                    Order Online Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Paw Print Separator */}
      <div className="paw-separator my-8"></div>
    </div>
  );
}
