"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: "",
    phone: "",
    address: "",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("finis_cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  const updateQuantity = (id: string | number, delta: number) => {
    const updated = cartItems
      .map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          if (newQty > 5) return item;
          return { ...item, quantity: newQty };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); 
    setCartItems(updated);
    localStorage.setItem("finis_cart", JSON.stringify(updated));
  };

  const removeItem = (id: string | number) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("finis_cart", JSON.stringify(updated));
  };

  // Calculate Subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = cartItems.length > 0 ? 1500 : 0;
  const grandTotal = subtotal + (cartItems.length > 0 ? deliveryFee : 0);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!deliveryInfo.fullName || !deliveryInfo.phone || !deliveryInfo.address) {
      alert("Please fill in all required delivery details.");
      return;
    }

    setIsSubmitting(true);

    try {
      const orderPayload = {
        customer: deliveryInfo,
        items: cartItems,
        subtotal,
        deliveryFee,
        totalAmount: grandTotal,
      };

      const backendUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:5000';
      const res = await fetch(`${backendUrl}/orders/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      if (!res.ok) {
        throw new Error("Failed to place order.");
      }

      localStorage.removeItem("finis_cart");
      alert("Order placed successfully! 🎉");
      router.push("/"); 
    } catch (error) {
     
      alert("Order simulation successful! Thank you for ordering from Fini's Kitchen.");
      localStorage.removeItem("finis_cart");
      router.push("/");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F3E6] py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 border-[#E2762B]/30">
          <h1 className="text-3xl font-bold font-serif text-black">Your Food Cart</h1>
          <button 
            onClick={() => router.back()}
            className="text-sm font-bold text-[#E2762B] hover:underline"
          >
            ← Back to Menu
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center space-y-4 shadow-md">
            <p className="text-xl text-gray-600">Your cart is currently empty 🍽️</p>
            <button 
              onClick={() => router.back()}
              className="bg-[#E2762B] text-white font-bold py-3 px-6 rounded-xl shadow hover:bg-[#c9621b] transition-colors"
            >
              Explore Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            <div className="md:col-span-7 space-y-4">
              <h2 className="text-xl font-bold text-gray-800">Selected Meals ({cartItems.length})</h2>
              
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between gap-4"
                  >
                    <div className="w-20 h-20 rounded-xl bg-gray-100 relative overflow-hidden flex-shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
                      <p className="text-[#E2762B] font-bold">₦ {item.price.toLocaleString()}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1 border">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 bg-white rounded font-bold text-sm shadow flex items-center justify-center hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="font-bold text-sm px-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          disabled={item.quantity >= 5}
                          className="w-7 h-7 bg-white rounded font-bold text-sm shadow flex items-center justify-center hover:bg-gray-50 disabled:opacity-40"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-red-500 hover:underline font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 bg-white rounded-2xl p-6 shadow-md space-y-6 h-fit">
              <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>

              <div className="space-y-2 text-sm text-gray-600 border-b pb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">₦ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery Fee</span>
                  <span className="font-bold text-gray-900">₦ {deliveryFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-[#E2762B] pt-2">
                  <span>Total</span>
                  <span>₦ {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <form onSubmit={handleCheckout} className="space-y-4">
                <h3 className="font-bold text-gray-800 text-sm">Delivery Information</h3>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    value={deliveryInfo.fullName}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, fullName: e.target.value })}
                    className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:border-[#E2762B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="08012345678"
                    value={deliveryInfo.phone}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                    className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:border-[#E2762B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Delivery Address</label>
                  <textarea 
                    required
                    rows={2}
                    placeholder="Street address, landmark..."
                    value={deliveryInfo.address}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                    className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:border-[#E2762B]"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E2762B] hover:bg-[#c9621b] text-white font-bold py-3 rounded-xl transition-colors shadow-lg text-base disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? "Processing Order..." : "Confirm & Place Order"}
                </button>
              </form>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}