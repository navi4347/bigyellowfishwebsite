import styles from "./styles.module.scss";
import PrimaryButton from "@/components/Shared/Button/Primary";

const SubscribeForm = () => {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder={"Email Address"} />
      <PrimaryButton>Subscribe</PrimaryButton>
    </div>
  );
};
export default SubscribeForm;
