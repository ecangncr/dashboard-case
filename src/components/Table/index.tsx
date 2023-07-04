import { IUser, IUsersGetTypes } from "@/interfaces";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";
import styles from "./styles.module.scss";
import { useCustomParams } from "@/utils";
import ConfirmModal from "../Modal/ConfirmModal";
import EditUserModal from "../Modal/EditUserModal";
import AddUserModal from "../Modal/AddUserModal";

type Props = {
  data: IUsersGetTypes | undefined;
  refetch: Function;
};
const Table: React.FC<Props> = ({ data, refetch }) => {
  const users: IUser[] | undefined = data?.users;
  const count = data?.total || 0;

  const { searchParams } = useCustomParams();

  const action = searchParams.get("action");
  const id = searchParams.get("id");

  return (
    <div className={styles.table}>
      <TableHead />
      <TableBody users={users} />
      <TableFooter count={count} />

      {action === "create" && <AddUserModal refetch={refetch} />}
      {action === "edit" && users && id && (
        <EditUserModal users={users} refetch={refetch} />
      )}
      {action === "delete" && users && id && <ConfirmModal refetch={refetch} />}
    </div>
  );
};

export default Table;
