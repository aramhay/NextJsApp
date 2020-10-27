import Link from "next/link";
import styles from "./form.module.css";

 function Home() {
  return (
    <div className="container">
      <Link href="/layout">
        <a className={styles.customLink}>List</a>
      </Link>

      <Link href="/postdata">
        <a className={styles.customLink}>Posts</a>
      </Link>
    </div>
  );
}
export default Home
