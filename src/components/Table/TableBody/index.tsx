"use client";
import PenIcon from "@/components/Icons/Pen";
import styles from "./styles.module.scss";
import Image from "next/image";
import TrashIcon from "@/components/Icons/Trash";
import { Skeleton } from "@/components/Skeleton";
import { IUser } from "@/interfaces";
import { useCustomParams } from "@/utils";
type Props = {
  users: IUser[] | undefined;
};
const TableBody: React.FC<Props> = ({ users }) => {
  const { updateSearchParams } = useCustomParams();
  return (
    <div className={styles.tableBody}>
      {!users
        ? Array.from(Array(6), (_, index) => index + 1).map((item, index) => (
            <div key={index} className={styles.loading}>
              <Skeleton />
            </div>
          ))
        : users?.map((item: IUser) => (
            <div key={item.id} className={styles.tableRow}>
              <div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    fill
                    alt={`${item.firstName} ${item.lastName}`}
                  />
                </div>
              </div>
              <p>
                {item.firstName} {item.lastName}
              </p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>{item.domain}</p>
              <p>{item.company.name}</p>
              <div className={styles.iconWrapper}>
                <button
                  onClick={() => {
                    updateSearchParams({
                      action: "edit",
                      id: item.id,
                    });
                  }}>
                  <PenIcon />
                </button>
                <button
                  onClick={() => {
                    updateSearchParams({
                      action: "delete",
                      id: item.id,
                    });
                  }}>
                  <TrashIcon />
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default TableBody;
