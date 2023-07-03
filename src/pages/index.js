import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';

import styles from '../styles/Paginas.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>    
      </Head>
      <div className="container mx-auto">
        <header className={styles.title}>
          <div>
            <h1 className="font-bold text-4xl">Bem-vindo ao petshop Amuara</h1>
          </div>
        </header>
        <main className={styles.main}>
          <p className='mt-2 mb-2'>Atuamos em <b>Ribeirão Preto</b> e região levando cuidado e conforto para o seu pet. Venha nos fazer uma visita!</p>

          <p className='mt-2 mb-2'>Localização principal:</p>
          <ul>
            <li>
              CEP: 14015-040
            </li>
            <li>
              Rua: São Sebastião
            </li>
            <li>
              Bairro: Centro
            </li>
            <li>
              Cidade: Ribeirão Preto
            </li>
            <li>
              Estado: São Paulo
            </li>
          </ul>
          <div className={styles.centaliza_imagem}>
            <Image
              src="/assets/images/mapa.png"
              width={1000}
              height={850}
              alt="mapa de Ribeirão Preto"
            />
          </div>

          <p className='mt-2 mb-2'>Em nossas lojas, temos os cuidados voltados para:</p>

          <p className='mt-2 mb-2'>Gatos</p>
          <p className='mt-2 mb-2'>Cachorros</p>
          <p className='mt-2 mb-2'>Aves</p>

        </main>
      </div>
    </>
  )
}
