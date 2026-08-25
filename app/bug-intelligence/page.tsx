'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BugIntelligencePage() {
  const [bugReport, setBugReport] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!bugReport.trim()) return;
    setLoading(true);
    setAnalysis('');

    try {
      const res = await fetch('/api/analyze-bug', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bugReport }),
      });
      const data = await res.json();
      setAnalysis(data.analysis || 'No analysis generated.');
    } catch {
      setAnalysis('Error analyzing bug. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-12 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-cyan">Bug Intelligence</h1>
        <Link href="/" className="text-secondary hover:text-pink transition-colors">
          ← Back
        </Link>
      </div>

      <div className="glass p-6 space-y-4">
        <label className="block text-lg font-semibold text-text">
          Describe the bug or paste an error log
        </label>
        <textarea
          value={bugReport}
          onChange={(e) => setBugReport(e.target.value)}
          placeholder="e.g. Users are getting a 500 error when trying to checkout with a promo code. The error log shows: TypeError: Cannot read property 'discount' of undefined..."
          className="w-full h-40 p-4 bg-background border border-white/20 rounded-lg text-text placeholder-secondary focus:outline-none focus:ring-2 focus:ring-cyan resize-none"
        />
        <button
          onClick={handleAnalyze}
          disabled={loading || !bugReport.trim()}
          className="px-6 py-3 bg-cyan text-white rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
        >
          {loading ? 'Analyzing...' : 'Analyze Bug'}
        </button>
      </div>

      {analysis && (
        <div className="glass p-6 space-y-3">
          <h2 className="text-xl font-semibold text-purple">Bug Analysis</h2>
          <pre className="whitespace-pre-wrap text-text text-sm leading-relaxed">
            {analysis}
          </pre>
        </div>
      )}
    </section>
  );
}
