import Link from 'next/link';
import styles from '../src/styles/Navbar.module.css';

export default function Navbar(){
    return(
      <div className="container mx-auto">
          <div className=" w-75 align-items-center justify-around">
            <ul className={styles.navbar}>
              <li className={styles.li}>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/produtos">
                  Produtos
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/contatos">
                  Contatos
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/about">
                  Sobre nós
                </Link>
              </li>
            </ul>
          </div>
      </div>
    )
}