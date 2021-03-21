import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Navbar></Navbar>
      <main></main>
      <Footer></Footer>
    </div>
  );
}
