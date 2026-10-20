"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      alert("Thank you for reaching out! We will get back to you shortly.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F8F3E6] py-12 px-4 flex justify-center items-center">
      
      <div className="bg-[#F8F3E6] rounded-3xl p-6 md:p-10 max-w-2xl w-full shadow-lg flex flex-col space-y-8">
        
       
        <div className="flex items-center gap-2">
          <span className="italic font-serif text-[#D3732B] text-lg tracking-wider">
            CONTACT US
          </span>
          <div className="h-[1px] w-12 bg-[#D3732B]"></div>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight font-serif">
          Get In Touch With <br />
          Fini's Kitchen
        </h1>

        <p className="text-gray-700 text-base leading-relaxed">
          Have a question about our menu, need help with an order, or want to book a special request? We would love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
        
          <div className="space-y-4 text-sm font-medium text-gray-800 bg-white/60 p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-[#E2762B] text-base mb-2">Our Details</h3>
            
            <p className="flex items-start gap-3">
              <span className="text-lg">📍</span>
              <span>Beside Tobis hospital Akenfa 3 Yenagoa Bayelsa State</span>
            </p>

            <p className="flex items-start gap-3">
              <span className="text-lg">📞</span>
              <span className="text-blue-700 underline">
                08066572722, 07049047103, 09064464851
              </span>
            </p>

            <p className="flex items-center gap-3">
              <span className="text-lg">✉️</span>
              <span>fini'skitchen@gmail.com</span>
            </p>

            <p className="flex items-center gap-3">
              <span className="text-lg">⏰</span>
              <span>9:00am - 10:30pm</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between">
            <h3 className="font-bold text-[#E2762B] text-base">Send Us a Message</h3>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Your Name</label>
              <input 
                type="text" 
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:border-[#E2762B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:border-[#E2762B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Message</label>
              <textarea 
                required
                rows={3}
                placeholder="Type your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:border-[#E2762B]"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-[#E2762B] hover:bg-[#c9621b] text-white font-bold py-2.5 rounded-xl transition-colors shadow text-sm disabled:opacity-50 mt-2"
            >
              {isSubmitted ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>

        <div className="pt-4 flex justify-between items-center border-t border-[#E2762B]/20">
          <button
            onClick={() => router.back()}
            className="text-sm font-bold text-[#E2762B] hover:underline"
          >
            ← Back
          </button>

          <button
            onClick={() => router.push("/menu")}
            className="bg-[#E2762B] hover:bg-[#c9621b] text-white font-bold py-2.5 px-6 rounded-full shadow transition-all duration-300 hover:scale-105 text-sm"
          >
            View Menu →
          </button>
        </div>

      </div>
    </div>
  );
}