import React from "react";
import SocialCard from "./SocialCard";
import style from "./App.module.css";
import InfoIcon from "@material-ui/icons/Info";
const App = () => {
  return (
    <>
      <div className={style.socialSection}>
        <h1 className={style.followHeading}>Follow Us On Facebook</h1>
        <div className={style.facebookSection}>
          <div style={{ display: "flex" }}>
            <div className={style.tweetsBox}>
              <h3 className={style.tweetHeading}>
                Tweets
                <span className={style.tweetLink}>
                  &nbsp; by <a href="#"> @ iic</a>
                </span>
              </h3>
            </div>
            <div className={style.infoIconBox}>
              <span className={style.InfoIcon}>
                <InfoIcon className={style.iconColor} />
              </span>
            </div>
          </div>
          <SocialCard />
          <SocialCard />
        </div>
      </div>
    </>
  );
};
export default App;
