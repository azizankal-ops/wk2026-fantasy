export const metadata = {
  title: 'WK 2026 Fantasy League',
  description: 'Fantasy Football voor het WK 2026',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
