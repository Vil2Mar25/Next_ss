import Link from 'next/link';

export default function Navbar(){
    return(
        <div className='flex-auto w-64'>
          <ul className="grid grid-cols-2 gap-2">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/produtos">
                Produtos
              </Link>
            </li>
            <li>
              <Link href="/about">
                Sobre nós
              </Link>
            </li>
          </ul>
        </div>
    )
}