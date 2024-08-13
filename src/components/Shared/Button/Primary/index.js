import styles from "./styles.module.scss";
const PrimaryButton = ({ children, size,clicked }) => {
  return (
    <button className={`${styles.wrapper} ${size == "ml" && styles.ml}`} onClick={clicked}>
      {children}
    </button>
  );
};
export default PrimaryButton;
