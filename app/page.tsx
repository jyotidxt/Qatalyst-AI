import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen space-y-8">
      {/* Aurora background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple via-cyan to-blue opacity-30 pointer-events-none" />

      {/* Hero */}
      <h1 className="text-5xl font-extrabold text-center text-pink glass p-6">
        AI‑Powered Quality Engineering
      </h1>
      <p className="text-xl text-text text-center max-w-2xl">
        Generate intelligent test cases, analyze bugs, automate browser testing and make smarter release decisions.
      </p>
      <div className="flex gap-4">
        <Link href="/test-generator" className="px-6 py-3 bg-purple text-white rounded-full hover:scale-105 transition-transform">
          Try Test Generator
        </Link>
        <Link href="/bug-intelligence" className="px-6 py-3 bg-cyan text-white rounded-full hover:scale-105 transition-transform">
          Bug Intelligence
        </Link>
      </div>
    </section>
  );
}
