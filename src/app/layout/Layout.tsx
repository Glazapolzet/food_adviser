import { Outlet } from "react-router-dom";
import { Header } from "widgets/header";
import styles from "./Layout.module.scss";
import { FC } from "react";

export const Layout: FC = () => {
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
