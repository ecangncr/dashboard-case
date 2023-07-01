import styles from "./styles.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ children, ...props }) => {
  return (
    <input className={styles.input} {...props}>
      {children}
    </input>
  );
};

export default Input;
