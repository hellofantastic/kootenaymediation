import { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "About | Kootenay Mediation",
  description: "Kootenay Mediation service is run by Judah Harrison, who offers a secure and supportive environment in Nelson, BC for families and individuals seeking peaceful conflict resolution",
};

export default function About() {
  return <div className={styles.main}>About</div>;
}