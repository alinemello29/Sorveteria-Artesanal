import Image from "next/image";
import Link from "next/link";
import styles from "./Topo.module.css";
import Logo from "../../../../public/logo.png"

export default function Topo() {
  return (
    <header className={styles.header_container}>
      <div className="container">
        <div className={styles.header_content}>
        <Image className={styles.img} src={Logo} alt="logomarca"/>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/sabores">Sabores</Link>
            <Link href="/sobre">Sobre</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}