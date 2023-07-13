import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Véronie Cazeau: Self-Starter with Creative Expertise and Exceptional Organizational Skill.',
  description: 'I have a strong passion for Information Technology and I consistently strive to find avenues for self-improvement through learning. My diverse range of interests includes development, UX/UI design, cloud computing, DevSecOps, and project management.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
