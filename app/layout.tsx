import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'], weight: ['300', '400', '500', '700'] }) // 300:light, 400:regular, 500:medium and 700:bold

export const metadata: Metadata = {
  title: 'Calendar',
  description: 'React 연습 - 현재날짜 기준 달력 만들기',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body className={notoSansKr.className}>{children}</body>
    </html>
  )
}
