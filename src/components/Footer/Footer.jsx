import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <p className={styles.footerText}>
        &copy; {new Date().getFullYear()} NC News
      </p>
    </footer>
  );
}
