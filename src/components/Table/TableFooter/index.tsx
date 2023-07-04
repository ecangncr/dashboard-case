import DropdownIcon from "@/components/Icons/Dropdown";
import styles from "./styles.module.scss";
import ArrowLeftIcon from "@/components/Icons/ArrowLeft";
import ArrowRightIcon from "@/components/Icons/ArrowRight";
import { useCustomParams } from "@/utils";

type Props = {
  count: number;
};

const TableFooter: React.FC<Props> = ({ count }) => {
  const { searchParams, updateSearchParams } = useCustomParams();
  const limit = Number(searchParams.get("limit")) || 6;
  const page = Number(searchParams.get("page")) || 1;

  return (
    <div className={styles.tableFooter}>
      <div className={styles.rowsArea}>
        <p>Rows per page:</p>
        <select
          value={limit}
          onChange={(event) => {
            updateSearchParams({
              limit: Number(event.target.value),
              page: 1,
            });
          }}>
          {Array.from(Array(10), (_, i) => i + 1).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <DropdownIcon
          style={{
            width: "12px",
            height: "12px",
            flexShrink: 0,
            color: "#9FA2B4",
          }}
        />
      </div>

      <p className={styles.pageCount}>
        {`${(page - 1) * limit + 1}-${Math.min(
          page * limit,
          count
        )} of ${count}`}
      </p>
      <div className={styles.iconArea}>
        <button
          onClick={() => {
            if (page > 1) {
              updateSearchParams({
                page: page - 1,
              });
            }
          }}>
          <ArrowLeftIcon />
        </button>
        <button
          onClick={() => {
            if (page * limit < count) {
              updateSearchParams({
                page: page + 1,
              });
            }
          }}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default TableFooter;
