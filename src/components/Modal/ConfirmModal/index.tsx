import { useCustomParams } from "@/utils";

import styles from "./styles.module.scss";
import Button from "@/components/Button";
import Modal from "../";
import { useMutation } from "@tanstack/react-query";
import { deleteUserRequest } from "@/services";
type Props = {
  refetch: Function;
};
const ConfirmModal: React.FC<Props> = ({ refetch }) => {
  const { searchParams, updateSearchParams } = useCustomParams();

  const id = searchParams.get("id") || "";
  const deleteRequest = useMutation(deleteUserRequest, {
    onSuccess: () => {
      refetch();
      updateSearchParams({
        action: "",
        id: "",
      });
    },
  });
  return (
    <Modal title={"Are you sure?"}>
      <div className={styles.card}>
        <p className={styles.message}>
          Do you really want to delete these records? This process cannot be
          undone.
        </p>
        <div className={styles.buttonContainer}>
          <Button
            disabled={deleteRequest.isLoading}
            onClick={() => deleteRequest.mutate(id)}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
