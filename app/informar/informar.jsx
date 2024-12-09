import React from 'react';
import styles from './informar.module.css';

export default function Menu() {
  return (
    <div className={styles.page}>
      {/* Cabeçalho */}
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

      {/* Menu de opções */}
      <nav className={styles.menu}>
        <ul>
          <li>
            <span className={styles.icon}>⚙️</span>
            Configurações
          </li>
          <li>
            <span className={styles.icon}>🔔</span>
            Notificações
          </li>
          <li>
            <span className={styles.icon}>⭐</span>
            Reviews
          </li>
          <li>
            <span className={styles.icon}>📞</span>
            Contato
          </li>
        </ul>
      </nav>
    </div>
  );
}
