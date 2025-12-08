"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
        setShowSuccess(true);
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

  if (showSuccess) {
    return (
      <section className="container-lg py-20">
        <div className="card p-10 max-w-2xl mx-auto text-center">
          <div className="success-animation">
            <div className="checkmark-circle">
              <svg className="checkmark" viewBox="0 0 52 52">
                <circle className="checkmark-circle-path" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-4">
            Hell yes. Let's do this.
          </h1>
          
          <p className="text-xl text-white/80 mb-2">
            We can't wait to talk.
          </p>
          
          <p className="text-white/60 mb-8">
            You'll hear from us soon. In the meantime, start dreaming about what freedom from vendor lock-in looks like.
          </p>
          
          <button 
            onClick={() => setShowSuccess(false)}
            className="text-white/70 hover:text-white transition underline"
          >
            Send another message
          </button>
        </div>

        <style jsx>{`
          .success-animation {
            animation: slideUp 0.5s ease-out;
          }

          .checkmark-circle {
            width: 100px;
            height: 100px;
            margin: 0 auto;
          }

          .checkmark {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: block;
            stroke-width: 3;
            stroke: #4CAF50;
            stroke-miterlimit: 10;
            box-shadow: inset 0px 0px 0px #4CAF50;
            animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
          }

          .checkmark-circle-path {
            stroke-dasharray: 166;
            stroke-dashoffset: 166;
            stroke-width: 3;
            stroke-miterlimit: 10;
            stroke: #4CAF50;
            animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
          }

          .checkmark-check {
            transform-origin: 50% 50%;
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            stroke: #4CAF50;
            stroke-width: 3;
            animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
          }

          @keyframes stroke {
            100% {
              stroke-dashoffset: 0;
            }
          }

          @keyframes scale {
            0%, 100% {
              transform: none;
            }
            50% {
              transform: scale3d(1.1, 1.1, 1);
            }
          }

          @keyframes fill {
            100% {
              box-shadow: inset 0px 0px 0px 30px #4CAF50;
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="container-lg py-20">
      <div className="max-w-5xl mx-auto">
        {/* Story Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's create something the VARs will fear.
          </h1>
          
          <div className="prose prose-invert prose-lg mx-auto text-white/80 space-y-4">
            <p>
              You've been sold to. Upsold. Cross-sold. Locked into partnerships that benefit everyone except you. 
              Software that promised freedom but delivered dependency.
            </p>
            
            <p className="text-xl font-semibold text-white">
              We're here to flip that script.
            </p>
            
            <p>
              At Junova, we don't sell software. We don't take kickbacks. We don't care about vendor quotas. 
              We build freedom—the kind where your systems work for <em>you</em>, not the other way around.
            </p>
            
            <p>
              Your ERP should be a tool, not a trap. Your data should be yours. Your decisions should be 
              based on what's best for your business, not what's best for a VAR's commission check.
            </p>
            
            <p className="text-lg text-white/90">
              <strong>Sound like a different approach?</strong> That's because it is.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="card p-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Ready to talk?</h2>
          <p className="text-white/70 mb-6">Tell us what you're dealing with. No sales pitch. Just real talk.</p>
          
          <form onSubmit={onSubmit} className="space-y-4">
            <input type="hidden" name="access_key" value="5e11c4de-e663-4551-a01b-469c6c741217" />
            <input type="hidden" name="subject" value="New Junova Contact Form Submission" />

            <div>
              <label className="block text-sm text-white/70 mb-1">Name</label>
              <input 
                name="name" 
                type="text"
                required 
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-white/40 transition" 
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input 
                name="email" 
                type="email" 
                required 
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-white/40 transition" 
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-1">What brings you here?</label>
              <textarea 
                name="message" 
                rows={5} 
                required
                placeholder="Tell us about your current setup, what's not working, or what you're trying to build..."
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-white/40 transition" 
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full px-6 py-3 bg-white text-black font-semibold shadow-glow hover:shadow-glow2 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Let's Talk"}
            </button>

            {status && <p className="text-sm text-red-400 mt-2">{status}</p>}
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            No sales calls. No vendor pitches. Just independent advisory that puts your business first.
          </p>
        </div>
      </div>
    </section>
  );
}