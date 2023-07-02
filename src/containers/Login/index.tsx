import React from "react";
import styles from "./styles.module.scss";
import LoginCard from "@/components/LoginCard";
type Props = {};

export default function Login({}: Props) {
  return (
    <div className={styles.login}>
      <LoginCard />
    </div>
  );
}
