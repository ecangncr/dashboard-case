import React from "react";
import styles from "./styles.module.scss";
import BookmarkIcon from "@/components/Icons/Bookmark";
import GraduationIcon from "@/components/Icons/Graduation";
import UsdSquareIcon from "@/components/Icons/UsdSquare";
import UserIcon from "@/components/Icons/User";

export default function Home() {
  const cardList = [
    {
      icon: <GraduationIcon />,
      title: "Students",
      count: "243",
      className: styles.students,
    },
    {
      icon: <BookmarkIcon />,
      title: "Course",
      count: "13",
      className: styles.course,
    },
    {
      icon: <UsdSquareIcon />,
      title: "Payments",
      count: "556,000₺",
      className: styles.payments,
    },
    {
      icon: <UserIcon />,
      title: "Users",
      count: "3",
      className: styles.users,
    },
  ];
  return (
    <div className={styles.home}>
      {cardList.map((item, index) => (
        <div key={index} className={item.className}>
          {item.icon}
          <p className={styles.title}>{item.title}</p>
          <p className={styles.count}>{item.count}</p>
        </div>
      ))}
    </div>
  );
}
