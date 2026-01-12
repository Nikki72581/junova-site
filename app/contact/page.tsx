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
      <div className="max-w-4xl mx-auto">
        {/* Personal Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Hi, it's me, Nicole.
          </h1>

          <div className="prose prose-invert prose-lg max-w-none text-white/90 space-y-4 leading-relaxed">
            <p>
              If you're on this page, it's probably because we just met, or someone sent you here because you're trying to solve something messy. Either way, welcome.
            </p>

            <p>
              I've spent years in the ERP + SMB software world, working with systems like Sage, Acumatica, Microsoft Dynamics, and NetSuite. I've also lived this from more angles than most people realize exist: end user, consultant, VAR-side, ISV-side, and product leadership. So I don't just understand the software, I understand the reality around it: the people, the processes, the pressure, and the "how is this still held together" spreadsheets.
            </p>

            <p>
              Today, I run Junova as an independent, with a small team and a wide network of trusted specialists.
            </p>

            <p className="text-xl font-semibold text-white pt-4">
              What matters to me is pretty simple:
            </p>

            <p>
              We help you fix the process first and choose the tools second.<br />
              And if we're not the right team for the job, we'll tell you that up front. No ego, no upsell, no pretending.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 my-8">
              <p className="font-semibold text-white mb-3">We can help with:</p>
              <ul className="space-y-2 text-white/90">
                <li>ERP consulting + implementation support</li>
                <li>Process/workflow cleanup (aka: "why is this taking 12 steps?")</li>
                <li>Technical development + customization</li>
                <li>Pre-sales support and decision guidance when you're comparing solutions</li>
              </ul>
            </div>

            <p>
              If you're looking for someone who's direct, practical, and not here to waste your time, you're in the right place.
            </p>

            <p className="font-semibold text-white">
              Tell me what you're trying to solve using the form below, and we'll take it from there.
            </p>
          </div>
        </div>

        {/* Booking Button */}
        <div className="text-center mb-12">
          <a
            href="https://outlook.office.com/bookwithme/user/acab9733ad464b189c2e7e375475706b@junova.io?anonymous&ismsaljsauthenabled&ep=plink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-4 bg-white text-black font-semibold text-lg shadow-glow hover:shadow-glow2 transition"
          >
            Book a Call with Me
          </a>
          <p className="text-white/60 text-sm mt-3">
            Or fill out the form below and I'll reach out
          </p>
        </div>

        {/* Contact Form */}
        <div className="card p-8 md:p-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

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
              <label className="block text-sm text-white/70 mb-1">What are you trying to solve?</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your current setup, what's not working, or what you're trying to build..."
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-white/40 transition"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full px-6 py-3 bg-white text-black font-semibold shadow-glow hover:shadow-glow2 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-sm text-red-400 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}