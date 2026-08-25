'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TestGeneratorPage() {
  const [requirement, setRequirement] = useState('');
  const [testCases, setTestCases] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!requirement.trim()) return;
    setLoading(true);
    setTestCases('');

    try {
      const res = await fetch('/api/generate-tests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requirement }),
      });
      const data = await res.json();
      setTestCases(data.testCases || 'No test cases generated.');
    } catch {
      setTestCases('Error generating test cases. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-12 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-pink">AI Test Generator</h1>
        <Link href="/" className="text-secondary hover:text-cyan transition-colors">
          ← Back
        </Link>
      </div>

      <div className="glass p-6 space-y-4">
        <label className="block text-lg font-semibold text-text">
          Enter your requirement or user story
        </label>
        <textarea
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          placeholder="e.g. As a user, I want to be able to reset my password via email so that I can regain access to my account..."
          className="w-full h-40 p-4 bg-background border border-white/20 rounded-lg text-text placeholder-secondary focus:outline-none focus:ring-2 focus:ring-purple resize-none"
        />
        <button
          onClick={handleGenerate}
          disabled={loading || !requirement.trim()}
          className="px-6 py-3 bg-purple text-white rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
        >
          {loading ? 'Generating...' : 'Generate Test Cases'}
        </button>
      </div>

      {testCases && (
        <div className="glass p-6 space-y-3">
          <h2 className="text-xl font-semibold text-cyan">Generated Test Cases</h2>
          <pre className="whitespace-pre-wrap text-text text-sm leading-relaxed">
            {testCases}
          </pre>
        </div>
      )}
    </section>
  );
}
