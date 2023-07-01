import styles from "./styles.module.scss";

type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<Props> = ({ children, ...props }) => {
  return (
    <label className={styles.label} {...props}>
      {children}
    </label>
  );
};

export default Label;
