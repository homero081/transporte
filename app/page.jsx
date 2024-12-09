import styles from './page.module.css'; 
import './globals.css'; 
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Transporte Universitário</h1>
        <p>O transporte que conecta você à universidade com segurança e conforto.</p>
      </header>

      <main className={styles.main}>
        <section className={styles.info}>
          <h2>Por que escolher nosso transporte?</h2>
          <ul>
            <li>Veículos confortáveis e com ar-condicionado.</li>
            <li>Motoristas experientes e qualificados.</li>
            <li>Horários adaptados à sua rotina universitária.</li>
            <li>Reservas rápidas e fáceis pelo aplicativo.</li>
          </ul>
        </section>

        <section className={styles.banner}>
          <h3>Reserve seu automóvel agora!</h3>
          <p>Garantimos um transporte seguro e pontual para suas aulas e compromissos.</p>
          <Link href="/reserva">
            <button className={styles.reservaButton}>Fazer sua Reserva</button>
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Transporte Universitário. Todos os direitos reservados.</p>
        <p>
          <Link href="/contato">Contato</Link> | <Link href="/faq">Perguntas Frequentes</Link>
        </p>
      </footer>
    </div>
  );
}
