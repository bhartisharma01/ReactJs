import React from "react";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import TwitterIcon from "@material-ui/icons/Twitter";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import style from "./App.module.css";

const SocialCard = () => {
  return (
    <>
      <div className={style.SocialCard}>
        <hr style={{ border: "1px solid #eeeeee" }} />
        <div style={{ display: "flex", paddingTop: "8px" }}>
          <span className={style.developerIcon}>
            <DeveloperModeIcon className={style.iconColor} />
          </span>
          <div className={style.tweetsBox}>
            <h4 className={style.SocialCardSubHead}>GirlScript Summer Code</h4>
            <p>
              <a href="#" className={style.iicLink}>
                @ iic
              </a>
            </p>
            <p className={style.iicLink}>
              &nbsp;Replying to
              <a href="#" className={style.iicLink}>
                @ iic
              </a>
            </p>
          </div>
          <div className={style.infoIconBox}>
            <TwitterIcon className={style.iconColor} />
          </div>
        </div>
        <div style={{ padding: "8px 13px" }}>
          <p className={style.cardPara}>
            Hence, we are looking forward for your support to our program.We are
            looking forward for your support to our program.We are looking
            forward for your support to our program.We are looking forward for
            your support to our program.
          </p>
        </div>
        <div style={{ display: "flex", padding: "28px 11px 5px 11px" }}>
          <div className={style.tweetsBox}>
            <FavoriteBorderOutlinedIcon className={style.iconColor} />
            <ArrowForwardOutlinedIcon className={style.iconColor} />
          </div>
          <div className={style.infoIconBox}>
            <span className={style.dateFont}>Mar 28, 2021</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default SocialCard;
