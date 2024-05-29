import Image from 'next/image'
import styles from './sabores.module.css'
import Imagem1 from '../../../public/sabor-oreo.png'
import Imagem2 from '../../../public/sabor-pistache.png'
import Imagem3 from '../../../public/sabor-cookies-avela.png'
import Imagem4 from '../../../public/sorbet-kiwi.png'
import Imagem5 from '../../../public/sorbet-morango.png'
import Imagem6 from '../../../public/sorbet-limao.png'

export default function Sabores () {
  return (
    <section className={styles.sabores_container}>
      <header className={`section_hero`}>
        <h1>Nossos sabores</h1>
      </header>
      <div className={`container ${styles.sabores_content}`}>
        <h2>Sabores de sorvete</h2>
        <div className={styles.cards_container}>
          <div className={styles.card}>
            <Image src={Imagem1} />
            <h3>Sorvete de Oreo</h3>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>
        
          <div className={styles.card}>
            <Image src={Imagem2} />
            <h3>Sorvete Pistache</h3>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>
       
          <div className={styles.card}>
            <Image src={Imagem3} />
            <h3>Sorvete Cookies & Avelã</h3>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>

          <div className={styles.card}>
            <Image src={Imagem4} />
            <h3>Sorvete de Kiwi</h3>
            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
          </div>

          <div className={styles.card}>
            <Image src={Imagem5} />
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>

          <div className={styles.card}>
            <Image src={Imagem6} />
            <h3>Sorvete de Limão Siciliano</h3>
            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
          </div>

        </div>
      </div>
    </section>
  )
}