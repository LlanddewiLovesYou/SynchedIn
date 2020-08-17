import React from "react";
import "./Splash.scss";
import splashImage from "../../assets/splash-image.png";

export interface Props {}

export const Splash: React.FC<Props> = () => {
  return (
    <div className="splash">
      <div className="splash__copy">
        <div className="title">Automate Your Communications!</div>
        <div>
          SynchedIn helps you connect with multiple LinkedIn contact with just a
          a few simple steps! Simply login, select the company, and the
          connections you want to contact, write your message and send with one
          click!
        </div>
      </div>
      <img src={splashImage} />
    </div>
  );
};
