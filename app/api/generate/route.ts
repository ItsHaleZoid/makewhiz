import { NextResponse } from 'next/server';

const cannedResponses: Record<string, { text: string; code: string }> = {
  "Create a pricing table in React": {
    text: "Three-column responsive pricing with emphasized middle plan.",
    code: `export default function Pricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">...</div>
  )
}`
  },
  "Make a Nuxt hero section for a blog": {
    text: "A Vue/Nuxt hero with centered headline and call-to-action.",
    code: `<template>
  <section class="text-center py-20 bg-gray-100">...</section>
</template>`
  },
  "Rails ERB form with Tailwind": {
    text: "Signup form with Rails form helper and Tailwind styling.",
    code: `<%= form_with url: '/signup', method: :post, class: 'space-y-4' do |f| %>
  <%= f.label :email, class: 'block text-sm' %>
  <%= f.text_field :email, class: 'input-class' %>
<% end %>`
  },
  "Create a login page with neon style": {
    text: "Neon-style login form with glowing accents and dark background.",
    code: `<div class="min-h-screen flex items-center justify-center bg-black">
  <form class="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-sm border border-neon-pink" style="box-shadow: 0 0 20px #ff00cc, 0 0 40px #333;">
    <h2 class="text-3xl font-bold mb-6 text-center text-neon-pink" style="text-shadow: 0 0 8px #ff00cc;">Sign In</h2>
    <div class="mb-4">
      <label class="block text-neon-blue mb-2" for="email" style="text-shadow: 0 0 6px #00eaff;">Email</label>
      <input class="w-full px-4 py-2 rounded bg-black border border-neon-blue text-white focus:outline-none focus:ring-2 focus:ring-neon-blue" id="email" type="email" />
    </div>
    <div class="mb-6">
      <label class="block text-neon-blue mb-2" for="password" style="text-shadow: 0 0 6px #00eaff;">Password</label>
      <input class="w-full px-4 py-2 rounded bg-black border border-neon-blue text-white focus:outline-none focus:ring-2 focus:ring-neon-blue" id="password" type="password" />
    </div>
    <button type="submit" class="w-full py-2 rounded bg-neon-pink text-white font-bold hover:bg-pink-600 transition" style="box-shadow: 0 0 10px #ff00cc;">Login</button>
  </form>
  <style>
    .text-neon-pink { color: #ff00cc; }
    .border-neon-pink { border-color: #ff00cc; }
    .bg-neon-pink { background: #ff00cc; }
    .text-neon-blue { color: #00eaff; }
    .border-neon-blue { border-color: #00eaff; }
    .focus\\:ring-neon-blue:focus { box-shadow: 0 0 8px #00eaff; }
  </style>
</div>`
  }
};

export async function POST(req: Request) {
  const { prompt } = await req.json();

  if (prompt in cannedResponses) {
    const { text, code } = cannedResponses[prompt];
    return NextResponse.json({ text, code });
  }

  // Default fallback for unrelated prompts
  return NextResponse.json({
    text: "I’m here to help you design web interfaces. Try describing a section or layout you’d like to build.",
    code: ""
  });
}
