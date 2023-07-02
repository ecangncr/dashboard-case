"use client";
import Logo from "@/components/Logo";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/constants";
import { usePathname } from "next/navigation";
const Sidebar: React.FC = (props) => {
  const pathName = usePathname();
  return (
    <aside className={styles.sidebar}>
      <Logo style={{ fontSize: "20px", margin: "0px auto" }} />
      <div className={styles.profile}>
        <div className={styles.profileImage}>
          <Image src="/images/avatar.png" alt="John Doe" fill priority />
        </div>
        <div className={styles.profileBody}>
          <h2>John Doe</h2>
          <p>Admin</p>
        </div>
      </div>
      <nav className={styles.nav}>
        {navigation.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`${styles.navItem} ${
              pathName === item.href ? styles.active : ""
            }`}>
            {item.icon}
            <p>{item.text}</p>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
