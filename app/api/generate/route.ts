import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';
import {
  getDesignInspiration,
  analyzeColorPalette,
  optimizeLayout,
  getFontsForMood,
} from '@/lib/assistant/functions';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const systemPrompt = `This GPT is a specialized assistant built for the MakeWhiz app, designed exclusively to help users create beautiful and effective user interfaces (UIs) and web pages using AI. It must only respond to requests involving the generation of code for UI/webpages, including HTML/CSS/JavaScript, React.js, Nuxt.js, Ruby on Rails, Vue.js, ELM, and Python. If a user tries to engage in casual conversation or off-topic discussions, the GPT will respond with: "I understand your request but I am only made for creating UI Pages." The only exception to this rule is if the user is asking about a previously generated page, code, or UI.

The GPT must always respond with code—every reply should include working, meaningful code relevant to the user’s UI/webpage development request. It is trained with insights from top UI sources including Dribbble, Behance, Webgyaani, Pixso, and Flutter Awesome. Additionally, it has been visually trained on a variety of high-quality UI designs to understand modern visual aesthetics and structure.

In building React.js UIs, the GPT will leverage popular libraries such as Radix UI, DaisyUI, and Three.js to ensure robust, modern, and scalable interfaces. Its design decisions should prioritize usability, clarity, responsiveness, and aesthetic appeal, aligning with industry best practices and trends.

Output format examples:

Example 1:
User: "Design a pricing section with 3 tiers"
Output:
{
  "text": "This layout includes 3 plans, responsive cards, and strong call-to-actions.",
  "code": "..."
}

Example 2:
User: "Make a dark-mode hero section for a finance app"
Output:
{
  "text": "Minimal dark header with bold headline, subtext, and primary CTA.",
  "code": "..."
}

Respond ONLY with valid JSON. No markdown. No commentary. The JSON must have a "text" field (brief explanation) and a "code" field (the generated code with real line breaks, not escaped \\n).`;

  const functions = [
    {
      name: 'getDesignInspiration',
      description: 'Fetch design inspiration images from Dribbble or Behance',
      parameters: {
        type: 'object',
        properties: {
          platform: {
            type: 'string',
            enum: ['dribbble', 'behance'],
          },
          username: {
            type: 'string',
          },
        },
        required: ['platform', 'username'],
      },
    },
    {
      name: 'analyzeColorPalette',
      description: 'Extract key brand colors from an image URL',
      parameters: {
        type: 'object',
        properties: {
          imageUrl: {
            type: 'string',
          },
        },
        required: ['imageUrl'],
      },
    },
    {
      name: 'optimizeLayout',
      description: 'Improve a JSX/HTML layout for usability, spacing, and accessibility',
      parameters: {
        type: 'object',
        properties: {
          code: {
            type: 'string',
          },
        },
        required: ['code'],
      },
    },
    {
      name: 'getFontsForMood',
      description: 'Suggest font pairings based on the mood of a brand',
      parameters: {
        type: 'object',
        properties: {
          mood: {
            type: 'string',
          },
        },
        required: ['mood'],
      },
    },
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      functions,
      function_call: 'auto',
    });

    const choice = completion.choices[0];

    if (choice.finish_reason === 'function_call') {
      const { name, arguments: argsJson } = choice.message.function_call!;
      const args = JSON.parse(argsJson);

      let result;

      if (name === 'getDesignInspiration') {
        result = await getDesignInspiration(args);
      } else if (name === 'analyzeColorPalette') {
        result = await analyzeColorPalette(args);
      } else if (name === 'optimizeLayout') {
        result = await optimizeLayout(args);
      } else if (name === 'getFontsForMood') {
        result = await getFontsForMood(args);
      }

      return NextResponse.json({ result });
    }

    const response = choice.message?.content ?? '';
    const parsed = JSON.parse(response);
    return NextResponse.json({ text: parsed.text, code: parsed.code });
  } catch (error) {
    console.error('OpenAI error:', error);
    return NextResponse.json({ error: 'Failed to generate' }, { status: 500 });
  }
}
