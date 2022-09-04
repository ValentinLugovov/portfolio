import React from "react";
import s from "./Modal.css";

const Modal = (props) => {
  return (
    <div
      className={`modal ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div
        className="modalContent"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modalHeader">
          <h2 className={s.modalTitle}>Hire Me</h2>
        </div>
        <div className="modalBody">
          E-mail: valentinlugovov@gmail.com
          <br />
          Phone Number: +7 921 921 52 41
        </div>
        <div className="modalFooter">
          <button className="btn" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
