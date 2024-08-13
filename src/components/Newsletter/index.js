import SubscribeForm from "@/components/Shared/SubscribeForm";
import styles from "./styles.module.scss";
const Newsletter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h4>Stay Up-to-date!</h4>
        <p>The industry insights you need delivered to your inbox monthly.
        </p>
      </div>
      <SubscribeForm />
    </div>
  );
};
export default Newsletter;
