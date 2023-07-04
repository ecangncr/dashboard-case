"use client";
import Input from "@/components/Input";
import styles from "./styles.module.scss";
import SearchIcon from "@/components/Icons/Search";
import Button from "@/components/Button";
import { useCustomParams } from "@/utils";

const TableHead: React.FC = () => {
  const { searchParams, updateSearchParams } = useCustomParams();
  const search = searchParams.get("search") || "";
  return (
    <div className={styles.headWrapper}>
      <div className={styles.tableHead}>
        <h3>Students List</h3>
        <div className={styles.wrapper}>
          <div className={styles.inputArea}>
            <Input
              placeholder="Search..."
              className={styles.input}
              value={search}
              onChange={(e) => {
                updateSearchParams({
                  search: e.target.value,
                  page: 1,
                });
              }}
            />

            <SearchIcon className={styles.searchIcon} />
          </div>
          <Button
            className={styles.button}
            onClick={() => {
              updateSearchParams({
                action: "create",
              });
            }}>
            ADD NEW STUDENT
          </Button>
        </div>
      </div>
      <div className={styles.thead}>
        <h5>Name</h5>
        <h5>Email</h5>
        <h5>Phone</h5>
        <h5>Website</h5>
        <h5>Company Name</h5>
      </div>
    </div>
  );
};

export default TableHead;
