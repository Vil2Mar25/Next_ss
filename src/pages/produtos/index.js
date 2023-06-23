import Link from 'next/link'
export default function Index(){
    return (
        <div className='container'>
            <h1>Página de produtos</h1>
            <ul>
                <li>
                    <Link href="/">
                        Voltar
                    </Link>
                </li>
                <li>
                    <Link href="produtos/pants/bluepants">
                        Calças azuis
                    </Link>
                </li>
                <li>
                    <Link href="produtos/pants/redpants">
                        Calças vermelhas
                    </Link>
                </li>
            </ul>
        </div>
    )
}