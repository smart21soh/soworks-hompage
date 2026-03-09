import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my stunning dark mode portfolio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
