import React from 'react';
import styles from './incio.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.profileIcon}>P</div>
          <div>
            <p className={styles.userName}>Nome</p>
            <p className={styles.userPosition}>Posição</p>
          </div>
        </div>
        <div className={styles.menuIcon}>☰</div>
      </header>

      <main className={styles.grid}>
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>A</div>
              <div>
                <p className={styles.cardName}>Nome</p>
                <p className={styles.cardPosition}>Posição</p>
              </div>
              <div className={styles.cardMenu}>⋮</div>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardTitle}>Título</p>
              <p className={styles.cardSubtitle}>Horários</p>
              <p className={styles.cardInfo}>Informações gerais</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
