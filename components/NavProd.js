import Link from 'next/link';

export default function NavProd(){
    return(
        <ul className="grid grid-cols-3 gap-2">
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
    )
}