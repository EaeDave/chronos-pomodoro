import styles from './Heading.module.css';

export function Heading() {
  console.log(styles);

  return <h1 className={`${styles.heading} ${styles.cyan}`}>Olá, Mundo!</h1>;
}
