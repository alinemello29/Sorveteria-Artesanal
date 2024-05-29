import Image from "next/image";
import styles from "./Rodape.module.css"
import Logo from "../../../../public/logo.png"

export default function Rodape() {
  return (
    <footer className={styles.container_rodape}>
      <div className={styles.container_informacoes}>
        <Image src={Logo} className={styles.img} alt="logomarca" />
        <div>
          <h3>ENDEREÇO</h3>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div>
          <h3>CONTATO</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div>
          <h3>HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <div className={styles.container_direito_autoral}>
        <p>Gelateria. Orgulhosamente desenvolvido por "Aline Melo"</p>
      </div>
    </footer>
  )
}
