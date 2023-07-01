import styles from "./styles.module.scss";

type Props = {
  style?: React.CSSProperties;
};

const Logo: React.FC<Props> = ({ style = {} }) => {
  return (
    <h1 className={styles.logo} style={style}>
      MANAGE COURSES
    </h1>
  );
};

export default Logo;
