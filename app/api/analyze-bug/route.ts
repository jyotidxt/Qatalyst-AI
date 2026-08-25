import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { bugReport } = await request.json();

    if (!bugReport) {
      return NextResponse.json({ error: 'Bug report is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a senior software engineer and bug analyst. Analyze the following bug report and provide:

1. **Root Cause Analysis** - What is likely causing this bug
2. **Severity Assessment** - Critical/High/Medium/Low with justification
3. **Impact Analysis** - What areas of the application are affected
4. **Suggested Fix** - Step-by-step approach to resolve the bug
5. **Prevention** - How to prevent similar bugs in the future
6. **Related Test Cases** - Test cases to add to prevent regression

Bug Report:
${bugReport}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await res.json();
    const analysis =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No analysis generated.';

    return NextResponse.json({ analysis });
  } catch {
    return NextResponse.json({ error: 'Failed to analyze bug' }, { status: 500 });
  }
}
