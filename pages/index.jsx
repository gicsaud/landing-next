import Header from "../components/header";
import Welcome from "@/components/welcome";
import styles from "./Home.module.scss";
import Features from "@/components/features";
import Contato from "@/components/contato";

export default function Home() {
  return (
  <div className={styles.container}>
    <Header />
    <Welcome />
    <Features />
    <Contato />

  </div>
  );
}

