import Head from 'next/head'

import styles from '../styles/Paginas.module.css'

export default function About(){
    return (
        <>
            <Head>
                <title>Sobre nós</title>
            </Head>
            <div className="container mx-auto">
                <header class="bg-red-300 text-white px-4 py-5 flex w-75 align-items-center justify-around">
                    <div className='flex-auto w-64'>
                        <h1 className="font-bold text-4xl">Página de sobre</h1>
                    </div>
                </header>
                <main className={styles.main}>
                    <p className='mt-2 mb-2'>O grupo <strong>Amuara</strong>, uma empresa especializada no ramo de petshop, possui lojas em Ribeirão Preto e região metropolitana de São Paulo. Surgimos em meio a demanda crescente não região por empresas especializadas em cuidado e bem-estar de pets. Nossos profissionais são selecionados visando o atendimentos de alta qualidade e excelência, visando a satisfação dos pets e de seus guardiões.</p>
                    <p className='mt-2 mb-2'>Venha conhecer uma de nossas lojas mais próxima de sua residência. Você pode acompanhar os depois de nossos clientes na seção a seguir:</p>
                    <p className='mt-2 mb-2'>Cliente fulano002: Atendimento perfeito</p>
                    <p className='mt-2 mb-2'>Cliente fulano005: Atendimento perfeito</p>
                    <p className='mt-2 mb-2'>Cliente fulano006: Atendimento perfeito</p>
                    <p className='mt-2 mb-2'>Cliente fulano016: Atendimento perfeito</p>
                    <p className='mt-2 mb-2'>Cliente fulano029: Atendimento perfeito</p>

                </main>
            </div>
        </>
    )
}