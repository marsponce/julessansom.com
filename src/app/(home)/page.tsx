// /src/app/(home)/page.tsx
import styles from './Index.module.css';

export default function Index() {
  return (
    <>
      <div className={styles.index}>
        <h1>
          <span>
            <span className={styles.jules}>JULES</span>{' '}
            <span className={styles.sansom}>SANSOM</span>
          </span>
        </h1>
      </div>
    </>
  );
}
