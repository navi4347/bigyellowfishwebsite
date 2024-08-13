import styles from "./style.module.scss";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const SocialShare = () => {
    const router = useRouter();
    const [shareUrl, setShareUrl] = useState("");

    useEffect(() => {
        // Construct the full URL using the window's location origin and the router path
        // if(typeof window !=="undefined"){
        // const fullUrl = window.location.origin + router.asPath;
        // setShareUrl(fullUrl);}
    }, [router.asPath]);

    return (
    <div className={styles.sideArea}>
      <div className={styles.shareContainer}>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={32} />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={32} />
        </LinkedinShareButton>
      </div>
    </div>
  );
};
export default SocialShare;
