"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Logo from "../Logo";
import Label from "../Label";
import Input from "../Input";
import Button from "../Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginCard() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className={styles.card}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <h2>Sign In</h2>
      <p className={styles.info}>
        Enter your credentials to access your account
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          style={{ marginTop: "10px" }}
          disabled={!email || !password}>
          SIGN IN
        </Button>
      </form>
      <p className={styles.linkTitle}>
        Forgot your password?
        <Link href="/" className={styles.link}>
          Reset Password
        </Link>
      </p>
    </div>
  );
}
