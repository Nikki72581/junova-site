"use client";

export default function ClientLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Client Login</h1>
          <p className="text-white/60">Access your account</p>
        </div>

        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 focus:border-junova-accent focus:outline-none text-white placeholder-white/40"
                placeholder="Enter your email"
                disabled
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 focus:border-junova-accent focus:outline-none text-white placeholder-white/40"
                placeholder="Enter your password"
                disabled
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-junova-accent/20 border border-junova-accent/40 text-white/50 cursor-not-allowed"
              disabled
            >
              Login (Coming Soon)
            </button>

            <p className="text-center text-sm text-white/40 mt-4">
              This login portal is currently under development
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
