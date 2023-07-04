import { useCustomParams } from "@/utils";
import CloseIcon from "../Icons/CloseIcon";

import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Modal: React.FC<Props> = ({ title, children, ...props }) => {
  const { updateSearchParams } = useCustomParams();

  const close = () => {
    updateSearchParams({
      action: "",
    });
  };

  return (
    <div className={styles.overlay} {...props} onClick={() => close()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}>
            <CloseIcon />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
