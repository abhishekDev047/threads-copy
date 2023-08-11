import Topbar from '@/components/shared/Topbar';
import '../globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';
import Bottombar from '@/components/shared/Bottombar';
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads',
  description: 'A simple Next.js 13 Threads copy app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <main className='flex flex-row'>

        

        <Topbar />

        <LeftSidebar />

        <section className='main-container'>
            <div className="w-full w-max-4xl">
              {children}
            </div>
        </section>

        <RightSidebar />

        <Bottombar />
    </main>
      </body>
    </html>
    </ClerkProvider>
  )
}
