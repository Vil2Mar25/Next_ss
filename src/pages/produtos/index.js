import Head from 'next/head'

import { FaBone } from 'react-icons/fa';
import { FaPumpSoap } from 'react-icons/fa';
import { FaPuzzlePiece } from 'react-icons/fa';
import { FaVolleyballBall } from 'react-icons/fa';

import styles from '../../styles/Paginas.module.css'

export default function Index(){
    return (
        <>
            <Head>
                <title>Produtos</title>
            </Head>
            <div className="container mx-auto">
                <header className="bg-red-300 text-white px-4 py-5 flex w-75 align-items-center justify-around">
                    <div className='flex-auto w-64'>
                        <h1 className="font-bold text-4xl">Página de produtos</h1>
                    </div>
                </header>
                <main className={styles.main}>
                    <h5 className="font-bold text-4xl mt-2 mb-2">Todos os produtos para o conforto do seu pet</h5>
                    <ul className='flex justify-content-around'>
                        <li className='flex align-items-baseline mr-10'>
                            <FaBone />Alimentos
                        </li>
                        <li className='flex align-items-baseline mr-10'>
                            <FaPumpSoap />Higiene
                        </li>
                        <li className='flex align-items-baseline mr-10'>
                            <FaPuzzlePiece />Entretreenimento
                        </li>
                        <li className='flex align-items-baseline'>
                            <FaVolleyballBall/>Decoração
                        </li>
                    </ul>
                </main>
            </div>
        </>
    )
}