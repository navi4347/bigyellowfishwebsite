import styles from "./styles.module.scss";
const Newsletter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.underlay}></div>
      <div className={styles.content}>
        <h3>Join our newsletter</h3>
        <p>
          If you’re driven by curiosity and love research-based design
          arguments, the newsletter is for you.
        </p>
      </div>
      <div className={styles.inputContainer}>
        <input type="text" placeholder={"Your email address"} />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
