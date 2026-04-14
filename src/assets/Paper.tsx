// /src/assets/Paper.tsx

import PaperSVG from './paper.svg';
import styles from './Paper.module.css';
import Image from 'next/image';

export default function Paper() {
  return (
    <div className={styles.paper}>
      <Image src={PaperSVG} alt="" aria-label="" aria-hidden />
    </div>
  );
}
