import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Página principal</h1>
      <ul>
        <li>
          <Link href="/produtos">
            Produtos
          </Link>
        </li>
        <li>
          <Link href="/about">
            Sobre
          </Link>
        </li>
      </ul>
    </main>
  )
}
