import styles from "./styles.module.scss";
import Image from "next/image";

const BigCardAuthor = ({ author ,date}) => {
    return (
        <div className={styles.desc}>
            <div className={styles.author}>
                <Image
                    src={"https://picsum.photos/50"}
                    alt={"author"}
                    width={50}
                    height={50}
                />
                {author}
            </div>
            {date}
        </div>
    );
}
export default BigCardAuthor;
