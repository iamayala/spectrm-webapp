import React from "react";
import styles from "../assets/styles/main.module.css";
import {
  FiBell,
  FiChevronDown,
  FiHash,
  FiHome,
  FiImage,
  FiMail,
  FiMessageSquare,
  FiMoreVertical
} from "react-icons/fi";
import { colors } from "../services/constants/colors";

function Home() {
  return (
    <div className={styles.main}>
      {/* header */}
      <div className={styles.navbar}>
        <div>
          <div className={styles.exploreInput}>
            <FiHash />
            <input placeholder="Explore" className={styles.exploreInputField} />
          </div>
        </div>
        <div className={styles.navRight}>
          <div className={styles.navBtn}>
            <FiHome size="20px" />
            <span>Home</span>
          </div>
          <div className={styles.roundBtn}>
            <FiMail size="20px" />
          </div>
          <div className={styles.roundBtn}>
            <FiBell size="20px" />
            <div className={styles.badge}>
              <span>13</span>
            </div>
          </div>
          <div className={styles.profileBtn}>
            <img
              src="https://www.w3schools.com/html/img_girl.jpg"
              className={styles.navUserProfile}
            />
            <span>John Doe</span>
            <FiChevronDown />
          </div>
          <div className={styles.roundBtn}>
            <FiMoreVertical size="20px" />
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.side}>sideabr</div>
        <div className={styles.mainView}>
          <div className={styles.newFeedItem}>
            <img src="https://www.w3schools.com/html/img_girl.jpg" className={styles.feedProfile} />
            <div>
              <input className={styles.newFeedInput} placeholder="What's happening?" />
              <div>
                <FiImage />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.side}>sideabr</div>
      </div>
    </div>
  );
}

export default Home;
