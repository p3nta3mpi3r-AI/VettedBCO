import React, { useState } from "react";
import { X, ShoppingBag, CheckCircle2 } from "lucide-react";
import { CoffeeProduct } from "../types";

interface CoffeeDetailModalProps {
  product: CoffeeProduct | null;
  onClose: () => void;
  onConfirmAdd: (product: CoffeeProduct, quantity: number, grind: string, bagSize: string) => void;
}

export default function CoffeeDetailModal({
  product,
  onClose,
  onConfirmAdd
}: CoffeeDetailModalProps) {
  const [grindType, setGrindType] = useState("Whole Bean");
  const [bagSize, setBagSize] = useState("Standard 12oz");
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  if (!product) return null;

  const grindOptions = ["Whole Bean", "Standard Drip", "French Press", "Fine Espresso"];
  const bagSizeOptions = ["Standard 12oz", "Double Pack", "Bulk 5lb bag", "Single Pouches"];

  const handleAdd = () => {
    onConfirmAdd(product, quantity, grindType, bagSize);
    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden font-sans">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-coffee-dark/50 backdrop-blur-xs transition-opacity" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative bg-coffee-dark border border-white/15 rounded-[2.5rem] max-w-lg w-full overflow-hidden shadow-2xl animate-scaleIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-coffee-dark/5 hover:bg-coffee-dark/10 text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Top Info section */}
          <div className="flex gap-4 items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/15 shadow-sm bg-coffee-card flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-widest text-coffee-accent uppercase font-bold">
                {product.branch} BLEND
              </span>
              <h3 className="font-display font-black text-xl text-white uppercase leading-tight mt-0.5">
                {product.name}
              </h3>
              <p className="text-xs text-coffee-medium font-bold mt-1 leading-relaxed">
                {product.roast} • ${product.price.toFixed(2)}
              </p>
            </div>
          </div>

          <p className="text-xs text-coffee-medium leading-relaxed italic bg-coffee-card/45 p-3 rounded-full border border-white/5">
            "{product.description}"
          </p>

          {/* Customization Options */}
          <div className="space-y-4">
            {/* Grind Options */}
            <div>
              <label className="block text-[10px] font-mono font-black uppercase tracking-widest text-white/50 mb-2">
                1. Select Custom Grind
              </label>
              <div className="grid grid-cols-2 gap-2">
                {grindOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setGrindType(opt)}
                    className={`px-3 py-2 border rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      grindType === opt
                        ? "bg-coffee-dark text-coffee-cream border-white shadow-sm"
                        : "bg-coffee-card text-white/65 border-white/10 hover:border-white/20"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Bag Size Options */}
            <div>
              <label className="block text-[10px] font-mono font-black uppercase tracking-widest text-white/50 mb-2">
                2. Select Package Size
              </label>
              <div className="grid grid-cols-2 gap-2">
                {bagSizeOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setBagSize(opt)}
                    className={`px-3 py-2 border rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      bagSize === opt
                        ? "bg-coffee-dark text-coffee-cream border-white shadow-sm"
                        : "bg-coffee-card text-white/65 border-white/10 hover:border-white/20"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-white/50">
                3. Choose Quantity
              </span>

              <div className="flex items-center gap-3 bg-coffee-dark/5 rounded-full px-3 py-1.5 border border-white/10">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-white/60 hover:text-white p-1 font-black"
                >
                  -
                </button>
                <span className="text-xs font-black text-white select-none min-w-[16px] text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-white/60 hover:text-white p-1 font-black"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-6">
            <div>
              <span className="block text-[10px] text-white/45 uppercase tracking-wider font-mono">Estimated Cost</span>
              <span className="text-xl font-display font-black text-white">
                ${(product.price * quantity).toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleAdd}
              disabled={addedMessage}
              className={`px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                addedMessage
                  ? "bg-emerald-500 text-white border-emerald-500"
                  : "bg-coffee-dark hover:bg-coffee-card text-coffee-cream hover:shadow-lg"
              }`}
            >
              {addedMessage ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Added successfully!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to my basket</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
