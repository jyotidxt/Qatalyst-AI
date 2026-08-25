import './globals.css';

export const metadata = {
  title: 'Qatalyst AI',
  description: 'AI‑powered Quality Engineering Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-background text-text">
      <body className="h-full flex flex-col">
        <header className="p-4 bg-surface shadow-md flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink">Qatalyst AI</h1>
        </header>
        <main className="flex-1 container mx-auto p-4 overflow-y-auto">
          {children}
        </main>
        <footer className="p-2 bg-surface text-secondary text-center text-sm">
          © 2026 Qatalyst AI. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
