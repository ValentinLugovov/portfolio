import React from "react";
import s from "./items.module.css";
import p1 from "../../../img/crm.png";
import p2 from "../../../img/social.png";
import p3 from "../../../img/timer.png";
import p4 from "../../../img/this.png";

const Items = (props) => {
  let itemsPhoto = [
    { id: s.box1, name: p1, alt: "socialApp" },
    { id: s.box2, name: p2, alt: "countTimer" },
    { id: s.box3, name: p3, alt: "portfolioApp" },
    { id: s.box4, name: p4, alt: "website" },
  ];

  let items = itemsPhoto.map((photo) => {
    return (
      <div className={photo.id}>
        <img className={s.img} src={photo.name} alt={photo.alt} />
      </div>
    );
  });

  return <div className={s.boxes}>{items}</div>;
};

export default Items;
