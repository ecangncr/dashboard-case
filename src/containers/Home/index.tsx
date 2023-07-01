import React from "react";
import styles from "./styles.module.scss";
import LoginCard from "@/components/LoginCard";

export default function Home() {
  return (
    <div className={styles.home}>
      <LoginCard />
    </div>
  );
}
