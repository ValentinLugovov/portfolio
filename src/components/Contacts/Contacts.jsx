import React from "react";
import s from "./contacts.module.css";

const Contacts = (props) => {
  return (
    <div id="contact" className={s.contacts}>
      <div className={s.container}>
        <div className={s.box1}>
          <div className={s.name}>Valentin Lugovov</div>
          <div className={s.who}>front-end developer</div>
        </div>
        <div className={s.box2}>
          <p className={s.header}>Useful Links</p>
          <div className={s.links}>
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Partfolio</p>
            <p>Contact</p>
          </div>
        </div>
        <div className={s.box3}>
          <p className={s.header}>Social Media</p>
          <div className={s.links}>
            <p>Instagram</p>
            <p>Linked In</p>
            <p>Telegram</p>
            <p>Git Hub</p>
            <p>Mobile</p>
            <p>E-Mail</p>
          </div>
        </div>
        <div className={s.box4}></div>
      </div>
    </div>
  );
};

export default Contacts;
