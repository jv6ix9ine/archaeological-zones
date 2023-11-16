import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import '@/app/globals.css'
import NavBar from '@/src/common/NavBar'
import { ArrowDownIcon } from '@heroicons/react/20/solid'
import { ThemeContext } from '@/src/context/ThemeContext'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zonas arqueológicas',
  description: 'La mejor App del IDGS73',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeContext attribute="class">
        <body className={`${raleway.className} bg-neutral-100 dark:bg-neutral-950 duration-300`} suppressHydrationWarning>
          <NavBar />
          <main className='w-full h-screen overflow-auto'>
            {children}
          </main>
        </body>
      </ThemeContext>
    </html>
  )
}
