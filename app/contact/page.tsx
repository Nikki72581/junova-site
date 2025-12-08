"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Thanks. We'll be in touch.");
        form.reset();
      } else {
        setStatus("Something went sideways. Try again.");
      }
    } catch {
      setStatus("Network issue. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="container-lg py-20">
      <div className="card p-10 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Let's create something the VARs will fear.</h1>
        
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {/* Replace with YOUR Web3Forms access key */}
          <input type="hidden" name="access_key" value="5e11c4de-e663-4551-a01b-469c6c741217" />
          
          {/* Optional: Customize email subject */}
          <input type="hidden" name="subject" value="New Junova Contact Form Submission" />
          
          {/* Optional: Specify where emails go (if different from signup email) */}
          {/* <input type="hidden" name="from_name" value="Junova Contact Form" /> */}

          <div>
            <label className="block text-sm text-white/70">Name</label>
            <input 
              name="name" 
              type="text"
              required 
              className="w-full mt-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-white/40" 
            />
          </div>

          <div>
            <label className="block text-sm text-white/70">Email</label>
            <input 
              name="email" 
              type="email" 
              required 
              className="w-full mt-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-white/40" 
            />
          </div>

          <div>
            <label className="block text-sm text-white/70">Message</label>
            <textarea 
              name="message" 
              rows={5} 
              required 
              className="w-full mt-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-white/40" 
            />
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="rounded-full px-6 py-3 bg-white text-black font-semibold shadow-glow hover:shadow-glow2 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>

          {status && <p className="text-sm text-white/70 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}