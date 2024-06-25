import { Outlet } from "react-router-dom";
import { Header } from "widgets/header";
import styles from "./Layout.module.scss";
import { type FC, Suspense } from "react";
import { Footer } from "widgets/footer";
import { SpinnerCircular } from "shared/ui";

export const Layout: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={
            <SpinnerCircular
              size={60}
              thickness={135}
              color={"#FFFBF2"}
              secondaryColor={"#EE6352"}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
};
