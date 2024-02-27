import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header/Header.component'
import Footer from '@/components/footer/Footer.component'

export const metadata: Metadata = {
    title: 'Geneva & Aldiar',
    description: 'Description',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
