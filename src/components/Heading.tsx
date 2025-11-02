import type React from 'react';
import styles from './Heading.module.css';

// typing props
type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  // destructuring
  // const { children } = props;
  console.log(children);

  console.log(styles);

  return <h1 className={`${styles.heading} ${styles.cyan}`}>{children}</h1>;
}
