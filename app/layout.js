import './globals.css'
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Portfolio',
  description: 'Projects By Rhishav',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics/>
        </body>
    </html>
  )
}
