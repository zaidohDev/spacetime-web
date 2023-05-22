import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as RobotoFlex,
  Bai_Jamjuree as BaiJamJuree,
} from 'next/font/google'

const roboto = RobotoFlex({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamJuree = BaiJamJuree({
  subsets: ['latin'],
  variable: '--font-bai-jamjuree',
  weight: '700',
})
export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo constrída com React, NextJs, Typescript e TailwindCss',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamJuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
