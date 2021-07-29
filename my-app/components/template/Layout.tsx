import { FC, Fragment } from "react";
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from "../../styles/components/template/layout.module.css";

interface layoutProps {
  children: FC | JSX.Element;
  title: string;
}

const Layout = ({ children, title }: layoutProps) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Welcome to my world!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <NavBar />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
