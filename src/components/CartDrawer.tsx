import React, { useState } from "react";
import { X, Trash2, ShoppingBag, Plus, Minus, CreditCard, CheckCircle, Sparkles, Receipt, RefreshCw, Heart } from "lucide-react";
import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (idx: number, newQty: number) => void;
  onRemoveItem: (idx: number) => void;
  onClearCart: () => void;
}

const charityNames: Record<string, string> = {
  "fisher-house": "Fisher House Foundation",
  "semper-fi": "Semper Fi & America's Fund",
  "gary-sinise-foundation": "Gary Sinise Foundation"
};

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<"idle" | "form" | "loading" | "success">("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [selectedCharity, setSelectedCharity] = useState("fisher-house");
  const [orderNumber, setOrderNumber] = useState("");

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const deliveryFee = subtotal > 45 || subtotal === 0 ? 0 : 3.50;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;
  
  // Dynamic 30% charity calculation
  const charityContribution = subtotal * 0.30;

  const handleStartCheckout = () => {
    if (cartItems.length === 0) return;
    setCheckoutStep("form");
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) return;

    setCheckoutStep("loading");
    
    // Simulate API request
    setTimeout(() => {
      setOrderNumber("VB-" + Math.floor(100000 + Math.random() * 900000));
      setCheckoutStep("success");
    }, 1500);
  };

  const handleReset = () => {
    onClearCart();
    setCheckoutStep("idle");
    setName("");
    setPhone("");
    setAddress("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Overlay backdrop */}
      <div className="absolute inset-0 bg-coffee-dark/50 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-coffee-dark border-l border-white/10 shadow-2xl flex flex-col justify-between animate-slideIn">
          
          {/* Header */}
          <div className="px-6 py-6 border-b border-white/10 flex items-center justify-between bg-coffee-card/45">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-white" />
              <h2 className="font-display font-black text-lg text-white tracking-wide uppercase">
                Your Basket
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-coffee-dark/10 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body Content depending on state */}
          <div className="flex-1 overflow-y-auto p-6">
            {checkoutStep === "idle" && (
              <>
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-coffee-dark/5 flex items-center justify-center text-coffee-medium mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="text-lg font-black text-white uppercase">Your basket is empty</p>
                    <p className="text-sm text-coffee-medium mt-2 max-w-xs leading-relaxed">
                      Deploy your order by browsing our branch-inspired blends!
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 px-6 py-3 bg-coffee-dark hover:bg-coffee-card text-coffee-cream font-black uppercase text-xs tracking-widest rounded-full transition-all cursor-pointer"
                    >
                      Browse Blends
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Live Charity Commitment Indicator */}
                    <div className="bg-coffee-card text-coffee-cream p-4 rounded-2xl flex items-center gap-3.5 border border-white/5 shadow-md">
                      <Heart className="w-8 h-8 text-coffee-accent animate-pulse shrink-0 fill-current" />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-coffee-accent">DIRECT IMPACT ENGINE</p>
                        <p className="text-xs text-white/90 leading-snug mt-0.5">
                          This order will route <strong className="text-white">${charityContribution.toFixed(2)}</strong> (<span className="text-coffee-accent animate-pulse font-black">30%</span> of subtotal) straight to support veteran and service family programs!
                        </p>
                      </div>
                    </div>

                    {cartItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 bg-coffee-card rounded-full p-4 border border-white/5 shadow-xs relative"
                      >
                        {/* Coffee Portrait */}
                        <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 flex-shrink-0 bg-coffee-card">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-display font-black text-white uppercase truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-[9px] text-coffee-medium font-bold uppercase mt-0.5 tracking-widest">
                            {item.milkType} • {item.sweetness}
                          </p>
                          <p className="text-xs font-black text-white mt-1">
                            ${item.product.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity Controls & Delete */}
                        <div className="flex flex-col items-end justify-between gap-3">
                          <button
                            onClick={() => onRemoveItem(idx)}
                            className="text-white/40 hover:text-red-600 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>

                          <div className="flex items-center gap-2 bg-coffee-dark/5 rounded-full px-2 py-0.5 border border-white/10">
                            <button
                              onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                              className="text-white/60 hover:text-white p-0.5"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-black text-white select-none min-w-[12px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                              className="text-white/60 hover:text-white p-0.5"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {checkoutStep === "form" && (
              <form onSubmit={handlePlaceOrder} className="space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                  <CreditCard className="w-5 h-5 text-coffee-accent" />
                  <h3 className="font-display font-black uppercase tracking-widest text-xs text-white">
                    Delivery Details &amp; Mission Routing
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-1.5 font-black">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Colonel John Carter"
                      className="w-full bg-coffee-card border border-white/10 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-white font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-1.5 font-black">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full bg-coffee-card border border-white/10 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-white font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-1.5 font-black">
                      Delivery Address *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="450 Patriot Parkway, Fort Worth, TX"
                      className="w-full bg-coffee-card border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white font-semibold resize-none"
                    />
                  </div>

                  {/* Programmatic Charity Selector Dropdown */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-coffee-accent mb-1.5 font-black flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-coffee-accent fill-current animate-pulse" />
                      Select Charity Recipient (<span className="text-coffee-accent animate-pulse font-black">30%</span> Donation) *
                    </label>
                    <select
                      value={selectedCharity}
                      onChange={(e) => setSelectedCharity(e.target.value)}
                      className="w-full bg-coffee-card border border-white/20 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-white font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      <option value="fisher-house">Fisher House Foundation (Military housing during recovery)</option>
                      <option value="semper-fi">Semper Fi & America's Fund (Critical wounded veteran care)</option>
                      <option value="gary-sinise-foundation">Gary Sinise Foundation (Veteran programs & home builds)</option>
                    </select>
                    <p className="mt-1.5 text-[10px] text-coffee-medium leading-relaxed font-semibold">
                      Your choice routes exactly <strong className="text-white">${charityContribution.toFixed(2)}</strong> of our sales revenue directly to this verified cause.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2 font-black">
                      Payment Mode
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: "card", label: "Credit Card" },
                        { id: "cod", label: "Cash on delivery" }
                      ].map((pay) => (
                        <button
                          key={pay.id}
                          type="button"
                          onClick={() => setPaymentMethod(pay.id)}
                          className={`px-4 py-3 border rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                            paymentMethod === pay.id
                              ? "bg-coffee-dark text-coffee-cream border-white shadow-sm"
                              : "bg-coffee-card text-white/70 border-white/10 hover:border-white/25"
                          }`}
                        >
                          {pay.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep("idle")}
                    className="flex-1 py-3 bg-coffee-dark/5 hover:bg-coffee-dark/10 text-white font-black text-xs uppercase tracking-widest rounded-full transition-all cursor-pointer"
                  >
                    Back to Cart
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-coffee-dark hover:bg-coffee-card text-coffee-cream font-black text-xs uppercase tracking-widest rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            )}

            {checkoutStep === "loading" && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <RefreshCw className="w-10 h-10 text-coffee-accent animate-spin mb-4" />
                <p className="text-base font-black text-white uppercase tracking-widest">Securing your order...</p>
                <p className="text-xs text-coffee-medium mt-1">Connecting to Vetted Brew secure POS gateway.</p>
              </div>
            )}

            {checkoutStep === "success" && (
              <div className="space-y-6 flex flex-col justify-center h-full py-6 animate-fadeIn font-mono">
                
                {/* Visual success head */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                    <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="font-display font-black text-lg text-white uppercase tracking-wider">
                    Order Secured!
                  </h3>
                  <p className="text-xs text-coffee-accent font-black uppercase mt-0.5 tracking-widest">
                    DIRECT IMPACT CONFIRMED
                  </p>
                </div>

                {/* Printable receipt mockup */}
                <div className="bg-coffee-card rounded-2xl p-6 border border-white/15 shadow-md relative overflow-hidden text-xs">
                  {/* Jagged border at top & bottom */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-coffee-dark/10 via-transparent to-coffee-dark/10 bg-[length:12px_100%]" />
                  
                  <div className="flex items-center justify-between pb-4 border-b border-dashed border-white/20">
                    <span className="font-bold">VETTED BREW CO.</span>
                    <span className="font-bold">{orderNumber}</span>
                  </div>

                  <div className="py-4 space-y-2 border-b border-dashed border-white/20 text-[11px]">
                    <p>DATE: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <p>PATRIOT: {name.toUpperCase()}</p>
                    <p>CHARITY: {charityNames[selectedCharity].toUpperCase()}</p>
                    <p>PAYMENT: {paymentMethod === "card" ? "CREDIT CARD (AUTH)" : "CASH ON DELIV."}</p>
                  </div>

                  <div className="py-4 space-y-3 border-b border-dashed border-white/20 max-h-48 overflow-y-auto">
                    {cartItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-4 text-[11px]">
                        <div>
                          <p className="font-bold">{item.product.name} x{item.quantity}</p>
                          <p className="text-[10px] text-white/50">{item.milkType} • {item.sweetness}</p>
                        </div>
                        <span className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 space-y-1.5 font-bold text-right text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-white/50">SUBTOTAL:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-coffee-accent">
                      <span><span className="text-coffee-accent animate-pulse font-black">30%</span> IMPACT PORTION:</span>
                      <span>${charityContribution.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">TAX (8.0%):</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">DELIVERY:</span>
                      <span>{deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/15 pt-2 text-sm text-white">
                      <span>TOTAL SECURED:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Virtual receipt barcode */}
                  <div className="pt-6 flex flex-col items-center">
                    <div className="w-full h-8 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#2E221E_2px,#2E221E_4px)] opacity-85" />
                    <span className="text-[9px] text-white/45 font-mono tracking-widest mt-2">
                      *DONATION-INDEX-{selectedCharity.toUpperCase()}*
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-3.5 bg-coffee-dark hover:bg-coffee-card text-coffee-cream font-bold text-xs uppercase tracking-widest rounded-full transition-all cursor-pointer shadow-md"
                >
                  Return to Store
                </button>
              </div>
            )}
          </div>

          {/* Pricing summary footer for cart items */}
          {checkoutStep === "idle" && cartItems.length > 0 && (
            <div className="bg-coffee-card border-t border-white/10 p-6 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-white/70 font-medium">
                  <span>Subtotal</span>
                  <span className="text-white font-black">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-coffee-accent font-semibold">
                  <span><span className="text-coffee-accent animate-pulse font-black">30%</span> Charity Contribution</span>
                  <span className="font-black">${charityContribution.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70 font-medium">
                  <span>Tax (8%)</span>
                  <span className="text-white font-black">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70 font-medium">
                  <span>Delivery Fee</span>
                  <span className="text-white font-black">
                    {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="pt-3 border-t border-white/15 flex justify-between text-sm text-white font-bold">
                  <span>Total Due</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={onClearCart}
                  className="px-4 py-3 border border-red-200 hover:border-red-500 hover:bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase transition-all flex items-center justify-center cursor-pointer"
                  title="Clear all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <button
                  onClick={handleStartCheckout}
                  className="flex-1 py-3 bg-coffee-dark hover:bg-coffee-card text-coffee-cream text-xs font-black uppercase tracking-widest rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Secure Order &amp; Route <span className="text-coffee-accent animate-pulse font-black">30%</span></span>
                  <Receipt className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
