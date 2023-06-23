import Link from 'next/link'

export default function About(){
    return (
        <div className='container'>
            <h1>Página de About</h1>
            <ul>
                <li>
                    <Link href="/">
                        Voltar
                    </Link>
                </li>
            </ul>
        </div>
    )
}