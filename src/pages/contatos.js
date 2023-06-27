import Head from "next/head";

import styles from '../styles/Paginas.module.css'

import { FaPhoneAlt } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaBlogger } from 'react-icons/fa';

export default function Contatos(){
    return(
        <>
            <Head>
                <title>Contatos</title>
            </Head>
            <div className="container mx-auto">
                <header class="bg-red-300 text-white px-4 py-5 flex w-75 align-items-center justify-around">
                    <div className='flex-auto w-64'>
                        <h1 className="font-bold text-4xl">Página de contatos</h1>
                    </div>
                </header>
                <main className={styles.main}>
                    <ul>
                        <li className='flex align-items-baseline'>
                            <FaPhoneAlt /> <strong>Telefone:</strong> (XX)9 XXXX XXXX
                        </li>
                        <li className='flex align-items-baseline'>
                            <FaMailBulk /> <strong>E-mail:</strong> XXXXX@XXXXXX.com
                        </li>
                        <li className='flex align-items-baseline'>
                            <FaLinkedin /> <strong>Linkedin:</strong> https://www.linkedin.com/in/XXXXX-XXXX
                        </li>
                        <li className='flex align-items-baseline'>
                            <FaFacebookSquare /> <strong>Facebook:</strong> https://www.facebook.com/in/XXXXX-XXXX
                        </li>
                        <li className='flex align-items-baseline'>
                            <FaInstagramSquare /> <strong>Instagram:</strong> https://www.instagram.com/in/XXXXX-XXXX
                        </li>
                        <li className='flex align-items-baseline'>
                            <FaBlogger /> <strong>Blog:</strong> https://blog.google/intl/pt-br/XXXXX-XXXX
                        </li>
                    </ul>
                </main>
            </div>
        </>
    )
}