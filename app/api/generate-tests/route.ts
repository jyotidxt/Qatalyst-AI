import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { requirement } = await request.json();

    if (!requirement) {
      return NextResponse.json({ error: 'Requirement is required' }, { status: 400 });
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
                  text: `You are a senior QA engineer. Given the following software requirement, generate comprehensive test cases covering positive, negative, edge, and boundary scenarios. Format each test case with: Test ID, Title, Preconditions, Steps, Expected Result, and Priority (High/Medium/Low).

Requirement:
${requirement}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await res.json();
    const testCases =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No test cases generated.';

    return NextResponse.json({ testCases });
  } catch {
    return NextResponse.json({ error: 'Failed to generate test cases' }, { status: 500 });
  }
}
