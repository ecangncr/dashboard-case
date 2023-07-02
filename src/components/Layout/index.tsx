import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./styles.module.scss";

type Props = {
  children?: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
