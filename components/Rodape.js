import styles from '../src/styles/Rodape.module.css'
export default function Rodape(){
    return(
        <div className="container mx-auto">
            <footer className={styles.footer}>
                <div className='flex-auto w-64'>
                    <p className={styles.titulo}>Todos os direitos reservados &copy;</p>
                </div>
            </footer>
        </div>
    )
}