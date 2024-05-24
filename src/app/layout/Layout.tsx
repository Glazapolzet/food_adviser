import { Outlet } from "react-router-dom";
import { Header } from "widgets/header";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
