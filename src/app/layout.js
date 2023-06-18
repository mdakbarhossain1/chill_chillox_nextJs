import DeliveryProvider from '../../context/DeliveryProvider'
import OrderProvider from '../../context/OrderProvider'
import Navbar from './component/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chill Chillox',
  description: 'This is restaurant website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DeliveryProvider>
          <OrderProvider>
            <Navbar />
            {children}
          </OrderProvider>
        </DeliveryProvider>

      </body>
    </html>
  )
}
