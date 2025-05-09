"use client";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";



export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending magic link
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1200);
  };

  const handleGoogleSignIn = () => {
    // Simulate Google sign in
    alert("Google sign-in coming soon!");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-yellow-50 to-white">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md border-2 border-black flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-purple-800 mb-2 font-heading">Sign in to MakeWhiz</h1>
        <p className="text-purple-700 mb-8 text-center">
          Get started with a magic link or sign in with Google.
        </p>
        {sent ? (
          <div className="w-full flex flex-col items-center">
            <div className="text-5xl mb-4 animate-bounce">📬</div>
            <p className="text-lg text-purple-800 font-semibold mb-2">Check your email!</p>
            <p className="text-purple-600 text-center text-sm">
              We sent a magic link to <span className="font-mono">{email}</span>
            </p>
            <button
              className="mt-8 text-sm text-purple-600 underline hover:text-purple-800"
              onClick={() => setSent(false)}
            >
              Back to sign in
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleMagicLink} className="w-full flex flex-col gap-4 mb-6">
              <label className="text-purple-800 font-semibold text-sm" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                autoFocus
                className="px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 outline-none transition text-lg bg-purple-50"
                placeholder="you@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl mt-2 shadow-lg border-2 border-black transition-all duration-200 "
                disabled={loading || !email}
              >
                {loading ? "Sending Magic Link..." : "Send Magic Link"}
              </button>
            </form>
            <div className="flex items-center w-full my-4">
              <div className="flex-1 h-px bg-purple-200" />
              <span className="mx-3 text-purple-400 text-sm font-semibold">or</span>
              <div className="flex-1 h-px bg-purple-200" />
            </div>
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-500 hover:border-black hover:shadow-lg hover:bg-gray-100 text-purple-800 font-bold py-3 rounded-xl shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="button"
              style={{
                transition: "box-shadow 0.2s, border-color 0.2s, background-color 0.8s",
              }}
            >
              <span className="bg-white rounded-full p-1 flex items-center justify-center shadow-sm">
                <FaGoogle className="w-6 h-6" />
              </span>
              <span className="text-base font-semibold tracking-tight">Continue with Google</span>
            </button>
          </>
        )}
      </div>
    </main>
  );
}
