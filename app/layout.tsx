import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cameron Monaghan — Full Stack Developer',
  description:
    'Full stack developer, AI tinkerer, and builder of things. Based in Mount Pleasant, SC.',
  keywords: [
    'Cameron Monaghan',
    'Full Stack Developer',
    'TypeScript',
    'JavaScript',
    'AI',
    'Scout',
    'Web Development',
  ],
  openGraph: {
    title: 'Cameron Monaghan — Full Stack Developer',
    description: 'Full stack developer, AI tinkerer, and builder of things.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
