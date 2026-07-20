import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import OurCoffee from "./components/OurCoffee";
import CharityFactor from "./components/CharityFactor";
import CustomerReviews from "./components/CustomerReviews";
import FAQ from "./components/FAQ";
import PerfectCup from "./components/PerfectCup";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import CoffeeDetailModal from "./components/CoffeeDetailModal";
import { CoffeeProduct, CartItem } from "./types";
import { coffeeProducts, customerReviews, charities, faqs, tickerItems, tickerItemsSecondary } from "./data";
import { CheckCircle2 } from "lucide-react";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<CoffeeProduct | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Smooth scroll helper
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Toast manager
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  // Add default product to cart instantly
  const handleAddToCart = (product: CoffeeProduct) => {
    const defaultCartItem: CartItem = {
      product,
      quantity: 1,
      milkType: "Whole Bean",
      sweetness: "Standard 12oz"
    };

    setCartItems((prev) => {
      // Check if duplicate with same customization
      const duplicateIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.milkType === "Whole Bean" &&
          item.sweetness === "Standard 12oz"
      );

      if (duplicateIdx > -1) {
        const updated = [...prev];
        updated[duplicateIdx].quantity += 1;
        return updated;
      }
      return [...prev, defaultCartItem];
    });

    showToast(`Added ${product.name} (Whole Bean) to basket!`);
  };

  // Open product details modal for grind/size customization
  const handleOpenDetailModal = (product: CoffeeProduct) => {
    setSelectedProductForDetail(product);
  };

  // Add customized product to cart
  const handleConfirmAdd = (product: CoffeeProduct, quantity: number, grind: string, bagSize: string) => {
    const customizedCartItem: CartItem = {
      product,
      quantity,
      milkType: grind,
      sweetness: bagSize
    };

    setCartItems((prev) => {
      // Check if duplicate with same exact customizations
      const duplicateIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.milkType === grind &&
          item.sweetness === bagSize
      );

      if (duplicateIdx > -1) {
        const updated = [...prev];
        updated[duplicateIdx].quantity += quantity;
        return updated;
      }
      return [...prev, customizedCartItem];
    });

    showToast(`Added x${quantity} ${product.name} (${grind}) to basket!`);
  };

  const handleUpdateQuantity = (idx: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(idx);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[idx].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (idx: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Total item count for cart badge
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-coffee-dark text-white font-sans selection:bg-coffee-accent selection:text-white overflow-x-hidden">
      
      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* Hero Header Banner */}
      <Hero
        onScrollToSection={handleScrollToSection}
      />

      {/* Continuously Running Ticker 1 */}
      <Ticker
        items={tickerItems}
        bgClass="bg-coffee-dark bg-camo border-y border-white py-4 overflow-hidden shadow-inner"
        textClass="text-white font-display font-black uppercase tracking-[0.24em] text-sm sm:text-base drop-shadow-md"
      />

      {/* "OUR COFFEE" Carousel Grid */}
      <OurCoffee
        products={coffeeProducts}
        onAddToCart={handleAddToCart}
        onOpenDetailModal={handleOpenDetailModal}
      />

      {/* "CHARITY FACTOR" 30% direct donate program */}
      <CharityFactor charities={charities} />

      {/* "CUSTOMER REVIEWS" Tiles & Portrait Cards */}
      <CustomerReviews reviews={customerReviews} />

      {/* "FAQ" Operational Intelligence Accordion */}
      <FAQ faqs={faqs} />

      {/* Secondary Continuous Ticker for aesthetic pairing */}
      <Ticker
        items={tickerItemsSecondary}
        bgClass="bg-coffee-dark bg-camo py-3.5 border-y border-white overflow-hidden"
        textClass="text-white font-mono font-black text-xs sm:text-sm tracking-[0.24em] drop-shadow-md"
      />

      {/* "YOUR PERFECT CUP AWAITS" Bento Grid Collage Banner */}
      <PerfectCup onOrderNowClick={() => handleScrollToSection("our-coffee")} />

      {/* Professional Polish Trust & Quality Banner */}
      <div className="bg-coffee-card bg-camo border-y border-white/10 py-12 relative overflow-hidden text-white">
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-coffee-accent opacity-[0.03] rounded-full blur-2xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-2 items-center">
            
            {/* Feature 1 */}
            <div className="col-span-1 md:col-span-1 flex gap-4 items-center justify-center md:justify-start">
              <div className="w-12 h-12 bg-coffee-card flex items-center justify-center border border-white/5 rounded-xl text-xl shadow-xs">
                🛡️
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-white tracking-wider">SECURE DIRECT SOURCING</p>
                <p className="text-sm font-bold uppercase text-white">VETERAN OWN AND OPERATED</p>
              </div>
            </div>

            <div className="hidden md:block col-span-1 w-px h-12 bg-coffee-card/20 justify-self-center"></div>

            {/* Feature 2 */}
            <div className="col-span-1 md:col-span-1 flex gap-4 items-center justify-center">
              <div className="w-12 h-12 bg-coffee-card flex items-center justify-center border border-white/5 rounded-xl text-xl shadow-xs">
                🇺🇸
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-white tracking-wider">ROAST ORIGIN PROFILE</p>
                <p className="text-sm font-bold uppercase text-white">Roasted in the USA</p>
              </div>
            </div>

            <div className="hidden md:block col-span-1 w-px h-12 bg-coffee-card/20 justify-self-center"></div>

            {/* Feature 3 */}
            <div className="col-span-1 md:col-span-1 flex gap-4 items-center justify-center md:justify-end">
              <div className="w-12 h-12 bg-coffee-card flex items-center justify-center border border-white/5 rounded-xl text-xl shadow-xs">
                📦
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-white tracking-wider">FREE SHIPPING ELIGIBLE</p>
                <p className="text-sm font-bold uppercase text-white">Orders Over $45</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer columns */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Sliding Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Customize Dialog Modal */}
      <CoffeeDetailModal
        product={selectedProductForDetail}
        onClose={() => setSelectedProductForDetail(null)}
        onConfirmAdd={handleConfirmAdd}
      />

      {/* Custom feedback toast alerts */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-coffee-card border border-white/10 text-coffee-cream px-5 py-3.5 rounded-2xl shadow-[0_12px_24px_rgba(0,0,0,0.2)] flex items-center gap-3 animate-slideUp font-sans font-semibold text-xs uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4 text-coffee-accent animate-bounce" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
