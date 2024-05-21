import { useState } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.card}>
      <button
        className={styles.button}
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      <p className={styles.text}>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
