import CaretCircleIcon from "@/components/Icons/CaretCircle";
import styles from "./styles.module.scss";
import BellIcon from "@/components/Icons/Bell";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <CaretCircleIcon />
      <BellIcon />
    </header>
  );
};

export default Header;
