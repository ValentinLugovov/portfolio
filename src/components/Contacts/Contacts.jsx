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
          <div className={s.link}>
            <a className={s.links} href="#top">Home</a><br/><br/>
            <a className={s.links} href="#about">About</a><br/><br/>
            <a className={s.links} href="#skills">Skills</a><br/><br/>
            <a className={s.links} href="#project">Partfolio</a><br/><br/>
            <a className={s.links} href="#contact">Contact</a>
          </div>
        </div>
        <div className={s.box3}>
          <p className={s.header}>Social Media</p>
          <div className={s.link}>
            <a className={s.links} href="https://www.linkedin.com/in/valentin-lugovov/">Linked In</a><br/><br/>
            <a className={s.links} href="https://www.telegram.me/valentin_lugovov/">Telegram</a><br/><br/>
            <a className={s.links} href="https://github.com/ValentinLugovov">Git Hub</a><br/><br/>
            <a className={s.links} href="#s">Mobile</a><br/><br/>
            <a className={s.links} href="#s">E-Mail</a>
          </div>
        </div>
        <div className={s.box4}></div>
      </div>
    </div>
  );
};

export default Contacts;
