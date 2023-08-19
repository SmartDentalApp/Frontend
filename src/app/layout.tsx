import './styles/globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

const DMSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Dental',
  description: 'Seu sistema de gerenciamento odontológico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={DMSans.className}>{children}</body>
    </html>
  )
}
